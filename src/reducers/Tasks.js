import constants from "../actions/constants";

let initializeState = {
    tasks: [
        {
            archived: false,
            taskID: 1,
            projectID: 1,
            userID: "SaeedHanafi",
            name: "First Test",
            date: "20/09/2022",
        },
        {
            archived: false,
            taskID: 2,
            projectID: 2,
            userID: "SaeedHanafi",
            name: "Second Test",
            date: "11/09/2022",
        },
        {
            archived: false,
            taskID: 3,
            projectID: 3,
            userID: "RozHanafi",
            name: "Third Test",
            date: "12/09/2022",
        }
    ],
    catchTasks: [],
    addTask: {
        mainAddTaskIsActive: false,
        quickAddTaskIsActive: false,
        task: "",
        projectID: "",
        projectOverlay: false,
        isTaskDateActive: false,
        date: "",
    }
}

export default (state = initializeState, action) => {
    switch (action.type) {
        case constants.GET_ACTIVE_TASKS:
            return {...state, catchTasks: action.payload.newTasks}
        case constants.CHANGE_TASKS_ARCHIVE:
            return {...state, tasks: state.tasks.filter(task => task.taskID !== action.payload.taskID), catchTasks: state.catchTasks.filter(task => task.taskID !== action.payload.taskID)}
        case constants.SET_MAIN_ADD_TASK_ACTIVE:
            return {...state, addTask: {...state.addTask, mainAddTaskIsActive: action.payload.isActive}};
        case constants.SET_QUICK_ADD_TASK_ACTIVE:
            return {...state, addTask: {...state.addTask, quickAddTaskIsActive: action.payload.isActive}};
        case constants.SET_PROJECT_ID_FOR_TASKS:
            return {...state, addTask: {...state.addTask, projectID: action.payload.projectID}, catchTasks: state.tasks.filter(task => task.projectID === action.payload.projectID && task.archived === false)};
        case constants.SET_PROJECT_OVERLAY:
            return {...state, addTask: {...state.addTask, projectOverlay: action.payload.overLay}};
        case constants.ADD_TASK_DATE_ACTIVE:
            return {...state, addTask: {...state.addTask, isTaskDateActive: action.payload.isActive}};
        case constants.ADD_DATE_TIME:
            return {...state, addTask: {...state.addTask, date: action.payload.dateTime}};
        case constants.SET_ADD_TASK_TASK:
            return {...state, addTask: {...state.addTask, task: action.payload.value}};
        case constants.ADD_TASK:
            return {...state, tasks: action.payload.tasks, addTask: {...state.addTask, task: ""}};
        default:
            return state;
    }
}