import {UserWithBooksType, UserWithLaptopType, WithCompaniesType} from "./test_10_01.test";

export const upgradeUserLaptop = (u:UserWithLaptopType, newLaptopName: string) => {
    return {...u, laptop: {...u.laptop, title: newLaptopName}};
}

export const upgradeUserBooks = (u: UserWithBooksType, arr: string[]) => {
    return {...u, books: [...u.books, ...arr]};
}

export function updateBook(u: UserWithBooksType, bookToChange: string, bookSubstitutor: string) {
    return {...u, books: u.books.map(b => b === bookToChange ? bookSubstitutor : b)};
}

export const removeBook = (u: UserWithBooksType, bookToDelete: string) => {
    return {...u, books: u.books.filter(b => b !== bookToDelete)};
}

export const addNewCompany = (u: UserWithBooksType & WithCompaniesType, newComp: string) => {
    return {...u, companies: [...u.companies, newComp]};
}

export const updateCompanyTitle = (u: UserWithBooksType & WithCompaniesType, id: number, title: string) => {
    return {...u, companies: u.companies.map(c => c.id === id ? {...c, title} : c)};
}

export type CompanyType = {
    id: number;
    title: string
}

export type CompaniesType = {
    [key: string]: CompanyType[]
}
export const changeCompTitle = (c: CompaniesType, userId: string, companyId: number, newTitle: string) => {
    return {...c, [userId]: c[userId].map(el => el.id === companyId ? {...el, title: newTitle} : el)}
}