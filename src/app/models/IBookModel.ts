import { IAuthorModel } from './IAuthorModel';

export interface IBookModel {
    id: string;
    title: string;
    author: IAuthorModel;
    cover: string;
    price: number;
}
