import axios from "axios";
import React, { useRef, useState } from "react";
const ProfileData = () => {
    const formData = new FormData();
    const [fileData,setFileData]=useState();
    const inputRef = useRef()
    const onFileUpload=async()=>{
        formData.append('image',fileData)
        await axios.post('http://localhost:3001/uploadImage',formData,
        {
            headers: {
              "Content-Type": "multipart/form-data",
            },
        }
        )
    }
    const onFileChange=(e)=>{
        setFileData(inputRef.current.files[0])
    }

  return (
    <div>
      <h2>My Profile</h2>
      <div>
        <input ref={inputRef} type="file" onChange={(e)=>{onFileChange(e)}} />
        <button onClick={onFileUpload}>Upload!</button>
      </div>
    </div>
  );
};

export default ProfileData;
