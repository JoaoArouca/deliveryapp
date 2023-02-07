import { expect } from 'vitest';
import { CreateUser } from './CreateUser';
import { describe, it } from 'vitest';
import Token from '../../Utils/Token';
import InMemoryUsers from '../../Repositories/InMemory/InMemoryUsers';
import { ReadUser } from './ReadUser';
const jwt = require('jsonwebtoken');

describe('Read User', () => {
    it('should be able to list all users', async () => {
        const token = new Token('segredo');
        const userRepository = new InMemoryUsers(token);
        const createUser = new CreateUser(userRepository);
        const readUser = new ReadUser(userRepository);

        const user1 = await createUser.execute({
            name: 'João',
            email: 'joao@email.com',
            password: 'secret'
        });

        user1.role = 'adm';
        const newToken = token.generateToken(user1.role, user1.email);

        await createUser.execute({
            name: 'Pedro',
            email: 'pedro@email.com',
            password: 'secret'
        });

        await createUser.execute({
            name: 'Maria',
            email: 'maria@email.com',
            password: 'secret'
        });

        expect(readUser.readAll(newToken)).resolves.toHaveLength(3);
    })
})