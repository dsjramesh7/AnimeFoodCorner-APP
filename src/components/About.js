import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      This is about page
      <User />
      <UserClass name={"class component"} />
    </div>
  );
};

export default About;
