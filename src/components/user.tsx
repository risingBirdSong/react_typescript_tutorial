import React from "react";

interface UserStateI {
  loggedIn: boolean;
  username: string;
}

class User extends React.Component<{}, UserStateI> {
  constructor() {
    super({});
    this.state = {
      loggedIn: true,
      username: "grant"
    };
  }
  render() {
    let text = "";
    if (this.state.loggedIn == false) {
      text = "please log in first";
    } else text = `hello ${this.state.username} you are logged in`;
    return (
      <div>
        <p>{text}</p>
      </div>
    );
  }
}

export { User };
