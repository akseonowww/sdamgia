import axios from 'axios'

export interface IAuthParams {
  username: string
  password: string
}

export const getAuthStatus = (params: IAuthParams) =>
  axios
    .get(`${process.env.REACT_APP_AUTH}`, {
      params,
    })
    .then((response: any) => response.data)
    .catch((error: string) => console.log(error))
