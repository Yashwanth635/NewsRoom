// src/store/actions.js

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const increment = () => ({
    type: 'INCREMENT',
  });
  
  export const decrement = () => ({
    type: 'DECREMENT',
  });

  export const addToFavorites = (article) => ({
    type: ADD_TO_FAVORITES,
    payload: article,
  });
  
  export const removeFromFavorites = (articleId) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: articleId,
  });
  