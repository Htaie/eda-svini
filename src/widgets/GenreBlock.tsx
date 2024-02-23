import React from 'react';
import GenreLink from '../features/GenreLink/GenreLink';
import { GENRES } from '../shared/constants/constants';
import GenreLinkSlider from '../features/GenreCarousel/GenreLinkSlider';
import { FilmByGenreSlider } from '../entities/SlidersForGenres/FilmsByGenreSlider';
import View from '../features/View';

const GenreBlock = () => {
  console.log(GENRES);
  return (
    <>
      <GenreLinkSlider genre={GENRES} />
      {Object.keys(GENRES)
        .slice(0, 5)
        .map((genre) => (
          <FilmByGenreSlider genre={GENRES[genre]} />
        ))}
    </>
  );
};

export default GenreBlock;