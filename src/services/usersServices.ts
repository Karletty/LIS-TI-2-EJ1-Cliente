import axios from 'axios';
import { apiRest } from '../utils/axios';

const login = async (email: string, pass: string) => {
      const userData = {
            email: email,
            password: pass
      }
      apiRest.get('/sanctum/csrf-cookie').then(() => {
            apiRest.post(`http://127.0.0.1:8000/api/login?email=${email}&password=${pass}`).then((response) => {
                  localStorage.setItem('user', JSON.stringify(response.data))
            }).catch(function (error) {
                  console.log(error);
            })
      })

}

const logout = async () => {
      const response = await apiRest.get('logout');
      return response;
}


export const usersServices = { login, logout };