import React, { useState } from 'react'
import logo from "../assets/pizzaLogo.png"
import "../Styles/Navbar.css"
import {Link} from "react-router-dom"
import ReorderIcon from '@material-ui/icons/Reorder';





function Navbar() {

    const [openLinks, setOpeninks] = useState(false)

    function handleClick () {
        return (
            setOpeninks(!openLinks)
        )
    }

    return (
        <div className="navbar">
            <div className="logo" id={openLinks ? "open" : "close"}>
                <img src={logo} alt="" />
                <div className="hiddenLinks">
                    <Link to="/home"> Home </Link>
                    <Link to="/menu"> Menu </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                </div>
            </div>
            <div className="links">
                <Link to="/home"> Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
                <Link to="/click">Click Here</Link>
                <button onClick={handleClick}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar;
