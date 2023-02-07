import { IUser } from './../../Interfaces/index';
import { UsersRepository } from './../../Repositories/UsersRepository';


type ReadUserResponse = IUser[]

export class ReadUser {
    constructor(private userRepository: UsersRepository) { }

    async readAll(auth: string): Promise<ReadUserResponse> {
        const users = await this.userRepository.read(auth);

        return users;
    }
}