import React from 'react';

import axios from 'axios';

export const fetchImagesWithQuery = async (searchQuery, page) => {
  const API_URL = 'https://pixabay.com/api/?';
  const searchParams = new URLSearchParams({
    q: searchQuery,
    page,
    key: '48781960-dc6df10b20f0dfee4adceb61a',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });
  try {
    const response = await axios.get(`${API_URL}${searchParams}`);
    if (response.status !== 200) {
      throw new Error(`Error: ${response.status}`);
    }
    searchParams.set('page', page => page + 1);

    return response.data;
  } catch (error) {
    throw error;
  }
};
