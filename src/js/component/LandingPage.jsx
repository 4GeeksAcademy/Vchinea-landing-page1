import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const Navbar = () => (
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

const Jumbotron = () => (
  <div className="jumbotron">
    <h1>A Warm Welcome!</h1>
    <p>Welcome to our amazing landing page. We're excited to have you here!</p>
  </div>
);

const Card = ({ title }) => (
  <div className="card">
    <div className="card-image"></div>
    <h3>{title}</h3>
    <p>This is a brief description of the {title.toLowerCase()} card. It provides some information about the content.</p>
  </div>
);

const App = () => (
  <div>
    <Navbar />
    <Jumbotron />
    <div className="card-container">
      <Card title="Card 1" />
      <Card title="Card 2" />
      <Card title="Card 3" />
      <Card title="Card 4" />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);