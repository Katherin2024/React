import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Consiente a tu iPhone.</h1>
      <div className="cards-container">
        <div className="card">
          <h2>AirPods</h2>
          <p>Descubre todos los modelos de AirPods <br /> y elige tus favoritos.</p>
          <a href="#" className="info-link">Más información ›</a>
          <img 
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=445&hei=445&fmt=jpeg&qlt=95&.v=1591634795000"
            alt="AirPods" 
            className="product-image"
          />
        </div>
        <div className="card">
          <h2>AirTag</h2>
          <p>Pon uno en tus llaves y otro en tu mochila.<br />
          Si las pierdes, simplemente usa la app Encontrar.</p>
          <a href="#" className="info-link">Más información ›</a>
          <img 
            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-gallery3-202409?wid=4056&hei=2400&fmt=jpeg&qlt=90&.v=dmdnWEhnUEJqTk03THhFMW1EbTFSN3FHM1l0enc5azZrZmI2MTJKVmxtRXRjTTN6RnJYTSs4OTJjQVVCU05kcHJEWjZxSXdMVHNGTzJsbGNhdmdEOXEwem1UOXp3S0tMZ2dScUx2MVduMFE"
            alt="AirTag" 
            className="product-image"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
