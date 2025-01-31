import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FleetList from './components/FleetList';
import Auth from './pages/Auth';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/fleet" element={<FleetList />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}