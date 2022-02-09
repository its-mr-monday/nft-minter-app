/*
    Copyright 2022 by Zackary Morvan, Cyber M Technologies.
    All rights reserved
    This file is part of the NFT MINTER APP, and is released 
    under the "MIT License Agreement". Please see the LICENSE file that 
    should have been included as part of this package
*/
import Button from 'react-bootstrap/Button';
import React from 'react';

const LandingPage = (props) => {
    let authed = props.authed;
    if (authed === true) {
        let username = props.username;

        return (
            <div className="container">
                <h1>Welcome to the NFT Minter App {username}</h1>
                <br></br>
                <h4>Check out your user dashboard</h4>
                <Button href="/dashboard" variant="primary">Dashboard</Button>
            </div>
        )
    } else {
        <div className="container">
            <h1>Welcome to the NFT Minter</h1>
            <br></br>
            <h4>Looks like you aren't logged in</h4>
            <Button href="/login" variant="success">Login</Button>
        </div>
    }
}

export default LandingPage;