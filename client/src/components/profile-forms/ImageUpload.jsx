import React from 'react';
import './upload.css';
import {CLOUDINARY_URL, UPLOAD_PRESET} from '../../keys'

class ImageUpload extends React.Component{
  state = {
    imageUrl: null,
    imageAlt: null,
  }


  handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]')
    if(files[0].type === 'image/jpeg' || files[0].type === 'image/png') {
        const { files } = document.querySelector('input[type="file"]')
        console.log('Image file', files[0])
     
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
            this.setState({
              imageUrl: res.secure_url,
              imageAlt: "Profile Image"
            })
          })
          .catch(err => console.log(err));
        
    }else {
      alert("Please choose jpeg/png formats")
    }
  }
  render() {
    const { imageUrl, imageAlt } = this.state;

    return (
      <main className="image-upload">
        <section className="left-side">
          <form>
            <div className="form-group">
              <input type="file"/>
            </div>

            <button type="button" className="btn" onClick={this.handleImageUpload}>Submit</button>
            
          </form>
        </section>
        <section className="right-side">
          <p>The resulting image will be displayed here</p>
          {imageUrl && (
            <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
          )}
        </section>
      </main>
    );
  }
}

export default ImageUpload;