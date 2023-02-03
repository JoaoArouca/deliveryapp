import { describe, it, expect } from "vitest";
import User from "../Entities/User";
import { CreateUser } from "./CreateUser";

describe('Create User', () => {
    it('should be able to create an User', () => {
        const createUser = new CreateUser();

        expect(createUser.execute({
            name: 'João',
            email: 'joao@gmail.com',
            password: 'secret'
        })).resolves.toBeInstanceOf(User);
    })
});