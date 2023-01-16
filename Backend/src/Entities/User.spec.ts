import User from './User';
import { expect, test } from 'vitest'

test('create an User', () => {
    const john = new User({
        name: 'John Doe',
        email: 'john@email.com',
        password: 'secret',
        role: 'customer'
    });

    expect(john).toBeInstanceOf(User)
    expect(john.name).toBe('John Doe')
});
