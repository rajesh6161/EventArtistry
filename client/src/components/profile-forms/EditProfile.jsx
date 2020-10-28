import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";

import {Form, Button} from 'react-bootstrap'



const initialState = {
  avatar: "",
  age: "",
  height: "",
  weight: "",
  gender: "",
  location: "",
  bio: "",
  status: "",
  education: "",
  phone: "",
  languages: "",
  profiletype: "",
  englishproficiency: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  instagram: "",
};

const EditProfile = ({ createProfile, history }) => {
  // history is destructured from withRouter
  const [formData, setFormData] = useState(initialState);
  const [types, setTypes] = useState({
    Promoter: false,
    Model: false,
    EventHostess: false
  })

  const {Promoter, Model, EventHostess} = types

  const toggleChangeP = () => {
    setTypes({
      ...types,
      Promoter: !Promoter
    })
  }
  const toggleChangeM = () => {
    setTypes({
      ...types,
      Model: !Model
    })
  }
  const toggleChangeE = () => {
    setTypes({
      ...types,
      EventHostess: !EventHostess
    })
  }

  const {
    avatar,
    age,
    height,
    weight,
    gender,
    bio,
    phone,
    location,
    status,
    education,
    profiletype,
    languages,
    englishproficiency,
    twitter,
    facebook,
    linkedin,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onTypeSelected = (e) => {
      e.preventDefault()
      let arr = []
      for(var key in types) {
        if(types[key] === true) {
          arr.push(key)
        }
      }
      setFormData({
        profiletype: arr.join(', ')
      })
    }
  
  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
    //console.log(formData)
  };

  
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  return (
    <div className="container" id="create-profile">
      <h1 className="text-secondary mt-3">Edit Profile</h1>

      <Form onSubmit={(e) => onSubmit(e)}>
        

 {/* Choose Gender */}
 <h3>Personal Info</h3>
 {/* get profile-type */}
            <Form.Group>
            <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={Promoter}
                    onChange={toggleChangeP}
                    className="form-check-input"
                  />
                  Promoter
              </label>
              </div>

              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={Model}
                    onChange={toggleChangeM}
                    className="form-check-input"
                  />
                  Model
              </label>
              </div>

              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={EventHostess}
                    onChange={toggleChangeE}
                    className="form-check-input"
                  />
                  Event Hostess Usher
              </label>
              </div>

              <div className="form-group">
                <button onClick={(e) => onTypeSelected(e)} className="btn btn-primary">
              Submit
            </button>
          </div>
              <small className="text-danger">*Please first select your profile type before proceeding further</small>
            </Form.Group>
        <Form.Group>
          <div key="custom-inline-radio">
            <Form.Label>Choose Your Gender Type</Form.Label>
            <br />
            <Form.Check custom inline type="radio" id="Male" label="Male" onChange={(e) => onChange(e)} name="gender" value="Male"/>
            <Form.Check custom inline type="radio" id="Female" label="Female" onChange={(e) => onChange(e)}  name="gender" value="Female"/>
          </div>
        </Form.Group>

{/* get age */}
          <Form.Group controlId="age">
            <Form.Label>Please Enter Your Age</Form.Label>
            <Form.Control name="age" value={age} type="text" placeholder="Age" onChange={(e) => onChange(e)} />
          </Form.Group>

{/* get weight */}
          <Form.Group controlId="weight">
            <Form.Label>Please Enter Your Weight</Form.Label>
            <Form.Control name="weight" value={weight} type="text" placeholder="Weight in Kgs" onChange={(e) => onChange(e)} />
          </Form.Group>

{/* get height */}
          <Form.Group>
              <Form.Label>Please Select Your Height</Form.Label>
              <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="height"
                  name="height"
                  value={height}
                  onChange={(e) => onChange(e)}
              >
                  <option value="0">Choose Your Height</option>
                  <option value="5'0">152.40cm (5'0")</option>
                  <option value="5'1">154.94cm (5'1")</option>
                  <option value="5'2">157.48cm (5'2")</option>
                  <option value="5'3">160.02cm (5'3")</option>
                  <option value="5'4">162.56cm (5'4")</option>
                  <option value="5'5">165.1cm (5'5")</option>
                  <option value="5'6">167.64cm (5'6")</option>
                  <option value="5'7">170.18cm (5'7")</option>
                  <option value="5'8">172.72cm (5'8")</option>
                  <option value="5'9">175.26cm (5'9")</option>
                  <option value="5'11">180.34cm (5'11")</option>
                  <option value="6'0">182.88cm (6'0")</option>
                  <option value="6'1">185.42cm (6'1")</option>
                  <option value="6'2">187.96cm (6'2")</option>
                  <option value="6'3">190.5cm (6'3")</option>
              
              </Form.Control>
            </Form.Group>

{/* get phone */}
          <Form.Group controlId="phone">
            <Form.Label>Please Provide Us Your Contact Number</Form.Label>
            <Form.Control name="phone" value={phone} type="text" placeholder="Working Phone Number" onChange={(e) => onChange(e)} />
            <small className="text-danger">Contact Number will be kept private</small>
          </Form.Group>

<div style={{marginTop: "30px"}}>
<h3>More Info</h3>
{/* get location */}
          <Form.Group controlId="location">
            <Form.Label>Enter Your Current Location</Form.Label>
            <Form.Control name="location" value={location} type="text" placeholder="Current Location" onChange={(e) => onChange(e)} />
          </Form.Group>

{/* get education status */}
            <Form.Group>
              <Form.Label>Select Your Education Status</Form.Label>
              <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="education"
                  name="education"
                  value={education}
                  onChange={(e) => onChange(e)}
              >
                  <option value="0">Education Status</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Under Graduate">Under Graduate</option>
              
              </Form.Control>
            </Form.Group>



{/* get status */}
            <Form.Group>
              <Form.Label>Select Your Experience Level</Form.Label>
              <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="status"
                  name="status"
                  value={status}
                  onChange={(e) => onChange(e)}
              >
                  <option value="0">Experience Level</option>
                  <option value="Fresher">Fresher</option>
                  <option value="0-6 months">0-6 months</option>
                  <option value="0-1 year">0-1 year</option>
                  <option value="1-2 year">1-2 year</option>
              
              </Form.Control>
            </Form.Group>
{/* get location */}
          <Form.Group controlId="languages">
            <Form.Label>Enter Languages You Know and Undertand</Form.Label>
            <Form.Control name="languages" value={languages} type="text" placeholder="Languages You Know..." onChange={(e) => onChange(e)} />
            <small className="text-danger">seperate with a comma (hindi, english)</small>
          </Form.Group>

{/* get english proficiency */}
          <Form.Group>
              <Form.Label>Tell Us How Much Proficient You're in English</Form.Label>
              <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="englishproficiency"
                  name="englishproficiency"
                  value={englishproficiency}
                  onChange={(e) => onChange(e)}
              >
                  <option value="0">Proficiency Level</option>
                  <option value="Proficient (can speak fluently)">Proficient (can speak fluently)</option>
                  <option value="I Can read and write">I Can read and write</option>
              </Form.Control>
            </Form.Group>

{/* get bio */}
              <Form.Group>
                <Form.Label>
                  A Short Bio
                </Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Tell something more about yourself..." name="bio" value={bio} onChange={(e) => onChange(e)}/>
              </Form.Group>

</div>

        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
        </div>
        {displaySocialInputs &&
          <div className="mt-3 mb-3">
            
           <Form inline>
            <Form.Group className="mr-3">
              <Form.Label className="my-1 mr-2"><i className="fab fa-twitter fa-2x"></i></Form.Label>
              <Form.Control
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={(e) => onChange(e)}
                
              />
            </Form.Group>
            <Form.Group className="mr-3">
              <Form.Label className="my-1 mr-2"><i className="fab fa-facebook fa-2x"></i></Form.Label>
              <Form.Control
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={(e) => onChange(e)}
                
              />
            </Form.Group>
            <Form.Group className="mr-3">
              <Form.Label className="my-1 mr-2"><i className="fab fa-instagram fa-2x"></i></Form.Label>
              <Form.Control
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={(e) => onChange(e)}
                
              />
            </Form.Group>

            </Form>
            </div>
}
        <Button type="submit" variant="secondary" >Submit Data</Button>
      </Form>
      
    </div>
  )

}



export default connect(null, { createProfile })(withRouter(EditProfile));