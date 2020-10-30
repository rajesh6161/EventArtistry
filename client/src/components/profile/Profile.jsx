import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProfileById } from "../../actions/profile";

import {Spinner, Row, Col, Table} from 'react-bootstrap'
import Moment from 'react-moment'

import './profile.css'

const Profile = ({
  getProfileById,
  match,
  profile: { profile, loading },
  auth,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);
  
 console.log(profile)
  return (
    <div className="container">
      {profile === null || loading ? (
        <Spinner animation="grow"/>
      ) : (
        <div style={{marginTop: "10px"}}>
          <Link to="/profiles" className="btn btn-dark">
            <i className="fas fa-arrow-left"></i>Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link
                to="/edit-profile"
                className="btn btn-dark"
                style={{ marginLeft: 10 }}
              >
                Edit Profile
              </Link>
            )}
          <h2>
            {profile.user.firstname}'s Profile Page
          </h2>

             <Row>
               <Col md={4} sm={6}>
                
                    
                    <div class="card-container">
	                    <span class="pro"> <Moment format="DD/MM/YY">
                {profile.date}
            </Moment></span>
	                    <img class="round" src={profile.avatar} alt="Profile Photo" />
                      <h3>{profile.user.firstname + " " + profile.user.lastname}</h3>
	                    <h6>{profile.location}</h6>
	                    
                      <p>{profile.bio ? profile.bio : "User hasn't provided any bio."}</p>
	
                      <div className="social">
                      {profile.social.twitter && <a href={`https://twitter.com/${profile.social.twitter}`} target="_blank">
                        <i className="fab fa-twitter"></i></a>}
                      {profile.social.facebook && <a href={`https://facebook.com/${profile.social.facebook}`} target="_blank">
                        <i className="fab fa-facebook"></i></a>}
                      {profile.social.instagram && <a href={`https://instagram.com/${profile.social.instagram}`} target="_blank">
                        <i className="fab fa-instagram"></i></a>}
                      </div>

	                    <div class="skills">
		                      <h6>Profile Type</h6>
		                          <ul>
                                {<li>{profile.profiletype}</li>}
		                          </ul>
	                    </div>

                     
                    </div>

                 
               
               </Col>
               <Col md={8} sm={6}>
                
                    <div className="table">
                    <h4>General Details</h4>
                    <Table striped bordered hover size="sm">
                      <tbody>
                        <tr>
                          <td>Gender</td>
                          <td>{profile.gender}</td>
                        </tr>
                        <tr>
                          <td>Age</td>
                          <td>{profile.age} yrs</td>
                        </tr>
                        <tr>
                          <td>Height</td>
                          <td>{profile.height}</td>
                        </tr>
                        <tr>
                          <td>Weight</td>
                          <td>{profile.weight}</td>
                        </tr>
                        
                      </tbody>
                    </Table>
                    </div>
                    <div className="table">
                    <h4>Other Details</h4>
                    <Table striped bordered hover size="sm">
                      <tbody>
                        <tr>
                          <td>Work Experience</td>
                          <td>{profile.status}</td>
                        </tr>
                        <tr>
                          <td>Education</td>
                          <td>{profile.education}</td>
                        </tr>
                        <tr>
                          <td>Proficiency in English</td>
                          <td>{profile.englishproficiency}</td>
                        </tr>
                        <tr>
                          <td>Other Language(s)</td>
                          <td>{profile.languages.map(el => el + ', ')}</td>
                        </tr>
                        
                      </tbody>
                    </Table>
                    </div>
               
               </Col>
             </Row>
          </div>
         
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
