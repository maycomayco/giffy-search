import { API_KEY, API_URL } from './settings';

// este servicio es para obtener un solo gif
const transformResponse = apiResponse => {
  const { data } = apiResponse;
  const { id, title, images } = data;
  const { url } = images.downsized_medium;
  return { id, title, url };
};

export default function getSingleGif({ id }) {
  const apiURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;
  return fetch(apiURL)
    .then(resp => resp.json())
    .then(transformResponse);
}
