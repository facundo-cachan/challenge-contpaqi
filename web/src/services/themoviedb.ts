import axios from 'axios';

import { setData } from '../utils/_storage';

import type { AxiosResponse, AxiosRequestConfig } from 'axios';

export type RequestConfig = AxiosRequestConfig;
export type GuestSession = {
  success: boolean
  guest_session_id: string
  expires_at: string
}
export type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
export type Genre = {
  id: number
  name: string
}

const mode = process.env.NODE_ENV === 'production';
const baseURL = process.env.REACT_APP_TMDB_URL;
const instance = axios.create();
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`
  }
};
const fetcher = async (url: string): Promise<AxiosResponse<any, any> | null> => {
  try {
    return await instance.get(url, options);
  } catch (err) {
    console.error(err);
    return null
  }
}
const genres = async () => {
  const url = mode ? `${baseURL}/genre/movie/list?language=en` : '/mocks/genres.json';
  const response = await fetcher(url);
  const results: Genre[] = response?.data.genres ?? [];

  setData('genre', JSON.stringify(results));
}
const guest_session = async () => {
  const url = `${baseURL}/authentication/guest_session/new`;
  const response = await fetcher(url);
  const {success, ...data} = response?.data ?? [];
  setData('guest_session', JSON.stringify(data));
}
const now_playing = async () => {
  const url = mode ? `${baseURL}/movie/now_playing?language=en-US&page=1` : '/mocks/now_playing.json';
  const response = await fetcher(url);
  const results: Movie[] = response?.data.results;

  return results;
}

export { guest_session, now_playing, genres };