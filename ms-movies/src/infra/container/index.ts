import { AxiosAdapter, HttpAdapter, IHttpAdapter } from "@shared/adapters/http";
import { container } from "tsyringe";

export const axiosAdapterFactory = (url: string, apiKey?: string) => {
  const axiosAdapter = new AxiosAdapter(url, apiKey);
  container.register<IHttpAdapter>("HttpAdapter", { useValue: axiosAdapter });
  return container.resolve(HttpAdapter);
};
