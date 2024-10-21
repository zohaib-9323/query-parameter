import React, { useContext } from 'react';
import { text as constantText } from '../constant/Constant';
import { TextContext } from '../components/TextContext';
import { errors } from '../constant/Constant';

const Home: React.FC = () => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error(errors.homeError);
  }
  const { text } = context;
  return (
    <div>
      <h1>{constantText.home}</h1>
      <p>{constantText.homeText}</p>
      <br />
      <p>{text}</p>
    </div>
  );
}
export default Home;
