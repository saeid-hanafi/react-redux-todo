import React from "react";
import {connect} from "react-redux";
import {archiveTask} from '../actions';

const Checkbox = ({task, archiveTask}) => {
    return (
        <div className="checkbox-holder" onClick={() => {
            archiveTask(task.taskID)
        }}>
            <span className="checkbox"></span>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks,
    }
}
export default connect(mapStateToProps, {
    archiveTask
})(Checkbox);