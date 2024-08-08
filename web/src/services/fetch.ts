import { getData } from "../utils/_storage";
import axios from "axios";

import type { AxiosRequestConfig } from "axios";

type RequestConfig = AxiosRequestConfig;

const serverUrl = process.env.REACT_APP_SERVER_URL;
const token = process.env.REACT_APP_SESSION_SECRET as string;
const instance = axios.create({
  baseURL: `${serverUrl}/api/`,
  timeout: 1000,
});

const _fecth = async ({
  url = "",
  method = "get",
  ...props
}: RequestConfig) => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: await getData(token),
    },
  };
  if (method === "post") {
    try {
      return await instance.post(url, props.data, config);
    } catch (err) {
      console.error(err);
    }
  } else {
    try {
      return await instance.get(url, config);
    } catch (err) {
      console.error(err);
    }
  }
};

export default _fecth;
