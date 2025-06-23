import React, { Component } from 'react';

import css from './SearchBar.module.css';

export function SearchBar({ handleChange, handleSubmit }) {
  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.form}>
        <button className="btn btn-outline-light" type="submit">
          <span className="buttonLabel">Search</span>
        </button>

        <input
          className={`form-control ${css.searchbarInput}`}
          id="exampleFormControlInput1"
          type="text"
          onChange={handleChange}
          autoComplete="off"
          autoFocus="true"
          placeholder="Search images and photos"
          required
        />
      </form>
    </header>
  );
}
