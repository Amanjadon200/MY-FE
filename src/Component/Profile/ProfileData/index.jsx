/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
const ProfileData = () => {
    const formData = new FormData();
    const [fileData,setFileData]=useState();
    const inputRef = useRef()
    const email = useSelector((state) => {
        return state.UserData.email;
      });
      const [imageURL,setImageURL]=useState()
    const onFileUpload=async()=>{
        formData.append('image',fileData)
       const data=await axios.post('http://localhost:3001/uploadImage?email='+email,formData,
        {
            headers: {
              "Content-Type": "multipart/form-data",
            },
        }
        )
        console.log(data.data)
        setImageURL(data.data.location)
    }
    const onFileChange=(e)=>{
        setFileData(inputRef.current.files[0])
    }

  return (
    <div>
      <h2>My Profile</h2>
      <div>
        <input  ref={inputRef} type="file" onChange={(e)=>{onFileChange(e)}} />
       {imageURL && <img src={"file:/"+imageURL}/>}
        <button onClick={onFileUpload}>Upload!</button>
      </div>
    </div>
  );
};

export default ProfileData;
