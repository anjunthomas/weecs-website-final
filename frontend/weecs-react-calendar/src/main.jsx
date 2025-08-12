import React from 'react';
import ReactDOM from 'react-dom/client';
import CalendarWrapper from './CalendarWrapper';
import About from './About';
import './index.css';

ReactDOM.createRoot(document.getElementById('react-root')).render(
  <React.StrictMode>
    <CalendarWrapper />
    <About />
  </React.StrictMode>
);