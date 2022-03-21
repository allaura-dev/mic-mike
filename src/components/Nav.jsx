import React from "react";
import {
    BrowserRouter as Router,
    Switch, 
    Route, 
    Link, 
    Redirect} from "react-router-dom";
import Home from "../pages/Home";
import Bio from "../pages/Bio";
import Rates from "../pages/Rates";
import Contact from "../pages/Contact";


function Nav(){
    return(
        <div>
            <div>            
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/bio">Bio</Link>
                    </li>
                    <li>
                        <Link to="/rates">Rates</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

            <Switch>
                    <Route exact path="/" render={() => { return (this.state.isUserAuthenticated ? <Redirect to="/home" /> : <Redirect to="/bio" />)}}/>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/bio" component={Bio} />
                    <Route exact path="/rates" component={Rates} />
                    <Route exact path="/contact" component={Contact} />
            </Switch>
        </div>
    );
}

export default Nav;