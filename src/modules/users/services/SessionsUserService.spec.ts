import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import SessionsUserService from './SessionsUserService';
import CreateUserService from './CreateUserService';
import HashProvider from '../providers/HashProvider/implementations/BCriptyHashProvider';

describe('SessionsUser', () => {
  it('should be able to create new user', async () => {
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

    const response = await sessionsUserService.execute({
      email: 'johndoe@gmail.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
  });

  // it('should not be able to create a new user with same email from another', async () => {
  //   const fakeUsersRepository = new FakeUsersRepository();
  //   const createUserSerivce = new SessionsUserService(fakeUsersRepository);

  //   await createUserSerivce.execute({
  //     name: 'John Doe',
  //     email: 'johndoe@gmail.com',
  //     password: '123456',
  //   });

  //   expect(
  //     createUserSerivce.execute({
  //       name: 'John Doe 2',
  //       email: 'johndoe@gmail.com',
  //       password: '1234567',
  //     }),
  //   ).rejects.toBeInstanceOf(AppError);
  // });
});
