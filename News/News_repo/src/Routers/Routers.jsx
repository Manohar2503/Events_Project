import React from 'react';

import { Routes, Route } from 'react-router-dom';
import NewsMain from '../Pages/NewsMain';
import NewsDeatis from '../Pages/NewsDetails';
const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<NewsMain/>}/>
      <Route path='/newsMain' element={<NewsMain/>}/>
      <Route path='/newsdetails' element={<NewsDeatis/>}/>
    </Routes>
  );
};

export default Routers;