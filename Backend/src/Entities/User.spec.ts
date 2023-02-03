import User from './User';
import { describe, expect, it } from 'vitest'
import CustomError from '../Utils/CustomError';

describe('1 - User test', () => {
    it('should be able to create an User', () => {
        const john = new User({
            name: 'John Doe',
            email: 'john@email.com',
            password: 'secret',
            role: 'customer'
        });

        expect(john).toBeInstanceOf(User)
        expect(john.name).toBe('John Doe')
        expect(john.email).toBe('john@email.com')
        expect(john.password).toBe('secret')
    });

    it('should be able to create an User whithout role', () => {
        const john = new User({
            name: 'John Doe',
            email: 'john@email.com',
            password: 'secret'
        });

        expect(john).toBeInstanceOf(User)
        expect(john.name).toBe('John Doe')
        expect(john.role).toBe('customer')
    });

    it('cannot creat an User whithout some arguments', () => {
        expect(() => {
            return new User({
                name: '',
                email: 'john@email.com',
                password: 'secret',
            });

        }).toThrow(new CustomError("Name must be at least 3 characters length"))

        expect(() => {
            return new User({
                name: 'John Doe',
                email: '',
                password: 'secret',
                role: 'customer'
            });
        }).toThrowError(new CustomError("Email must be in email format (xxx@xxxx.com)"))

        expect(() => {
            return new User({
                name: 'John Doe',
                email: 'john@email.com',
                password: '',
                role: 'customer'
            });
        }).toThrowError(new CustomError('Password must be at least 6 character length'))
    })
})
