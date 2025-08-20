import React from 'react';
import { createRoot } from 'react-dom/client';
import Gallery from './Gallery'; // adjust path
import 'react-image-gallery/styles/css/image-gallery.css';

const root = createRoot(document.getElementById('gallery-root'));
root.render(
  <React.StrictMode>
    <Gallery />
  </React.StrictMode>
);