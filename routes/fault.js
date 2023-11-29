import { createFault,getAllFaultDetails } from "../controllers/fault.js";
import  express  from "express";
import { Router } from "express";

const router = express.Router();

router.get('/getfault',getAllFaultDetails)
router.post('/createFault',createFault)


export default router;