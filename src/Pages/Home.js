import React from 'react'
import "../Styles/Home.css"
import {Link} from "react-router-dom"
import image from "../assets/pizza.jpeg"

function Home() {
    return (
        <div className="home"  style={{backgroundImage : `url(${image})`}}>
            <div className="headerContainer">
                <h1>Pedro's Pizzaria</h1>
                <p>PIZZA TO FIT ANY TASTE</p>
                <Link to="/menu">
                <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
