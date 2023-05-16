import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Input } from "../../components";
import { Alert, Button } from 'react-bootstrap';
import { couponsServices } from '../../services/couponsService';

const Home = () => {
      const [couponId, setCouponId] = useState('');
      const [couponState, setCouponState] = useState('');
      const [error, setError] = useState('');
      const navigate = useNavigate();

      useEffect(() => {
            if (!localStorage.getItem('user')) {
                  navigate("/");
            }
      }, [couponState, navigate]);

      const hideState = () => {
            setCouponState('');
            setError('');
      }

      const handleSubmit = (e: any) => {
            e.preventDefault();
            if (couponId) {
                  const u = localStorage.getItem('user');
                  if (u) {
                        const user = JSON.parse(u);
                        if (couponId.includes(user.employee.company_id)) {
                              couponsServices.redeemCoupon(couponId).then(response => {
                                    console.log(response);
                                    setCouponState('El cupón fue canjeado');
                                    setTimeout(hideState, 2000);
                              });
                        }
                        else{
                              setError('El cupón no pertenece a esta empresa');
                              setTimeout(hideState, 2000);
                        }
                  }
            }
      }

      return (
            <>
                  {couponState && <Alert key='success' variant='success'>{couponState}</Alert>}
                  {error && <Alert key='danger' variant='danger'>{error}</Alert>}

                  <form action='get' onSubmit={handleSubmit}>
                        <Input
                              label="Id del cupón"
                              type="text"
                              name="coupon"
                              placeholder="Ingrese el id del cupón a canjear"
                              state={couponId}
                              setState={
                                    (newState: string) => {
                                          setCouponId(newState);
                                    }
                              }
                        />
                        <Button variant="primary" type="submit">
                              Canjear
                        </Button>
                  </form></>
      );
}

export { Home };