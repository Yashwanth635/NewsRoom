// src/store/reducers/index.js
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './actions';

const initialState = {
    count: 0,
    favorites: [],
  };

  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case ADD_TO_FAVORITES:
        console.log('favorites',state.favorites)
            return {
              ...state,
              favorites: [...state.favorites, action.payload],
            };
      case REMOVE_FROM_FAVORITES:
            return {
              ...state,
              favorites: state.favorites.filter((article) => article.url !== action.payload),
            };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  