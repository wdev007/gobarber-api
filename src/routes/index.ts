import { Router } from 'express';
import appointmentsRouters from './appointments.routes';
import usersRoutes from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouters);
routes.use('/users', usersRoutes);

export default routes;
