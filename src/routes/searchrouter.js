import express from "express";
const router = express.Router();

import { getResultBySearch} from "../controllers/SearchResultController.js";

router.get('/searchQuery', getResultBySearch);

export default router;