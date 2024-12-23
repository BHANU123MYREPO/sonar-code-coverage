import React from 'react';
import './App.css';
import Header from './components/Header'; // Assuming you have a header component
import Footer from './components/Footer'; // Assuming you have a footer component

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <h2>Welcome to My React App</h2>
        <p>This is a sample React application.</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
