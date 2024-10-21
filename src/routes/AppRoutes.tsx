import React, { useEffect, useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home'; 
import Reports from '../pages/Reports';
import Products from '../pages/Products';
import Teams from '../pages/Team';
import Support from '../pages/Support';
import Messages from '../pages/Messages';
import NewPage from '../pages/NewPage';
import { path } from '../constant/Constant';
import { TextContext } from '../components/TextContext';

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const inputText = queryParams.get('text');
  const textContext = useContext(TextContext);
  if (!textContext) {
    throw new Error('TextContext must be used within a TextProvider');
  }
   const { text, setText } = textContext;
  // console.log(inputText)
  //  console.log(textContext.text);
  //  const setText = textContext.setText;
  // console.log(setText)
  useEffect(() => {
    if (inputText && setText) {
      setText(inputText); 
    }
  }, [inputText, setText]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={path.home} element={<Home />} />
        <Route path={path.reports} element={<Reports />} />
        <Route path={path.product} element={<Products />} />
        <Route path={path.team} element={<Teams />} />
        <Route path={path.support} element={<Support />} />
        <Route path={path.message} element={<Messages />} />
        <Route path={path.any} element={<Home />} />
        <Route path="/newpage" element={<NewPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
