import React from "react";
import {FaTrashAlt} from "react-icons/fa";
import "./IndividualProject.css";
import {connect} from "react-redux";
import {showOrHideDelConfirm, deleteProjectForEver} from "../actions";

const IndividualProject = ({project, showConfirmVal, showConfirmProjectID, showOrHideDelConfirm, deleteProjectForEver}) => {
    return(
        <>
            <span className="sidebar__dot">.</span>
            <span className="sidebar__project-name">
                {project.name}
            </span>
            <span className="sidebar__project-delete" onClick={() => {
                showOrHideDelConfirm(!showConfirmVal, project.projectID);
            }}>
                <FaTrashAlt/>
                {showConfirmVal && showConfirmProjectID === project.projectID && (
                    <div className="project-delete-modal">
                        <div className="project-delete-modal__inner">
                            <p>Are you sure you want to delete this project?</p>
                            <button type="button" onClick={() => {
                                deleteProjectForEver(project.projectID);
                            }}>
                                Delete
                            </button>
                            <span role="button" onClick={() => {
                                showOrHideDelConfirm(!showConfirmVal, project.projectID);
                            }}>
                                Cancel
                            </span>
                        </div>
                    </div>
                )}
            </span>
        </>
    );
}

const mapStateToProps = (state) => {
    return{
        showConfirmVal: state.projects.showConfirm.isActive,
        showConfirmProjectID: state.projects.showConfirm.projectID,
    }
}

export default connect(mapStateToProps, {
    showOrHideDelConfirm,
    deleteProjectForEver
})(IndividualProject);