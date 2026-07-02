import { Router } from "express"
import {
	getLearnerRecommendations,
	engageRecommendation,
} from "../controllers/recommendations.controller"
import { createRequireAuth } from "../middleware/auth.middleware"
import { type JwtService } from "../services/jwt.service"

export const createRecommendationsRouter = (jwtService: JwtService): Router => {
	const router = Router()
	const authMiddleware = createRequireAuth(jwtService)

	router.get("/recommendations", authMiddleware, getLearnerRecommendations)
	router.post("/recommendations/engage", authMiddleware, engageRecommendation)

	return router
}
