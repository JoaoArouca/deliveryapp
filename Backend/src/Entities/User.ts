import { IUser } from "../Interfaces";
import CustomError from "../Utils/CustomError"

export default class User {
    props: IUser

    constructor(props: IUser) {
        const { name, email, password, role } = props;

        if (!name || !role || !email || !password) {
            throw new CustomError('Some fields are missing')
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
