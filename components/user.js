import { useState } from "react";
const User = (props) => {
  const { users } = props;
  return (
    <>
      <ul>
        <li>Username: {users.username}</li>
        <li>Email: {users.email}</li>
        <li>Phone: {users.phone}</li>
      </ul>
    </>
  );
};
export default User;
