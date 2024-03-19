import express from 'express';

import { saveVehicle } from './../controllers/vehicles';

const router = express.Router();

router.post('/', saveVehicle);

export default  router;