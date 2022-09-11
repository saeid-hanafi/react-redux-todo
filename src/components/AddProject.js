import React from "react";
import "./AddProject.css";
import {connect} from "react-redux";
import {addProjectValueState, changeAddProjectState, addProjectState, clearProjectVal} from "../actions";

const AddProject = ({isActive, value, addProjectValueState, changeAddProjectState, addProjectState, clearProjectVal}) => {
    return(
        <div className="add-project">
            {isActive && (
                <div className="add-project__input">
                    <input type="text" value={value} onChange={(e) => {
                        addProjectValueState(e.target.value);
                    }} className="add-project__name" placeholder="Project Name"/>
                    <button className="add-project__submit" onClick={() => {
                        addProjectState(value);
                        clearProjectVal();
                    }}>Add Project</button>
                    <span className="add-project__cancel"onClick={() => {
                        changeAddProjectState(!isActive);
                    }}>Cancel</span>
                </div>
            )}
            <span className="add-project__plus"onClick={() => {
                changeAddProjectState(!isActive);
            }}>+</span>
            <span children="add-project__text" onClick={() => {
                changeAddProjectState(!isActive);
            }}>Add Project</span>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        isActive: state.projects.addProject.isActive,
        value: state.projects.addProject.value,
    }
}

export default connect(mapStateToProps,{
    addProjectValueState,
    changeAddProjectState,
    addProjectState,
    clearProjectVal
})(AddProject);