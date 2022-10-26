import { Axios, AxiosRequestConfig } from 'axios';

export default class Client {
  private static client = new Axios({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

  static get(url: string, option?: AxiosRequestConfig) {
    return Client.client.get(url, option);
  }

  static post(url: string, payload?: any, option?: AxiosRequestConfig) {
    return Client.client.post(url, payload, option);
  }
}
