import React from "react";

const ProfileAbout = ({
  profile: {
    dob,
    height,
    weight,
    gender,
    location,
    education,
    status,
    user: { firstname, lastname },
  },
}) => {
  return (
    <div>
      <h1>About Me Table</h1>
    </div>
  );
};

export default ProfileAbout;
