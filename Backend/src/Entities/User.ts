import { IUser } from "../Interfaces";
import MyError from "../Utils/MyError";

export default class User {
    props: IUser

    constructor(props: IUser) {
        const { name, email, password, role } = props;

        if (!name || !role || !email || !password) {
            throw new MyError('Some fields are missing')
        }

        this.props = props

    }

    // getters

    get name(): String {
        return this.props.name;
    }

    get email(): String {
        return this.props.email
    }

    get password(): String {
        return this.props.password
    }

    get role(): String {
        return this.props.role
    }
}
