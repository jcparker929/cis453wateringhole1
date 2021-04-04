import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import shopping from "./shopping";
import jobs from "./jobs";
import locations from "./locations";
import about from "./about";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Jp's Watering Hole</h1>
                <ul className="header">
                    <li><NavLink to="/shopping">Shopping</NavLink></li>
                    <li><NavLink to="/jobs">Jobs</NavLink></li>
                    <li><NavLink to="/locations">Location</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
                <div className="content">
                    <Route path="/shopping" component={shopping}/>
                    <Route path="/jobs" component={jobs}/>
                    <Route path="/locations" component={locations}/>
                    <Route path="/about" component={about}/>

                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;