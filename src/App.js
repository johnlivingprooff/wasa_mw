import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Appoint from './pages/Appointment.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/appointment', element: <Appoint /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
