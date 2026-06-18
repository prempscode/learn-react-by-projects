import React from "react";
import { useParams , useNavigate , useLocation} from "react-router-dom";
const Dynamic_User = ({ user }) => {
  const { id } = useParams();
  const currentUser = user.find((u) => u.id === Number(id));
  const locaiton = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <h1>{currentUser.name}</h1>
      <p>Age: {currentUser.age}</p>
      <p>Email: {currentUser.gmail}</p>
      <p>Location : {location.pathname}</p>
      <div className="btn">
        <button onClick={()=>(navigate(-1))}>Go back</button>
      </div>
    </>
  );
};

export default Dynamic_User;
