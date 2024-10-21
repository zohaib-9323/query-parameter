import React, { useContext } from 'react';
import { text as constantText } from '../constant/Constant';
import { TextContext } from '../components/TextContext';

const Products: React.FC = () => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error('Products must be used within a TextProvider');
  }
  const { text } = context;
  return (
    <div>
      <h1>{constantText.product}</h1>
      <br />
      <p>{text}</p>
    </div>
  );
}

export default Products;
