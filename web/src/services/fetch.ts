import axios from 'axios';

import type { AxiosRequestConfig } from 'axios';

type RequestConfig = AxiosRequestConfig & { url: string };

const serverUrl = process.env.REACT_APP_SERVER_URL;

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
};

const instance = axios.create({
  baseURL: `${serverUrl}/api/`,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

const _fecth = async ({ method = 'get', ...props }: RequestConfig) => {
  if (method === 'post') {
    try {
      return await instance.post(props.url, props.data, config);
    } catch (err) {
      console.error(err);
    }
  } else {
    try {
      return await instance.get(props.url, config);
    } catch (err) {
      console.error(err);
    }
  }
}

export default _fecth;