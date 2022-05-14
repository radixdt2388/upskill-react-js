import React from "react";
import UserData from "../components/userData";

function User({ name, email, index }) {
  return (
    <article>
      <div className="card item">
        <img
          src="http://localhost:3000/img_avatar.png"
          alt="Avatar"
          class="img"
        />

        <div class="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{email}</p>
        </div>
      </div>
    </article>
  );
}

function CustomeHook() {
  // Declare a new state variable, which we'll call "count"
  if (UserData instanceof Array) {
    return UserData.map(function (object, i) {
      return <User name={object.name} email={object.email} index={i} />;
    });
  }
}
export default CustomeHook;
