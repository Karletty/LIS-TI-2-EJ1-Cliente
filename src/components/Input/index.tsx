import { FC } from "react";
import { Form } from "react-bootstrap";

type Props<T> = {
      label: string;
      type: string;
      name: string;
      placeholder: string;
      state: T;
      setState: (newState: any) => void;
      col?: number;
}

const Input: FC<Props<any>> = ({ label, name, placeholder, type, state, setState, col }) => {
      return (
            <Form.Group className={`m-3 ${col ? `col-${col}` : ''}`}>
                  <Form.Label htmlFor='' className='form-label'>
                        {label}
                  </Form.Label>

                  <Form.Control
                        type={type}
                        name={name}
                        value={state}
                        placeholder={placeholder}
                        onChange={e => setState(e.target.value)}
                        className='form-control' />
            </Form.Group>
      );
}

export { Input };