import React from "react";
import Sidebar from "./Sidebar";
import Tasks from "../Tasks";
import "./Content.css";

const Content = () => {
    return(
        <div className="content">
            <Sidebar/>
            <Tasks/>
        </div>
    );
}

export default Content;