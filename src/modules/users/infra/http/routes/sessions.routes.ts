import { Router } from 'express';

import SessionUserService from '@modules/users/services/SessionsUserService';
import UsersRepository from '../../typeorm/repositories/UsersRepository';

const sessionsRouter = Router();
// const usersRepository = new UsersRepository();

sessionsRouter.post('/', async (request, response) => {
  const usersRepository = new UsersRepository();
  const { email, password } = request.body;
  const sessionUser = new SessionUserService(usersRepository);

  const { user, token } = await sessionUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
