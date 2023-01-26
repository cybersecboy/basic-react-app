import React from "react";
import web from './images/webreactpic.png';
// import { NavLink } from "react-router-dom";
import Common from "./Common";
const MyHome = () => {
    return (
        <>
            <Common name='Grow your Business with' imgsrc={web} visit='/services' btname='Get Started' />
        </>
    )
}

export default MyHome;