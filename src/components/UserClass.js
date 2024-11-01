import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Hello world from class component</h1>
        <h2>Name of the component: {name}</h2>
      </div>
    );
  }
}

export default UserClass;
