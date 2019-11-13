import { Router } from 'express';

import teamRoutes_v1 from './modules/teams/teamRoutes_v1';
import userRoutes_v1 from './modules/users/userRoutes_v1';
import authRoutes_v1 from './modules/auth/authRoutes_v1';
import othersRoutes_v1 from './modules/others/othersRoutes_v1';
import teamMembershipRoutes_v1 from './modules/teamMembership/teamMembershipRoutes_v1';

import swagger from "./swagger/swagger";

const router = Router();

router.use('/api/v1/auth', authRoutes_v1);
console.log("[initialized] authRoutes_v1               /api/v1/auth");

router.use('/api/v1/users', userRoutes_v1);
console.log("[initialized] userRoutes_v1               /api/v1/users");

router.use('/api/v1/teams', teamRoutes_v1);
console.log("[initialized] teamsRoutes_v1              /api/v1/teams");

router.use('/api/v1/others', othersRoutes_v1);
console.log("[initialized] othersRoutes_v1             /api/v1/others");

router.use('/api/v1/teamMembership', teamMembershipRoutes_v1);
console.log("[initialized] teamMembershipRoutes_v1     /api/v1/teamMembership");

console.log("");
swagger(router, "v1");

export default router;
