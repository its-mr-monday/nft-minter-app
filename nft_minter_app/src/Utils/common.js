/*
    Copyright 2022 by Zackary Morvan, Cyber M Technologies.
    All rights reserved
    This file is part of the NFT MINTER APP, and is released 
    under the "MIT License Agreement". Please see the LICENSE file that 
    should have been included as part of this package
*/

export const api_route = "http://localhost:5000/api/";
import { useState } from "react";

export const setToken = token => {
    localStorage.setItem("token", JSON.stringify(token));
}
export const setUsername = username => {
    localStorage.setItem("username", JSON.stringify(username));
}
export const setSession = (username, token) => {
    setToken(token);
    setUsername(username);
}
export const clearSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
}
export const getToken = () => {
    if (localStorage.getItem("token")) {
        return JSON.parse(localStorage.getItem("token"));
    }
    return null;
}
export const convertImageToBase64 = (file) => {
    const [b64File, setB64File] = useState(null);
    
    //read the file and convert it to base64 string
    const reader = new FileReader();
    reader.readAsBrinaryString(file);
    reader.onload = () => {
        setB64File(reader.result.toString('base64'));
    }
    reader.onerror = () => {
        setB64File(null);
    }
    return b64File;
}

export const refreshPage = () => {
    window.location.reload();
}

export const isAuthed = () => {
    if (getToken() !== null) {
        if (getUser() !== null) {
            return true;
        }
    }
    return false;
}
