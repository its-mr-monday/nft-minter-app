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
        let filename = selectedFile.name;
        await upload_image(token, b64image, filename).then(res => {
            if (res === null) {
                alert.error("Error uploading image");
            }
        });
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