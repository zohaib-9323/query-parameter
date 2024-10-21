import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NewPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const {
    state: { text },
  } = location;
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>New Page</h1>
      <br />
      <p>{text}</p>
      <br />
      <button onClick={handleNavigate}>Go-Back</button>
    </div>
  );
};

export default NewPage;
