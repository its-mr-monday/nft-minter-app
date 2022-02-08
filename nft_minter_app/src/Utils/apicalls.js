/*
    Copyright 2022 by Zackary Morvan, Cyber M Technologies.
    All rights reserved
    This file is part of the NFT MINTER APP, and is released 
    under the "MIT License Agreement". Please see the LICENSE file that 
    should have been included as part of this package
*/

import axios from 'axios';
import React from 'react';
import { api_route } from './common';
import { useAlert } from 'react-alert';

const alert = useAlert();

export const login = async (username, password) => {
    const data = { "username": username, "password": password };
    await axios.post(api_route+'login', data).then(res => {
        if (res.status === 200) {
            alert.success(res.data.message);
            return res.data.token;
        } else {
            alert.error(res.data.message);
        }
    }).catch(err => {
        alert.error(err.data.message);
    });
    return null;
}

export const upload_image = async (token, b64image, filename) => {
    const data = { "filename" : filename, "image" : b64image };
    AUTH_HEADER = { headers: { Authorization: 'Bearer ' + token } };
    await axios.post(api_route+'nft/upload_image', 
    data, AUTH_HEADER).then(res => {
        if (res.status === 200) {

        }
    }).catch(err => {

    });
    return null;
}

