import { useEffect, useState } from 'react';
import useGifs from './useGifs';
import getSingleGif from './../services/getSingleGif';

export default function useSingleGif({ id }) {
  const { gifs } = useGifs();
  const gifFromContext = gifs.find(singleGif => singleGif.id === id);

  const [gif, setGif] = useState(gifFromContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);
      getSingleGif({ id })
        .then(gif => {
          setGif(gif);
          setIsLoading(false);
          setIsError(false);
        })
        .catch(err => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [gif, id]);

  return { gif, isError, isLoading };
}
