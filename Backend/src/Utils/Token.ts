const jwt = require('jsonwebtoken')
import CustomError from './CustomError';

type decodeResponse = {
    role: string,
    email: string,
    iat: string
}

export interface IToken {
    generateToken(role: string, email: string): string;
    decodeToken(token: string): decodeResponse;
}

export default class Token {
    private secret: string;

    constructor(secret: string) {
        this.secret = secret;
    }

    public generateToken(role: string, email: string) {
        const payload = {
            role,
            email
        }
        return jwt.sign(payload, this.secret);
    }

    public decodeToken(token: string): decodeResponse {
        try {
            const decoded = jwt.verify(token, this.secret);
            return decoded;
        } catch (error) {
            throw new CustomError('Invalid Token');
        }
    }
}