import React, {Component} from "react";
import {connect} from "react-redux";
import Checkbox from "./Checkbox";
import './Tasks.css';
import AddTask from "./AddTask";

class Tasks extends Component {

    render() {
        let {tasks} = this.props;
        return(
            <div className="tasks">
                <h2>projects name</h2>
                <ul className="tasks__list">
                    {tasks.length && tasks.map(task => (
                        <li><span><Checkbox task={task}/></span><span>{task.name}</span></li>
                    ))}
                </ul>
                <AddTask/>
            </div>
        )
    }

}

const setStatesToProps = (state) => {
    return{
        tasks: state.tasks.catchTasks,
    }
}

export default connect(setStatesToProps)(Tasks);