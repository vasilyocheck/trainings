export const dataState: DataStateType = {
    pages:
        [
            {heading: 'Цикл while', about: 'цикл while имеет следующий синтаксис'},
            {heading: 'Цикл for', about: 'цикл for имеет следующий синтаксис'},
            {heading: "Конструкция \"switch\"", about: 'цикл while имеет следующий синтаксис'}
        ]
}

export type DataStateType = {
    pages: PagesType[]
}

export type PagesType = {
    heading: string
    about: string
}