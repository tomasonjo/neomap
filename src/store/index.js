import {combineReducers, createStore} from 'redux';
import layerReducer from "../reducers/layers";
import uiReducer from "../reducers/ui";
// import driverReducer from "../reducers/driver";

export default () => {
    return createStore(
        combineReducers({
            layers: layerReducer,
            ui: uiReducer,
            // driver: driverReducer,
        })
    );
};
