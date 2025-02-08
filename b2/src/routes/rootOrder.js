import express from 'express';
import { createOrder } from '../controllers/orderControllers.js';

const rootOrder = express();
rootOrder.post("/create_orders", createOrder);
export default rootOrder;
