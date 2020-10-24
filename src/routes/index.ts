import { Router } from 'express';
import UserRouter from './Users';
import LeaderRouter from './Leaders'

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/leaders', LeaderRouter);

// Export the base-router
export default router;
