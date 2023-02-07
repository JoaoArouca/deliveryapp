import { IUser } from "../Interfaces";
import CustomError from "../Utils/CustomError";
import { userSchema } from "../Utils/Schemas";
import * as z from "zod";

type userZod = z.infer<typeof userSchema>; // Tipagem idêntica ao IUser

export default class User {
    props: userZod;

    constructor(props: IUser) {
        try {
            props.role = 'customer';
            this.props = userSchema.parse(props);
        } catch (error: any) {
            throw new CustomError(error.issues[0].message); // Error Zod
        }
    }

    // getters
    get name(): string {
        return this.props.name;
    }

    get email(): string {
        return this.props.email;
    }

    get password(): string {
        return this.props.password;
    }

    get role(): string {
        return this.props.role;
    }

    // setters
    set role(newrole: string) {
        this.props.role = newrole;
    }
}
