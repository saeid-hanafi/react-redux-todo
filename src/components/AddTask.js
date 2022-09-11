import React from "react";
import {connect} from "react-redux";
import {setMainAddTaskActive, setQuickAddTaskActive, setAddTaskTask, setAddTaskProjectOverlay, setAddTaskDateActive, setTask} from '../actions';
import {FaRegCalendarAlt, FaRegListAlt} from "react-icons/fa";
import ProjectOverlay from "./ProjectOverlay";
import TaskDate from "./TaskDate";

const AddTask = ({
                     quickAddTaskIsActive,
                     projectOverlay,
                     task,
                     setAddTaskProjectOverlay,
                     mainAddTaskIsActive,
                     setMainAddTaskActive,
                     setQuickAddTaskActive,
                     tasks,
                     setAddTaskDateActive,
                     isTaskDateActive,
                     setAddTaskTask,
                     setTask,
                     projectID,
                     date,
                 }) => {

    return (
        <div
            className={quickAddTaskIsActive ? 'add-task add-task__overlay' : 'add-task'}
            data-testid="add-task-comp"
        >
            <div
                className="add-task__shallow"
                data-testid="show-main-action"
                onClick={() => {
                    setMainAddTaskActive(!mainAddTaskIsActive)
                }}
                onKeyDown={() => {
                    setMainAddTaskActive(!mainAddTaskIsActive)
                }}
                tabIndex={0}
                aria-label="Add task"
                role="button"
            >
                <span className="add-task__plus">+</span>
                <span className="add-task__text">Add Task</span>
            </div>

            {(quickAddTaskIsActive || mainAddTaskIsActive) && (
                <div className="add-task__main" data-testid="add-task-main">
                    {quickAddTaskIsActive && (
                        <>
                            <div data-testid="quick-add-task">
                                <h2 className="header">Quick Add Task</h2>
                                <span
                                    className="add-task__cancel-x"
                                    data-testid="add-task-quick-cancel"
                                    aria-label="Cancel adding task"
                                    onClick={() => {
                                        setQuickAddTaskActive(false);
                                    }}
                                    onKeyDown={() => {
                                        setQuickAddTaskActive(false);
                                    }}
                                    tabIndex={0}
                                    role="button"
                                >
                  X
                </span>
                            </div>
                        </>
                    )}
                    <ProjectOverlay/>
                    <TaskDate/>
                    <input
                        className="add-task__content"
                        aria-label="Enter your task"
                        data-testid="add-task-content"
                        type="text"
                        value={task}
                        onChange={e => {
                            setAddTaskTask(e.target.value);
                        }}
                    />
                    <button
                        type="button"
                        className="add-task__submit"
                        data-testid="add-task"
                        onClick={() => {
                            setTask(task, projectID, date, tasks);
                        }}
                    >
                        Add Task
                    </button>
                    {!quickAddTaskIsActive && (
                        <span
                            className="add-task__cancel"
                            data-testid="add-task-main-cancel"
                            onClick={() => {
                                setMainAddTaskActive(false);
                            }}
                            onKeyDown={() => {
                                setMainAddTaskActive(false);
                            }}
                            aria-label="Cancel adding a task"
                            tabIndex={0}
                            role="button"
                        >
              Cancel
            </span>
                    )}
                    <span
                        className="add-task__project"
                        data-testid="show-project-overlay"
                        onClick={() => {
                            setAddTaskProjectOverlay(!projectOverlay)
                        }}
                        role="button"
                    >
            <FaRegListAlt/>
          </span>
                    <span
                        className="add-task__date"
                        data-testid="show-task-date-overlay"
                        onClick={() => {
                            setAddTaskDateActive(!isTaskDateActive);
                        }}
                        tabIndex={0}
                        role="button"
                    >
            <FaRegCalendarAlt/>
          </span>
                </div>
            )}
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        mainAddTaskIsActive: state.tasks.addTask.mainAddTaskIsActive,
        quickAddTaskIsActive: state.tasks.addTask.quickAddTaskIsActive,
        task: state.tasks.addTask.task,
        projectOverlay: state.tasks.addTask.projectOverlay,
        tasks: state.tasks.tasks,
        isTaskDateActive: state.tasks.addTask.isTaskDateActive,
        projectID: state.tasks.addTask.projectID,
        date: state.tasks.addTask.date,
    }
}
export default connect(mapStateToProps, {
    setMainAddTaskActive,
    setQuickAddTaskActive,
    setAddTaskTask,
    setAddTaskProjectOverlay,
    setAddTaskDateActive,
    setTask
})(AddTask);