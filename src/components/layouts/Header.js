import React from "react";
import {FaPizzaSlice} from "react-icons/fa";
import "./Header.css";
import {connect} from "react-redux";
import {setQuickAddTaskActive} from "../../actions";

const Header = ({setQuickAddTaskActive}) => {
    return(
        <header className="header">
            <nav>
                <div className="logo">
                    <img src="http://127.0.0.1/reactjs/reduxtodos/public/images/logo.png" alt="Logo PNG"/>
                </div>
                <div className="settings">
                    <ul>
                        <li className="settings__add">
                            <button role="button" onClick={() => {
                                setQuickAddTaskActive(true)
                            }}>
                                +
                            </button>
                        </li>
                        <li className="settings__darkmode">
                            <button role="button">
                                <FaPizzaSlice/>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

const mapStateToProps = (state) => {
    return{

    }
}

export default connect(mapStateToProps,{
    setQuickAddTaskActive
})(Header);