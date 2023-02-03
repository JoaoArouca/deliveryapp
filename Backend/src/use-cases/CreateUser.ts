import User from '../Entities/User';


interface CreateUserRequest {
    name: string
    email: string
    password: string
}
type CreateUserResponse = User;

export class CreateUser {
    async execute({ name, email, password }: CreateUserRequest): Promise<CreateUserResponse> {
        const user = new User({
            name,
            email,
            password
        });

        return user;
    }
}