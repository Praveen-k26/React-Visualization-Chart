import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux-starter-kit';
// @ts-ignore
import sagas from '../sagas'
// @ts-ignore
import weatherReducer from '../reducers/weather';
import metricReducer from "../reducers/metricSelector";
import heartBeatReducer from "../reducers/heartBeat";
import measurementsReducer from "../reducers/measurementData";

// const weather = combineReducers(reducers);
// @ts-ignore

export default () => {
  const rootReducer = combineReducers({
    weather: weatherReducer,
    selectedMetrics: metricReducer,
    // @ts-ignore
    heartBeat: heartBeatReducer,
    measurements: measurementsReducer
  })
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, composeEnhancers(middlewares));
  // @ts-ignore
  sagas.forEach(sagaMiddleware.run)

  return store;
};
