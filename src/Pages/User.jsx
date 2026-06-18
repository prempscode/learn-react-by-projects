import React from "react";
import { Link } from "react-router-dom";

const User = ({user}) => {
  return (
    <>
      {user.map((data) => (
        <div key={data.id}>
          <Link to={`/user/${data.id}`}>
            <h1>{data.name}</h1>
            <p>Age : {data.age}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default User;
