import User from './User';
import { describe, expect, it } from 'vitest'
import MyError from '../Utils/MyError';

describe('1 - User test', () => {
    it('create an User', () => {
        const john = new User({
            name: 'John Doe',
            email: 'john@email.com',
            password: 'secret',
            role: 'customer'
        });

        expect(john).toBeInstanceOf(User)
        expect(john.name).toBe('John Doe')
    });

    it('cannot creat an User whithout some arguments', () => {
        expect(() => {
            return new User({
                name: '',
                email: 'john@email.com',
                password: 'secret',
                role: 'customer'
            });
        }).toThrow(new MyError('Some fields are missing'))

        expect(() => {
            return new User({
                name: 'John Doe',
                email: '',
                password: 'secret',
                role: 'customer'
            });
        }).toThrowError(new MyError('Some fields are missing'))

        expect(() => {
            return new User({
                name: 'John Doe',
                email: 'john@email.com',
                password: '',
                role: 'customer'
            });
        }).toThrowError(new MyError('Some fields are missing'))

        expect(() => {
            return new User({
                name: 'John Doe',
                email: 'john@email.com',
                password: 'secret',
                role: ''
            });
        }).toThrowError(new MyError('Some fields are missing'))
    })
})
