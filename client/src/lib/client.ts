import { Axios, AxiosRequestConfig } from "axios";

export default class Client {
  private static client = new Axios({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

  static get(url: string, option?: AxiosRequestConfig) {
    Client.client.get(url, option);
  }

  static post(url: string, payload?: any, option?: AxiosRequestConfig) {
    this.client.post(url, payload, option);
  }
}
