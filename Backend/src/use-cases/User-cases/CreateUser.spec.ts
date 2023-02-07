import { describe, it, expect } from "vitest";
import User from "../../Entities/User";
import InMemoryUsers from "../../Repositories/InMemory/InMemoryUsers";
import CustomError from "../../Utils/CustomError";
import Token from "../../Utils/Token";
import { CreateUser } from "./CreateUser";

describe('Create User', () => {
    it('should be able to create an User', () => {
        const token = new Token('segredo');
        const userRepository = new InMemoryUsers(token);
        const createUser = new CreateUser(userRepository);

        expect(createUser.execute({
            name: 'João',
            email: 'joao@gmail.com',
            password: 'secret'
        })).resolves.toBeInstanceOf(User);
    })

    it('should not be able to create an User that already exists', async () => {
        const token = new Token('segredo');
        const userRepository = new InMemoryUsers(token);
        const createUser = new CreateUser(userRepository);

        await createUser.execute({
            name: 'João',
            email: 'joao@email.com',
            password: 'secret'
        });

        expect(createUser.execute({
            name: 'Joao',
            email: 'joao@email.com',
            password: 'secret'
        })).rejects.toBeInstanceOf(CustomError);

        expect(createUser.execute({
            name: 'Joao',
            email: 'joao@email.com',
            password: 'secret'
        })).rejects.toThrow(new CustomError('User already exists'));
    })



});