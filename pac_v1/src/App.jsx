import React from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import WorkPage from './components/layout/WorkPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <WorkPage />
      </div>
    </div>
  );
}

export default App;