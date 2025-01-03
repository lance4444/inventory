import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboadController";

const router = Router();

router.get("/", getDashboardMetrics);

export default router;
