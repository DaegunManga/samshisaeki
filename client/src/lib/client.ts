import { Axios, AxiosRequestConfig } from 'axios';

export default class Client {
  private static token: string = '';

  private static getDefaultRequestOptions() {
    return {
      Headers: {
        token: `Bearer ${Client.token}`,
      },
    };
  }

  private static client = new Axios({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

  static get(url: string, option?: AxiosRequestConfig) {
    return Client.client.get(url, {
      ...this.getDefaultRequestOptions(),
      ...option,
    });
  }

  static post(url: string, payload?: any, option?: AxiosRequestConfig) {
    return Client.client.post(url, payload, {
      ...this.getDefaultRequestOptions(),
      ...option,
    });
  }

  static setToken(token: string) {
    Client.token = token;
  }
}
