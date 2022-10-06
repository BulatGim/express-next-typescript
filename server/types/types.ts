
export interface IStandSort {
    dataValues:{
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
}

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

export interface IColor {
    id: number;
    color:string;
    ral: string;
}

export interface IFile {
    name:string;
    currentDirection:string;
    data: string;
}