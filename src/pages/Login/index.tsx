import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { usersServices } from '../../services/usersServices';
import { useState } from 'react';
import { Input } from "../../components";

const Login = () => {
      const [email, setEmail] = useState('');
      const [pass, setPass] = useState('');

      const handleSubmit = (e: any) => {
            e.preventDefault();
            if (email !== '' && pass !== '') {
                  usersServices.login(email, pass).then(response => console.log(response)).catch(error => console.log(error));
            }
      }

      return (
            <Form action='get' onSubmit={handleSubmit}>
                  <Input
                        label="Email"
                        type="text"
                        name="email"
                        placeholder="Ingrese su email"
                        state={email}
                        setState={
                              (newState: string) => {
                                    setEmail(newState);
                              }
                        }
                  />
                  <Input
                        label="Password"
                        type="password"
                        name="pass"
                        placeholder="Ingrese su contraseña"
                        state={pass}
                        setState={
                              (newState: string) => {
                                    setPass(newState);
                              }
                        }
                  />
                  <Button variant="primary" type="submit">
                        Submit
                  </Button>
            </Form>
      );
}

export { Login };