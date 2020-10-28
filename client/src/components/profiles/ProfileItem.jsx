import React from "react";
import { Link } from "react-router-dom";
import divya from "./divya.jpg";
import avatar from "./avatar.png";
import { Spinner } from "react-bootstrap";

const ProfileItem = ({
  profile: {
    user: { _id, firstname, lastname },
    avatar,
    status,
    education,
    location,
    age,
    profiletype,
    height,
  },
}) => {
  return (
    <div className="col-sm-6">
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div id="profile-image" className="col-sm-4">
              {avatar !== null ? (<img id="profileitemimage" src={avatar} className="card-image" alt="profile-photo" />) : <Spinner animation="grow"/>}
            </div>
            <div className="col-sm-8">
              <h3 id="_piName">{firstname + " " + lastname}</h3>
              <span id="_piLabel"> Profile Type:</span>{" "}
              {profiletype}
              <br />
              <span id="_piLabel"> Location:</span> {location}
              <br />
              <span id="_piLabel"> Age:</span> {age}
              <br />
              <span id="_piLabel"> Height:</span> {height}
              <br />
              <span id="_piLabel"> Experience:</span> {status}
              <br />
              <span id="_piLabel"> Education:</span>{" "}
              {education}
              <br />
            </div>
          </div>
          <Link
            to={`/profile/${_id}`}
            style={{ width: "100%" }}
            className="btn btn-primary mt-3"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
