import { Router } from 'express';
import appointmentsRouters from './appointments.routes';
import usersRoutes from './users.routes';
import sessionsRoutes from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouters);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);

export default routes;
