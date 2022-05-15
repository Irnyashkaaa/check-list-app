import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {

    return (
        <div className="header">
            <div className="headerTitle">Check list</div>
            <div className="headerLinks">
                <NavLink className='headerLink' to='/'>Home</NavLink>
                <NavLink className='headerLink' to='/info'>Info</NavLink>
            </div>
        </div>
    )
}

export default Header