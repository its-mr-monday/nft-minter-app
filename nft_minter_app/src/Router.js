/*
    Copyright 2022 by Zackary Morvan, Cyber M Technologies.
    All rights reserved
    This file is part of the NFT MINTER APP, and is released 
    under the "MIT License Agreement". Please see the LICENSE file that 
    should have been included as part of this package
*/
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from './Views/LoginPage';
import LandingPage from './Views/LandingPage';
import UploadImage from "./Views/UploadImage";

const Router = (props) => {
    let authed = props.authed;
    let navigate = props.navigate

    if (authed === true) {
        let token = props.token;
        let username = props.username;

        return (
            <Router>
                <Switch>
                    <Route path="/logout" exact>
                        
                    </Route>

                    <Route path="/" exact>
                        <LandingPage authed={authed} token={token} username={username}/>
                    </Route>

                    <Route path="/upload_image" exact>
                        <UploadImage authed={authed} token={token} username={username}/>
                    </Route>
                </Switch>
            </Router>
        );

    } else {

        return (
            <Router>
                <Switch>
                    <Route path="/login" exact>
                        <LoginPage authed={authed} navigate={navigate} />
                    </Route>
                    <Route path="/" exact>
                        <LandingPage authed={authed} />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Router;