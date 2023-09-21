import {
    addNewCompany, changeCompTitle,
    removeBook,
    updateBook,
    updateCompanyTitle,
    upgradeUserBooks,
    upgradeUserLaptop
} from "./test_10";
import exp from "constants";

type AddressType = {
    city: string
    house: number
}

export type UserWithLaptopType = {
    name: string
    hair: 32
    address: AddressType
    laptop: {title: string}
}

export type UserWithBooksType = UserWithLaptopType & {
    books: string[]
}

export type WithCompaniesType = {
    companies: {id: number, title: string}[]
}

test('upgrade laptop to macbook', () => {
    const user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const userWithNewLaptop = upgradeUserLaptop (user, 'Macbook');

    expect(user).not.toBe(userWithNewLaptop);
    expect(user.laptop).not.toBe(userWithNewLaptop.laptop);
    expect(user.address).toBe(userWithNewLaptop.address);
    expect(userWithNewLaptop.laptop.title).toBe('Macbook');
    expect(user.laptop.title).toBe('Zenbook');

})

test('add new books to the bookslist', () => {
    const user: UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html','css', 'js']
    }

    const userWithNewBooks = upgradeUserBooks (user, ['ts', 'rest api']);

    const userWithUpdatedBook = updateBook(user, 'js', 'ts');

    const userWithoutJS = removeBook(userWithUpdatedBook, 'js');

    expect(user).not.toBe(userWithNewBooks);
    expect(user.address).toBe(userWithNewBooks.address);
    expect(user.books).not.toBe(userWithNewBooks.books);
    expect(userWithNewBooks.books[3]).toBe('ts');
    expect(userWithNewBooks.books[4]).toBe('rest api');
    expect(userWithUpdatedBook.books[2]).toBe('ts');
    expect(userWithUpdatedBook.books.length).toBe(3);
    expect(userWithoutJS.books[2]).toBe('ts');
})

test('add new company to the list of companies', () => {
    const user: UserWithBooksType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html','css', 'js'],
        companies: [
            {id: 1, title: 'EPAM'},
            {id: 2, title: 'IT-Incubator'}
        ]
    }

    const userWithNewCompany = addNewCompany(user, 'Google');

    expect(userWithNewCompany).not.toBe(user);
    expect(userWithNewCompany.companies.length).toBe(3);
    expect(userWithNewCompany.companies[2]).toBe('Google');
})

test('update the list of companies', () => {
    const user: UserWithBooksType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html','css', 'js'],
        companies: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'IT-Incubator'}
        ]
    }

    const userWithUpdatedCompany = updateCompanyTitle(user, 1, 'Epam');

    expect(userWithUpdatedCompany).not.toBe(user);
    expect(userWithUpdatedCompany.companies[0].title).toBe('Epam');
    expect(userWithUpdatedCompany.companies.length).toBe(2);
})

test('update the array', () => {
    const user: UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html','css', 'js']
    }

    const companies = {
        'Dimych': [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'IT-Incubator'}],
        'Artem': [
            {id: 2, title: 'IT-Incubator'}
        ]
    };

    const companiesAfterUpdate = changeCompTitle(companies, 'Dimych', 1, 'EPAM');

    expect(companiesAfterUpdate).not.toBe(companies);
    expect(companiesAfterUpdate['Dimych'][0].title).toBe('EPAM');
    expect(companiesAfterUpdate['Artem']).toBe(companies['Artem']);

})