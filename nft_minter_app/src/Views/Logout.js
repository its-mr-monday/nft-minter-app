/*
    Copyright 2022 by Zackary Morvan, Cyber M Technologies.
    All rights reserved
    This file is part of the NFT MINTER APP, and is released 
    under the "MIT License Agreement". Please see the LICENSE file that 
    should have been included as part of this package
*/

import { clearSession, refreshPage } from "../Utils/common";

//Clear the session stored
//Push to the index page and reload the page
const Logout = props => {
    props.navigate("/")
    clearSession();
    refreshPage()
}

export default Logout;