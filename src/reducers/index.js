import Projects from "./Projects";
import Tasks from "./Tasks";
import {combineReducers} from "redux";

export default combineReducers({
    projects : Projects,
    tasks: Tasks,
})