/*
  eslint-disable
    @typescript-eslint/require-await,
    @typescript-eslint/no-misused-promises,
    no-console
*/
import { Request, Response, Router } from "express";
import StatusCodes from "http-status-codes";

const router = Router();
const { OK } = StatusCodes;

// routes
export const routes: any = {
  orders: {
    getOrdersHistoryByStatus: {
      path: '/order-history',
      data: require("@repos/femsa/orders/history.json"),
    },
    getOrderById: {
      path: '/:orderId/providers/:providerId',
      data: require("@repos/femsa/orders/detail.json"),
    }
  },
} as const;

router.use((req: Request, res: Response, next) => {
  console.log('FEMSA routes');
  const { body, params } = req;
  console.log({ body, params });
  // console.log(res);
  next();
});

router.post(routes.orders.getOrdersHistoryByStatus.path, (_: Request, res: Response) => {
  return res.status(OK).json(routes.orders.getOrdersHistoryByStatus.data);
});
router.get(routes.orders.getOrderById.path, (_: Request, res: Response) => {
  return res.status(OK).json(routes.orders.getOrderById.data);
});

export default router;
