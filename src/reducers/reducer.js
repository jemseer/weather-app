import {combineReducers} from "redux";
import {weatherInfo} from "./weatherReducer";

//combine reducer

const reducers=combineReducers({
    WeatherInfo:weatherInfo
});
export default reducers;