import React from "react";
import {FaInbox, FaRegCalendarAlt, FaRegCalendar, FaChevronDown} from "react-icons/fa";
import "./Sidebar.css";
import Projects from "../Projects";
import AddProject from "../AddProject";
import {connect} from "react-redux";
import {getTasksByActiveStatus, setActiveForProjects} from "../../actions";

const Sidebar = ({setActiveForProjects, getTasksByActiveStatus, tasks}) => {
    return(
        <div>
            <div className="sidebar">
                <ul className="sidebar__generic">
                    <li onClick={() => {
                        setActiveForProjects("index");
                        getTasksByActiveStatus("index", tasks);
                    }}>
                        <div>
                            <span><FaInbox/></span>
                            <span>Inbox</span>
                        </div>
                    </li>
                    <li onClick={() => {
                        setActiveForProjects("Today");
                        getTasksByActiveStatus("Today", tasks);
                    }}>
                        <div>
                            <span><FaRegCalendar/></span>
                            <span>Today</span>
                        </div>
                    </li>
                    <li onClick={() => {
                        setActiveForProjects("Next-7");
                        getTasksByActiveStatus("Next-7", tasks);
                    }}>
                        <div>
                            <span><FaRegCalendarAlt/></span>
                            <span>Next 7 Days</span>
                        </div>
                    </li>
                </ul>
                <div className="sidebar__middle">
                    <span><FaChevronDown/></span>
                    <span><h2>Projects</h2></span>
                </div>
                <Projects/>
                <AddProject/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        tasks: state.tasks.tasks
    }
}

export default connect(mapStateToProps, {
    setActiveForProjects,
    getTasksByActiveStatus
})(Sidebar);