import express from 'express';
import {likeRestaurant} from '../controllers/like_resControllers.js';
import {createRateRes} from '../controllers/rate_resControllers.js';
import {listRate} from '../controllers/rate_resControllers.js';
const rootRestaurant = express.Router();
rootRestaurant.get("/list_likeres", likeRestaurant);
rootRestaurant.post("/create_rates", createRateRes);
rootRestaurant.get("/list_rates", listRate);

export default rootRestaurant;