import axios from 'axios';

export const baseAxios = axios.create({
  baseURL: 'http://localhost:8000',
});

interface RequestInterface {
  url: string;
  method: 'get' | 'post' | 'patch';
  token?: string;
  data: object;
}
export const request = ({ method, data, url, token }: RequestInterface) => {
  return axios[method](`http://localhost:8000/${url}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
