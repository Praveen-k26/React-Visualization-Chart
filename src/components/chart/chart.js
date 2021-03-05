import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Provider,
    createClient,
    useQuery,
    useSubscription,
    defaultExchanges,
    subscriptionExchange,
} from "urql";
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import {ResponsiveContainer} from 'recharts/es6/component/ResponsiveContainer'
import {Label} from 'recharts/es6/component/Label'
import {CartesianGrid} from 'recharts/es6/cartesian/CartesianGrid'
import {Tooltip} from 'recharts/es6/component/Tooltip'
import {Line} from 'recharts/es6/cartesian/Line'
import {XAxis} from 'recharts/es6/cartesian/XAxis'
import {YAxis} from 'recharts/es6/cartesian/YAxis'
import {LineChart} from 'recharts/es6/chart/LineChart'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const subscriptionClient = new SubscriptionClient(process.env.REACT_APP_WS_URL,{reconnect:true})

const client = createClient({
    url: "https://react.eogresources.com/graphql",
    exchanges: [
        ...defaultExchanges,
        subscriptionExchange({
            forwardSubscription: operation => subscriptionClient.request(operation)
        })]
});

const current_time = new Date().valueOf();

const measurementQuery = `
query($input: MeasurementQuery) {
  getMeasurements(input: $input) {
    metric,
    at,
    value,
    unit
  }
}
`;

const newMeasurementSubscription = `
subscription {
    newMeasurement{
        metric
        value
        unit
        at
    }
}
`
const useStyles = makeStyles({
    chartBox: {
        // overflowX: "scroll",
        padding: "5px 0"
    },
    box: {
        width: "400px",
        margin: "5px",
        marginLeft: "40%"
    },
    card: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "64px",
        padding: "0",
        width: "85%"
    },
    cardContent: {
        padding: 0,
        "&:last-child": {
            paddingBottom: 0
        }
    },
    cardTitle: {
        fontSize: "24px"
    },

});

const getLabel = metricName => {
    switch (metricName) {
        case "tubingPressure":
        case "casingPressure":
            return "PSI";
        case "oilTemp":
        case "flareTemp":
        case "waterTemp":
            return "F";
        case "injValveOpen":
            return "%";
        default:
            return;
    }
};

export default () => {
    return (
        <Provider value={client}>
            <Chart />
        </Provider>
    );
};

const Chart= () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    // const heartBeat = useSelector(state => state.heartBeat);
    const selectedMetric = useSelector(state => state.selectedMetrics.selectedMetric);
    // const measurements = useSelector(state => state.measurements);




    const handleSubscription = (measurements = [], response) => {
        return [response.newMeasurement, ...measurements]
    }

    const [measurementRes] = useQuery({
        query: measurementQuery,
        variables: {
            input: {
                metricName: selectedMetric,
                before: current_time - 1800000,
                after: current_time
            }
        }
    });
    const [newMeasurementRes] = useSubscription({
        query:newMeasurementSubscription
    },handleSubscription);

    const oilTest = newMeasurementRes.data && newMeasurementRes.data.filter(measurement => measurement.metric === selectedMetric)

    const { data, error } = measurementRes;

    useEffect(() => {
        if (error) {
            // console.log(error.message);
            return;
        }
        if (!data) {
            return;
        } else {
            const { getMeasurements } = data;
            // const { newMeasurement } = oilTest
            dispatch({
                type: "GET_MEASUREMENTS",
                payload: getMeasurements
            });
        }
    });

        const filteringData = newMeasurementRes.data && newMeasurementRes.data.filter(measurement => measurement.metric === selectedMetric)
        const displayData = filteringData && filteringData.slice(0,1).map(measurement => measurement.value)



    const timeFormatter = (time) => {
        let date = new Date(parseInt(time));
        let localeSpecificTime = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'});
        return localeSpecificTime.replace(/:|d+ /, '');
    }


    if (!data) return <LinearProgress />;

    const metricColors = {
        tubingPressure: 'green',
        casingPressure: 'blue',
        oilTemp: 'purple',
        flareTemp: 'red',
        waterTemp: 'teal',
        injValveOpen: 'black',
    }

    const label = getLabel(selectedMetric);

    return (
        <>
            <Box className={classes.box}>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.cardTitle}>
                            <span style={{ fontWeigt: 'bold', color: metricColors[selectedMetric]}}>{selectedMetric} : </span>
                      <span style={{ color: metricColors[selectedMetric]}}>
                          {displayData}
                      </span>
                        </Typography>
                    </CardContent>
                </Card>

            </Box>
        <Box className={classes.chartBox}>
            {oilTest && oilTest.length ? (
                <ResponsiveContainer width="100%" minWidth={300} aspect={16.0 / 9.0}>
                    <LineChart
                        height={600}
                        data={oilTest}
                        margin={{
                            top: 5,
                            right: 5,
                            left: 5,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="at"
                            tickFormatter={timeFormatter}
                            type={"number"}
                            tickCount='11'
                            scale="auto"
                            domain={["dataMin, dataMax"]} />
                        <YAxis domain={["auto", "auto"]} scale="auto" tickCount='15'>
                            <Label value={label} position='insideLeft' offset='-2' />
                        </YAxis>
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke={metricColors[selectedMetric]}
                            activeDot={{ r: 6 }}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            ) : null}
        </Box>
            </>
    );
};