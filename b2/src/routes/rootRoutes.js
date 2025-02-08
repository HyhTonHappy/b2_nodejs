import express from 'express';
import rootRestaurant from './rootRestaurant.js';
import rootOrder from './rootOrder.js';
const rootRoutes = express.Router();

rootRoutes.use("/res", rootRestaurant);
rootRoutes.use("/order", rootOrder);

export default rootRoutes;