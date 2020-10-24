import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import LeaderDao from '@daos/Leader/LeaderDao';

const router: Router = Router();
const leaderDao = new LeaderDao();
const {CREATED, OK, BAD_REQUEST} = StatusCodes;

/*****************************************************************
 *          Get All Leaders - GET /api/leaders/all
 ****************************************************************/

 router.get('/all', async (req: Request, res: Response) => {
     const leaders = await leaderDao.getAll();
     return res.status(OK).json({leaders})
 })


 /****************************************************************
 *          Get Leader By leaderId - GET /api/leaders/leaderId
 ****************************************************************/

 router.get('/:leaderId', async (req: Request, res: Response) => {
     const leader = await leaderDao.getOne(req.params.leaderId)
     return res.status(OK).json({leader})
 })

 

 export default router;