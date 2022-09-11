import React from "react";
import './ProjectOverlay.css';
import {connect} from "react-redux";
import {setAddTaskProjectOverlay, setProjectIDForTasks} from "../actions";

const ProjectOverlay = ({projects, projectOverlay, setAddTaskProjectOverlay, setProjectIDForTasks}) => {
    return (
        <div className="project-overlay">
            <ul className="project-overlay__list">
                {(projects && projectOverlay ) && projects.map(project => (
                    <li key={project.projectID} onClick={() => {
                        setProjectIDForTasks(project.projectID);
                        setAddTaskProjectOverlay(false)
                    }}>
                        <div>{project.name}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        projects : state.projects.projects,
        projectOverlay : state.tasks.addTask.projectOverlay,
    }
}
export default connect(mapStateToProps, {
    setAddTaskProjectOverlay,
    setProjectIDForTasks
})(ProjectOverlay);