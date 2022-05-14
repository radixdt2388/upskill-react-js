// TableRow.js

import React, { Component } from "react";

class UserCard extends Component {
  render() {
    return (
      <article>
        <div class="card">
          <img
            src="http://localhost:3000/img_avatar.png"
            alt="Avatar"
            class="img"
          />

          <div class="container">
            <h4>
              <b>{this.props.object.name}</b>
            </h4>
            <p>{this.props.object.designation}</p>
          </div>
        </div>
      </article>
    );
  }
}

export default UserCard;
