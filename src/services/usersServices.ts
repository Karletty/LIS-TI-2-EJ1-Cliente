import { apiRest } from '../utils/axios';

const login = async (email: string, pass: string) => {
      apiRest.get('/sanctum/csrf-cookie').then(() => {
            apiRest.post(`/api/login?email=${email}&password=${pass}`).then((response) => {
                  localStorage.setItem('user', JSON.stringify(response.data))
            }).catch(function (error) {
                  console.log(error);
            })
      })

}


export const usersServices = { login };