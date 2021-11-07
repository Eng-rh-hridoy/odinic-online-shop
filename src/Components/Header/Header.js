import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
    // Manage Toggle Handler 
    const [click, setClick] = useState(false);
    const HandleClick =()=>{
        setClick(!click);
    }

    return (
        <div className="header-container">
            <header>
                <div className="logo-wrapper">
                    <img src={logo} alt="" />
                </div>

                <nav className="nav">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/review">Review</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/inventory">Inventory</NavLink>
                        </li>
                    </ul>
                    <button onClick={HandleClick} className="toggle-menu">
                        <FontAwesomeIcon icon={click ? faTimesCircle: faBars} />
                    </button>
                </nav>
            </header>
        </div>
    );
};

export default Header;