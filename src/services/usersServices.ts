import { apiRest } from '../utils/axios';

const login = async (email: string, pass: string) => {
      const csrfResponse = await apiRest.get('/sanctum/csrf-cookie');
      if (csrfResponse) {
            const response = await apiRest.post(`/api/login?email=${email}&password=${pass}`);
            return response;
      }
}

const logout = async () => {

      const u = localStorage.getItem('user');
      if (u) {
            const user = JSON.parse(u);
            const headers = {
                  accept: 'application/json',
                  Authorization: 'Bearer ' + user.accessToken
            }
            const response = await apiRest.get(`/api/logout`, {
                  headers: headers
            })
            return response;
      }
}


export const usersServices = { login, logout };