// Routers.js
import React from 'react';
import EventDetails from '../Pages/EventDetails';
import { Routes, Route } from 'react-router-dom';

import EventsMain from '../Pages/EventsMain';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<EventsMain/>}/>
      <Route path='/eventMain' element={<EventsMain/>}/>
      <Route path="/event-details" element={<EventDetails />} />
    </Routes>
  );
};

export default Routers;
