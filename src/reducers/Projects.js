import constants from "../actions/constants";
let initializeState = {
    active: "index",
    projects: [
        {
            projectID: 1,
            userID: "SaeedHanafi",
            name: "First Test",
        },
        {
            projectID: 2,
            userID: "SaeedHanafi",
            name: "Second Test",
        },
        {
            projectID: 3,
            userID: "RozHanafi",
            name: "Third Test",
        }
    ],
    addProject: {
        isActive: true,
        value: "",
    },
    showConfirm: {
        isActive: false,
        projectID: null,
    }
}

export default (state = initializeState, action) => {
    switch (action.type) {
        case constants.ADD_PROJECT_VAL:
            return {...state, addProject: {...state.addProject, value: action.payload.value}};
        case constants.ADD_PROJECT_CHANGE:
            return {...state, addProject: {...state.addProject, isActive: action.payload.status}};
        case constants.ADD_PROJECT:
            return {...state, projects: [...state.projects, action.payload.project]};
        case constants.CLEAR_PRODUCT_INPUT:
            return {...state, addProject: {...state.addProject, value: action.payload.value}};
        case constants.SHOW_OR_HIDE_DEL_CONF:
            return {...state, showConfirm: {isActive: action.payload.showOrHideVal, projectID: action.payload.projectID}};
        case constants.DEL_PROJECT_FOR_EVER:
            return {...state, projects: state.projects.filter(project => project.projectID !== action.payload.projectID)};
        case constants.SET_ACTIVE_FOR_PROJECTS:
            return {...state, active: action.payload.active};
        default:
            return state;
    }
}