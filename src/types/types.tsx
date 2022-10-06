import {number} from "prop-types";

export interface IStand {
    id: number;
    name: string;
    price: string;
    height: number;
    width: number;
    deep: string;
    photo: string[];
    description: string;
    characteristics: string;
    createdAt: string;
    updatedAt: string;
    catalogId: number;
    color?: string;
}

export interface IError {
    formInput: string;
    error: string
}

export interface IFormValuesForm {
    name?: string;
    phone?: string;
    email?: string;
    comment?: string;
    search?:string;
}

export interface ISortingPoint {
    id: number;
    name: string;
    isActive: boolean;
    sorting: string;
}

export interface ICatalogItem {
    id: number;
    name: string;
    photo: string;
    createdAt: string;
    updatedAt:string;
}

export interface ICase{
    id:number;
    company:string;
    client: string;
    sphere:string;
    region:string;
    stand:string;
    done:string;
    mainPhoto:string;
    task: string;
    solution:string;
    stage1:string;
    stage2:string;
    stage3:string;
    createdAt:string;
    updatedAt:string;
    caseResult:{
        id:number;
        resultText:string;
        photo: string[];
        createdAt:string;
        updatedAt:string;
        caseId:number;
    }
}