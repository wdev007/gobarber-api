import { Router } from 'express';
import appointmentsRouters from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRoutes from '@modules/users/infra/http/routes/users.routes';
import sessionsRoutes from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouters);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);

export default routes;
