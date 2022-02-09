/*
    Copyright 2022 by Zackary Morvan, Cyber M Technologies.
    All rights reserved
    This file is part of the NFT MINTER APP, and is released 
    under the "MIT License Agreement". Please see the LICENSE file that 
    should have been included as part of this package
*/

import { useState } from "react";
import { setSession, refreshPage } from "../Utils/common";
import { login } from "../Utils/apicalls";

const LoginPage = (props) => {
    const navigate = props.navigate;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password).then(token => {
            if (token !== null) {
                setSession(username, token);
                navigate("/");
                refreshPage();
            }
        });
    }

    return (
        <div className="login-wrapper" style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUsername(e.target.value)}/>
            </label>
            <br></br>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <br></br>
            <br></br>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <Button type="submit">Login</Button>
            </div>
        </form></div>
    );

}

export default LoginPage;