import React from 'react';

import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ image, openModal }) {
  return (
    <li onClick={() => openModal(image)} className={css.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
}
