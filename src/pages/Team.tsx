import React, { useContext } from 'react';
import { text as constantText } from '../constant/Constant';
import { TextContext } from '../components/TextContext';

const Teams: React.FC = () => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error('Teams must be used within a TextProvider');
  }
  const { text } = context;
  return (
    <div>
      <h1>{constantText.team}</h1>
      <br />
      <p>{text}</p>
    </div>
  );
}
export default Teams;
