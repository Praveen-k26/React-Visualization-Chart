
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { grey } from "@material-ui/core/colors";
import {createClient, Provider, useQuery} from "urql";

const useStyles = makeStyles({
    box: {
        width: "166px",
        margin: "5px"
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
    formLabel: {
        paddingBottom: "20px"
    },
    formControl: {
        width: "100%",
        marginBottom: "40px"
    },
    formGroup: {
        flexDirection: "row",
        justifyContent: "center"
    },
    tubingPressure: {
        color: "green"
    },
    casingPressure: {
        color: "blue"
    },
    oilTemp: {
        color: "purple"
    },
    flareTemp: {
        color: "red"
    },
    waterTemp: {
        color: "teal"
    },
    injValveOpen: {
        color: "black"
    }
});

const EOGCheckbox = withStyles({
    root: {
        color: grey[500],
        "&$checked": {
            color: grey[900]
        }
    },
    checked: {}
})(props => <Checkbox color="default" {...props} />);

const client = createClient({
    url: "https://react.eogresources.com/graphql"
});

const metricArrayQuery = `
query {
  getMetrics                                                                                                              
}
`;

export default () => {
    return (
        <Provider value={client}>
            <MetricSelector />
        </Provider>
    );
};


const MetricSelector = () => {
    const [metricArrayRes] = useQuery({
        query: metricArrayQuery
    });
    const { data, error } = metricArrayRes;
    const classes = useStyles();
    const dispatch = useDispatch();
    const selectedMetric = useSelector(
        state => state.selectedMetrics.selectedMetric
    );
    // const measurements = useSelector(state => state.measurements);

    useEffect(
        () => {
            if (error) {
                console.log(error.message);
                return;
            }
            if (!data) return;
            const arr = []
            data.getMetrics.map((item, index) => {
                return arr.push({value:item, label:item})
            })
            const result = data.getMetrics
            Object.keys(result).map((item,index) => {
                return console.log('Object.keys--->', result[item])
            })
            console.log('useEffect1-->', data.getMetrics)
            console.log('arr test', arr)
            data && data.getMetrics.map((x,i) => {
                return console.log('checking Checkbo Metric Value-->', x)
            })
        }
    );


    return (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend" className={classes.formLabel}>
                Select metric:
            </FormLabel>
            <FormGroup className={classes.formGroup}>
                {data ? data.getMetrics.map((metric, i) => {
                    const isChecked = metric === selectedMetric;
                    return (
                        <Box className={classes.box} key={`metric${i}`}>
                            <FormControlLabel
                                control={
                                    <EOGCheckbox
                                        checked={isChecked}
                                        onChange={() =>
                                            dispatch({
                                                type: "SELECT_METRIC",
                                                payload: metric
                                            })

                                        }
                                        value={metric}
                                    />
                                }
                                label={metric}
                            />
                        </Box>
                    );
                }): 'NO DATA'}
            </FormGroup>
        </FormControl>
    );
};

