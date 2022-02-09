/*
    Copyright 2022 by Zackary Morvan, Cyber M Technologies.
    All rights reserved
    This file is part of the NFT MINTER APP, and is released 
    under the "MIT License Agreement". Please see the LICENSE file that 
    should have been included as part of this package
*/

import React, {useState} from 'react';
import { upload_image } from '../Utils/apicalls';
import { convertImageToBase64 } from '../Utils/common';
import Button from 'react-bootstrap/Button';
import { useAlert } from 'react-alert';

const UploadImage = (props) => {
  // a local state to store the currently selected file.
    const [selectedFile, setSelectedFile] = useState(null);
    const token = props.token;
    const alert = useAlert();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let b64image = convertImageToBase64(selectedFile);
        if (b64image !== null) {
            let filename = selectedFile.name;
            await upload_image(token, b64image, filename).then(res => {
                if (res === null) {
                    alert.error("Error uploading image");
                } else {
                    alert.success("Succesfully uploaded image: "+res);
                }
            });
        } else {
            alert.error("Error reading image file");
        }
    };

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileSelect}/>
            <Button type="submit">Upload</Button>
        </form>
    );
};

export default UploadImage;