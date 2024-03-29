/*
    Copyright 2022 by Zackary Morvan, Cyber M Technologies.
    All rights reserved
    This file is part of the NFT MINTER APP, and is released 
    under the "MIT License Agreement". Please see the LICENSE file that 
    should have been included as part of this package
*/

import './App.css';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import React, { useState, useEffect } from 'react';
import { isAuthed, getToken, getUsername } from './Utils/common';
import Router from Router;
import { useNavigate } from 'react-router-dom';
import Navbar from './Views/Navbar';

const App = () => {
  //Options for the alert
  let options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: "30px",
    transition: "scale"
  }
  //Authed and session states
  const [authed, setAuthed] = useState(false);
  setAuthed(isAuthed());
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  if (authed === true) {
    setUsername(getUsername());
    setToken(getToken());
  }
  //That beautiful App wrapped around our alert system
  return (
    <Provider template={AlertTemplate} {...options}>
      <Navbar authed={authed} username={username} />
      <div className="App">
        <header className="App-header">
          <Router authed={authed} token={token} username={username} navigate={navigate} />
        </header>
      </div>
    </Provider>
  );
}

export default App;
