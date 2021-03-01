
import * as actions from "../actions";

const initialState = {
  temperatureinCelsius: null,
  temperatureinFahrenheit: null,
  description: "",
  locationName: ""
};
// @ts-ignore
const toF = c => (c * 9) / 5 + 32;

// @ts-ignore
const weatherDataRecevied = (state, action) => {
  const { getWeatherForLocation } = action;
  const {
    description,
    locationName,
    temperatureinCelsius
  } = getWeatherForLocation;

  return {
    temperatureinCelsius,
    temperatureinFahrenheit: toF(temperatureinCelsius),
    description,
    locationName
  };
};

const handlers = {
  // @ts-ignore
  [actions.WEATHER_DATA_RECEIVED]: weatherDataRecevied
};
// @ts-ignore
export default (state = initialState, action) => {
  // @ts-ignore
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};