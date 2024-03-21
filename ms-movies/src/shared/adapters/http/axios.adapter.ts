import axios, { AxiosInstance } from "axios";
import { IHttpAdapter, StringKeyValueObject } from "./http.adapter";

export class AxiosAdapter implements IHttpAdapter {
  private httpApi: AxiosInstance;
  constructor(url: string, apiKey?: string) {
    this.httpApi = axios.create({
      baseURL: url,
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + apiKey,
      },
    });
  }
  async get<T>(url: string, params?: StringKeyValueObject): Promise<T> {
    const response = await this.httpApi.get<T>(url, { params });
    const data = response.data;
    return data;
  }
}
