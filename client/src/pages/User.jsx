import React from "react";
import { useSelector } from "react-redux";
function User() {
    const { user } = useSelector((state) => state.users);
  return (
    <div>
        <p>{user?.name}</p>
    </div>
  );
}

export default User;
