import React from 'react';

import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.Loader}>
      <div className={css.Loader__spinner}></div>
      <p className={css.Loader__text}>Loading...</p>
    </div>
  );
};
