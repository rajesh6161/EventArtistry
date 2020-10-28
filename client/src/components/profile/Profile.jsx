import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import ProfileAbout from "./ProfileAbout";
import ProfilePrefers from "./ProfilePrefers";
import { connect } from "react-redux";
import { getProfileById } from "../../actions/profile";

const Profile = ({
  getProfileById,
  match,
  profile: { profile, loading },
  auth,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);
  

  return (
    <div>
      {profile === null || loading ? (
        <h6>Loading...</h6>
      ) : (
        <div >
          <Link to="/profiles" className="btn btn-light">
            Back To Profiles
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
              <ProfileAbout profile={profile} />
              <ProfilePrefers profile={profile} />
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
