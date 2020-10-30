import React, { useState } from 'react'

import {CLOUDINARY_URL, UPLOAD_PRESET} from '../../keys'
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {Button} from 'react-bootstrap'


import './upload.css'

import {addAvatar} from '../../actions/profile'

const UploadAvatar = ({addAvatar, history}) => {
    const [formData, setFormData] = useState({
        avatar: ""
    })

    const { avatar } = formData;

    const uploadAvatar = () => {
        const { files } = document.querySelector('input[type="file"]')
    
        if(files.length === 0) {
          alert("Please upload an image")
        } else if(files[0].type === 'image/jpeg' || files[0].type === 'image/png' ) {
          const { files } = document.querySelector('input[type="file"]')
          //console.log('Image file', files[0])
       
          const formData = new FormData();
          formData.append('file', files[0]);
          // replace this with your upload preset name
          formData.append('upload_preset', UPLOAD_PRESET);
          const options = {
            method: 'POST',
            body: formData,
          };
    
          // replace cloudname with your Cloudinary cloud_name
          return fetch(CLOUDINARY_URL, options)
            .then(res => res.json())
            .then(res => {
              setFormData({...formData, avatar: res.secure_url})
            })
            .catch(err => console.log(err));
          
      }else {
        alert("Please choose jpeg/png formats")
      }
    
      }


      const submitHandler = () => {
          
          addAvatar(formData, history, true)
          
      }


    return (
        
  <div className="imageUploader">
  <div className="box-1">
    <input type="file"/>
    <Button style={{marginTop: 10}} variant="warning" onClick={uploadAvatar}>Upload</Button>
    <Button className="mt-3" variant="dark" onClick={submitHandler}>Save and Go Back To Dashboard</Button>
  </div>
  <div className="box-2">
    <p>Please wait until image isn't displayed</p>
    {avatar && (
      <img src={avatar} alt="Profile Image" className="displayed-image"/>
    )}
  </div>
</div>
    )
}

export default connect(null, {addAvatar})(withRouter(UploadAvatar))


