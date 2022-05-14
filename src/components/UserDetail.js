import React, { Component } from "react";

export default function UserDetail(UserListComponent, data) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data,
      };
    }

    render() {
      return <UserListComponent data={this.state.data} {...this.props} />;
    }
  };
}
