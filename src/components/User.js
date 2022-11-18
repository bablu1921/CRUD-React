import React from "react";

import { UserContext } from "../context/UserContext";
import Users from "./Users";
import { useContext } from "react";

const User = () => {
  const { userData } = useContext(UserContext);
  return (
    <div className="main">
      {userData.map((users, id) => {
        return (
          <div key={id}>
            <Users users={users} />
          </div>
        );
      })}
    </div>
  );
};

export default User;
