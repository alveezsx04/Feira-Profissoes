import React from 'react';
import '../styles/Gallery.scss';

function Gallery() {
  return (
    <section className="gallery">
      <h2>Momentos da última feira</h2>
      <div className="gallery__images">
        <div className="gallery-item">
          <img src="/assets/images/moment1.png" alt="Foto 1 da feira" />
        </div>
        <div className="gallery-item">
          <img src="/assets/images/moment2.png" alt="Foto 2 da feira" />
        </div>
        <div className="gallery-item">
          <img src="/assets/images/moment3.png" alt="Foto 3 da feira" />
        </div>
        <div className="gallery-item">
          <img src="/assets/images/moment4.png" alt="Foto 4 da feira" />
        </div>
        <div className="gallery-item">
          <img src="/assets/images/moment5.png" alt="Foto 5 da feira" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
