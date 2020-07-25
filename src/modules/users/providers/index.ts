import { container } from 'tsyringe';

import HashProvider from './HashProvider/implementations/BCriptyHashProvider';
import IHashProvider from './HashProvider/models/IHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', HashProvider);
