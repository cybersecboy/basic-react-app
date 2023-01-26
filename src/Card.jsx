import React from "react";
import { NavLink } from "react-router-dom";
// import web from './images/webreactpic.png'
const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="error" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold card-font">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="" className="btn btn-primary">click to start</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;