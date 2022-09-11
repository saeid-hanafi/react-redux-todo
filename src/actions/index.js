import constants from "./constants";
import {generatePushId} from "../helper";
import moment from 'moment';

export const addProjectValueState = (value) => {
    return{
        type: constants.ADD_PROJECT_VAL,
        payload: {
            value,
        }
    }
}

export const changeAddProjectState = (status) => {
    return{
        type: constants.ADD_PROJECT_CHANGE,
        payload: {
            status
        }
    }
}

export const addProjectState = (value) => {
    return{
        type: constants.ADD_PROJECT,
        payload: {
            project: {
                projectID: generatePushId(),
                userID: "SaeedHanafi",
                name: value,
            }
        }
    }
}

export const clearProjectVal = () => {
    return{
        type: constants.CLEAR_PRODUCT_INPUT,
        payload: {
            value: ""
        }
    }
}

export const showOrHideDelConfirm = (showOrHideVal, projectID) => {
    return{
        type: constants.SHOW_OR_HIDE_DEL_CONF,
        payload: {
            showOrHideVal,
            projectID,
        }
    }
}

export const deleteProjectForEver = (projectID) => {
    return{
        type: constants.DEL_PROJECT_FOR_EVER,
        payload: {
            projectID
        }
    }
}

export const setActiveForProjects = (active) => {
    return{
        type: constants.SET_ACTIVE_FOR_PROJECTS,
        payload: {
            active
        }
    }
}

export const getTasksByActiveStatus = (active, tasks) => {
    const dateObject = new Date();
    const todayDate = moment().format("DD/MM/YYYY");
    let newTasks = []
    switch (active) {
        case "index":
            newTasks = tasks.filter(task => task.archived === false);
            break;
        case "Today":
            newTasks = tasks.filter(task => task.date === todayDate && task.archived === false);
            break;
        case "Next-7":
            newTasks = tasks.filter(task => moment(task.date, "DD/MM/YYYY").diff(moment(), "days") <= 7 && task.date >= todayDate && task.archived === false);
            break;
    }

    return{
        type: constants.GET_ACTIVE_TASKS,
        payload: {
            newTasks
        }
    }
}

export const archiveTask = (taskID) => {
    return{
        type: constants.CHANGE_TASKS_ARCHIVE,
        payload: {
            taskID
        }
    }
}

export const setMainAddTaskActive = (isActive) => {
    return{
        type: constants.SET_MAIN_ADD_TASK_ACTIVE,
        payload: {
            isActive
        }
    }
}

export const setQuickAddTaskActive = (isActive) => {
    return{
        type: constants.SET_QUICK_ADD_TASK_ACTIVE,
        payload: {
            isActive
        }
    }
}

export const setProjectIDForTasks = (projectID) => {
    return{
        type: constants.SET_PROJECT_ID_FOR_TASKS,
        payload: {
            projectID
        }
    }
}

export const setAddTaskProjectOverlay = (overLay) => {
    return{
        type: constants.SET_PROJECT_OVERLAY,
        payload: {
            overLay
        }
    }
}

export const setAddTaskDateActive = (isActive) => {
    return{
        type: constants.ADD_TASK_DATE_ACTIVE,
        payload: {
            isActive
        }
    }
}

export const setAddTaskDate = (dateTime) => {
    return{
        type: constants.ADD_DATE_TIME,
        payload: {
            dateTime
        }
    }
}

export const setAddTaskTask = (value) => {
    return{
        type: constants.SET_ADD_TASK_TASK,
        payload: {
            value
        }
    }
}

export const setTask = (task, projectID, date, tasks) => {
    const getLastID = tasks[tasks.length - 1].taskID;
    const ID = projectID != null ? projectID : 0;
    const taskVal = task ? task : "New Task Without Value";
    const dateVal = date ? date : moment().format("DD/MM/YYYY");
    let newTask = {
        archived: false,
        taskID: getLastID + 1,
        projectID: ID,
        userID: "RozHanafi",
        name: taskVal,
        date: dateVal,
    }

    tasks.push(newTask);
    return{
        type: constants.ADD_TASK,
        payload: {
            tasks
        }
    }
}