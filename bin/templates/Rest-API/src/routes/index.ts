import express from "express";
import { objsController } from "../controllers";

const router = express.Router();

router.get('/getobjs', objsController.getObjs);

router.post('/postobj', objsController.postObj);

export default router;