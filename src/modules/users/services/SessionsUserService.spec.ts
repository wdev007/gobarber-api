import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import SessionsUserService from './SessionsUserService';
import CreateUserService from './CreateUserService';
import HashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

describe('SessionsUser', () => {
  it('should be able to authenticate with existing user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const hashProvider = new HashProvider();
    const createUserSerivce = new CreateUserService(
      fakeUsersRepository,
      hashProvider,
    );
    const sessionsUserService = new SessionsUserService(
      fakeUsersRepository,
      hashProvider,
    );

    const user = await createUserSerivce.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    });

    const response = await sessionsUserService.execute({
      email: 'johndoe@gmail.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with non existing user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const hashProvider = new HashProvider();
    const sessionsUserService = new SessionsUserService(
      fakeUsersRepository,
      hashProvider,
    );

    expect(
      sessionsUserService.execute({
        email: 'johndoe@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const hashProvider = new HashProvider();
    const createUserSerivce = new CreateUserService(
      fakeUsersRepository,
      hashProvider,
    );
    const sessionsUserService = new SessionsUserService(
      fakeUsersRepository,
      hashProvider,
    );

    await createUserSerivce.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    });

    expect(
      sessionsUserService.execute({
        email: 'johndoe@gmail.com',
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
