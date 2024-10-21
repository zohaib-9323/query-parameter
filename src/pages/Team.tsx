import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { text as constantText } from '../constant/Constant';
import { TextContext } from '../components/TextContext';

const Teams: React.FC = () => {
  const context = useContext(TextContext);
  const navigate = useNavigate();
  if (!context) {
    throw new Error('Teams must be used within a TextProvider');
  }
  const { text } = context;
  const handleNavigate = () => {
    navigate('/newpage', { state: { text } });
  };
  return (
    <div>
      <h1>{constantText.team}</h1>
      <br />
      <p>{text}</p>
      <br />
      <button onClick={handleNavigate}>Navigate</button>
    </div>
  );
}
export default Teams;
