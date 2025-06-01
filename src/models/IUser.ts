export interface IUser{
    id: string,
    name: string,
    surname: string,
    email: string,
    sex: Sex,
    birthdate: Date;
}

export enum Sex {
    MALE = 'male',
    FEMALE = 'female'
}