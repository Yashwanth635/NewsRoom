// HeartComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../actions';
import { Button } from 'react-bootstrap';


const HeartComponent = ({ article }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  console.log('favorites',favorites)

  const isFavorite = favorites.some((favorites) => favorites.url === article.url);

  const handleHeartClick = () => {
    console.log('handleHeartClick')
    console.log('isFavorite',isFavorite)

    if (isFavorite) {
      dispatch(removeFromFavorites(article.url));
    } else {
      dispatch(addToFavorites(article));
    }
  };

  return (
    isFavorite ? 
    <Button
      role="button"
      onClick={handleHeartClick}
      style={{ color: 'red', cursor: 'pointer' }}
    >
      ❤️
    </Button>
    :
    <Button
      role="button"
      onClick={handleHeartClick}
      style={{ color: 'black', cursor: 'pointer' }}
    >
    🤍
    </Button>
  );
};

export default HeartComponent;
