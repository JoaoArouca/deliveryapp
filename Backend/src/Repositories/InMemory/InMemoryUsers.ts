import User from "../../Entities/User";
import { UsersRepository } from "../UsersRepository";

export default class InMemoryUsers implements UsersRepository {
    public list: User[] = [];

    async create(user: User): Promise<void> {
        this.list.push(user);
    }

    async findEqualUser(email: string): Promise<User | null> {
        const equalUser = this.list.find(user => user.email === email);
        if (!equalUser) {
            return null
        }
        return equalUser;
    }
}