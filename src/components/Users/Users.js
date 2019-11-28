import React from "react";
import s from "./Users.module.css";
import * as axios from 'axios'
import img from "./../../img/user.png"

let Users = props => {
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
    .then( response => {
      props.setUsers(response.data.items)
    })
  }

  return (
    <div>
      {props.users.map(u => (
        <div key={u.id} className={s.userBlock}>
            <span>
              <img src={ u.photos.small != null ? u.photos.small : img} className={s.userPhoto} alt="logo" />
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>u.location</div>
              <div>u.country</div>
            </span>
          </div>
      ))}
    </div>
  );
};

export default Users;
