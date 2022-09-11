import React, {Component} from "react";
import {connect} from "react-redux";
import IndividualProject from "./IndividualProject";
import {setProjectIDForTasks} from "../actions";

class Projects extends Component{

    render() {
        let {projects, setProjectIDForTasks} = this.props;
        return(
            <ul className="sidebar__projects">
                {projects.length && projects.map(project => (
                    <li className="sidebar__project" key={project.projectID} onClick={() => {
                        setProjectIDForTasks(project.projectID)
                    }}>
                        <div role="button">
                            <IndividualProject project={project}/>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects.projects,
    }
}
export default connect(mapStateToProps, {
    setProjectIDForTasks
})(Projects);