import React from "react";
import { useParams } from "react-router-dom";
const Dynamic_User = ({ user }) => {
  const { id } = useParams();
  const currentUser = user.find((u) => u.id === Number(id));
  return (
    <>
      <h1>{currentUser.name}</h1>
      <p>Age: {currentUser.age}</p>
      <p>Email: {currentUser.gmail}</p>
    </>
  );
};

export default Dynamic_User;
