import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar navbar-default">
        <ul>
           <li className="brand">Clicky with REACT!</li>
           <li>Click an image to start the game</li>
           <li>Current Score: {props.score} || Highest Score: {props.highScore}</li>
        </ul>
    </nav>
);

export default Nav;