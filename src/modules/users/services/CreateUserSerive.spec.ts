import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserSerivce from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserSerivce = new CreateUserSerivce(fakeUsersRepository);

    const user = await createUserSerivce.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserSerivce = new CreateUserSerivce(fakeUsersRepository);

    await createUserSerivce.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    });

    expect(
      createUserSerivce.execute({
        name: 'John Doe 2',
        email: 'johndoe@gmail.com',
        password: '1234567',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
