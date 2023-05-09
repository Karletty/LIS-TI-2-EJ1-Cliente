import { apiRest } from '../utils/axios';

const redeemCoupon = async (id: string) => {
      const u = localStorage.getItem('user');
      if (u) {
            const user = JSON.parse(u);
            const headers = {
                  accept: 'application/json',
                  Authorization: 'Bearer ' + user.accessToken
            }
            const response = await apiRest.get(`/api/coupons/redeemCoupon/${id}`, {
                  headers: headers
            })
            return response;
      }
}

const getCoupon = async (id: string) => {
      const response = await apiRest.get('/coupon/show/{couponId}');
      return response;
}

export const couponsServices = { getCoupon, redeemCoupon };