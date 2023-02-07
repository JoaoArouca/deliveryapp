import User from "../../Entities/User";
import { IUser } from "../../Interfaces";
import CustomError from "../../Utils/CustomError";
import { UsersRepository } from "../UsersRepository";
import * as jwt from 'jsonwebtoken';
import { IToken } from "../../Utils/Token";

export default class InMemoryUsers implements UsersRepository {
    public list: User[] = [];
    public token;

    constructor(token: IToken) {
        this.token = token;
    }

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

    async read(auth: string): Promise<IUser[]> {
        try {
            // const decoded = jwt.verify(auth, secret);
            const decoded = this.token.decodeToken(auth);
            if (decoded.role === 'adm') {
                return this.list;
            } else {
                throw new CustomError('You dont have the permission to do it');
            }
        } catch (error) {
            throw new CustomError('You need to log in to continue');
        }

        return [];
    }
}