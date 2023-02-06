import User from "../Entities/User";

export interface UsersRepository {
    create(user: User): Promise<void>;
    findEqualUser(email: string): Promise<User | null>
}