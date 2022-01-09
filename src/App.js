import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Form from '../src/Pages/Form/index';
import Login from '../src/Pages/Login/login';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}
