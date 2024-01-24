import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login</div>;
  return (
    <div>
      <h2>Welcome {user.username}</h2>
    </div>
  );
}

export default Profile;
