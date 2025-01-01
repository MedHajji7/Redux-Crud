
import React from 'react';
// import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Acceuil from './Acceuil';
import Ajouter from './Ajouter';
import Modifier from './Modifier'; 

const AppR = () => {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Acceuil />} />
        <Route path="/add" element={<Ajouter />} />
        <Route path="/edit/:id" element={<Modifier />} />
      </Routes>
    </div>
  );
};

export default AppR;