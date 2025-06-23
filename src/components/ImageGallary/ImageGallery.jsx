import React from 'react';

// librarys
import { nanoid } from 'nanoid';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem openModal={openModal} key={nanoid()} image={image} />
      ))}
    </ul>
  );
};
