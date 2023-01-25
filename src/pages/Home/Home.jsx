import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'components/apiMovie.js';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fatchMovies = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fatchMovies();
  }, []);

  if (!movies) {
    return <Title>Something wrong, please try again!</Title>;
  }
  return (
    <main>
      <Title>Popular movies</Title>
      <MoviesList movies={movies} />
    </main>
  );
};
