import User from "../Entities/User";
import { IUser } from "../Interfaces";

export interface UsersRepository {
    create(user: User): Promise<void>;
    read(auth: string): Promise<IUser[] | []>;
    findEqualUser(email: string): Promise<User | null>
}