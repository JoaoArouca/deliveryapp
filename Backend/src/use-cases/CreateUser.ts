import { UsersRepository } from './../Repositories/UsersRepository';
import User from '../Entities/User';
import CustomError from '../Utils/CustomError';


interface CreateUserRequest {
    name: string
    email: string
    password: string
}

type CreateUserResponse = User;

export class CreateUser {
    constructor(private userRepository: UsersRepository) { }

    async execute({ name, email, password }: CreateUserRequest): Promise<CreateUserResponse> {
        const findEqualUser = await this.userRepository.findEqualUser(email);

        if (findEqualUser) {
            throw new CustomError('User already exists');
        }

        const user = new User({
            name,
            email,
            password
        });

        await this.userRepository.create(user); // Salva dentro do repositório local

        return user;
    }
}