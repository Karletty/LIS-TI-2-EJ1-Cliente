import { apiRest } from '../utils/axios';

const redeemCoupon = async () => {
      const response = await apiRest.get('/coupons/redeemCoupon/{couponId}');
      return response;
}

const getCoupon = async (id: string) => {
      const response = await apiRest.get('/coupon/show/{couponId}');
      return response;
}

export const couponsServices = { getCoupon, redeemCoupon };