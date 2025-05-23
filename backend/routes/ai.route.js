import express from "express";
import {getRecommendMovies} from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/recommend-movies", getRecommendMovies);

export default router;