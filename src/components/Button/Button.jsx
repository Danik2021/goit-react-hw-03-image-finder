import React from 'react';

import css from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button type="button" className={css.buttonShowMore} onClick={onClick}>
      Show more
    </button>
  );
};
