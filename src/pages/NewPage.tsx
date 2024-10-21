import React from 'react';
import { useLocation } from 'react-router-dom';

const NewPage: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const { text } = state || {};  

  return (
    <div>
      <h1>New Page</h1>
      <br />
      <p>{text}</p>
    </div>
  );
};

export default NewPage;
