// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import AcademicDetails from './components/AcademicDetails';
import Certification from './components/Certification';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Profile />} />
                        <Route path="/academic" element={<AcademicDetails />} />
                        <Route path="/certification" element={<Certification />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
