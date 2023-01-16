import { IUser } from "../Interfaces";

export default class User {
    props: IUser

    constructor(props: IUser) {
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
