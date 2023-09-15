type UserType = {
    name: string
    age: number
    address: { title: string }
}

function increaseAge(u: UserType) {
    u.age++;
}

export const empty = () => {
}
test('reference type test', () => {
    let user:UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user);
    expect(user.age).toBe(33);

    const superman = user;
    superman.age = 1000;
    expect(superman.age).toBe(1000);

});

test('test users array', () => {
    const users = [
        {name: 'Dimych', age: 32},
        {name: 'Johnny', age: 45}
    ];

    let admins = users;
    admins.push({name: 'Bandyugun', age: 23});

    expect(users[2]).toEqual({name: 'Bandyugun', age: 23});
});

test('value type test', () => {
    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    const user2 = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    user2.address.title = 'Moscow';

    expect(user.address.title).toBe('Moscow');
});

test('reference type array test', () => {

    let address = 'Minsk'

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: address
        }
    }

    const user2 = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    const users = [user, user2, {name: 'Misha', age: 4, address: address}];

    users[0].name = 'Dmitry';

    expect(user.name).toBe('Dmitry');
});