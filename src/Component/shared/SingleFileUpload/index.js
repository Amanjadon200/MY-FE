import { useState } from 'react';

export default function SingleFileUpload({ formData, setFormData }) {
    const [file, setFile] = useState();

    const handleFileChange = (e) => {
        setFormData(
            {
                ...formData, uploadFile: e.target.value
            }
        )
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    // const handleUploadClick = () => {
    //     if (!file) {
    //         return;
    //     }
    // }
    console.log((formData.uploadFile.length))
    return (
        <div>
            <input type="file" onChange={handleFileChange} value={formData.uploadFile} />

            {formData.uploadFile.length>0 && <div>{file && `${file.name} - ${file.type}`}</div>}

            {/* <button onClick={handleUploadClick}>Upload</button> */}
        </div>
    );
}
