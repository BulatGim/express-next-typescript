export {};
import {IStand, IStandSort} from "../types/types";
const path = require("path");
const ApiError = require("../error/apiError");
const uuid = require("uuid")
const {Stand} = require("../models/models");
const {Op} = require("sequelize");
const {Request, Response} = require("../index");

function sortStands(stands: IStandSort[], sort:string) {
    switch (sort) {
        case "lowerPrice":
            stands = stands.sort((a,b)=>Number(b.dataValues.price) < Number(a.dataValues.price)?(1):(-1));
            break;
        case "biggerPrice":
            stands = stands.sort((a,b)=>Number(b.dataValues.price) > Number(a.dataValues.price)?(1):(-1));
            break;
    }
    return stands;
}

class stoikiController {
    async create(req: typeof Request, res:typeof Response, next:any){
        try {
            let {name, price, height,width,deep,description,characteristics, catalogId} = req.body;
            const {imgs} = req.files;
            let imgsNameArr:string[] = [];
            for (let i = 0; i<imgs.length; i++){
                let fileName = uuid.v4()+".jpg"
                imgs[i].mv(path.resolve(__dirname, '..', 'static', fileName))
                imgsNameArr = [...imgsNameArr, fileName]
            }
            const stand = await Stand.create({name, price, height, width, deep, photo: imgsNameArr, description, characteristics, catalogId});
            return res.json(stand);
        } catch (error) {
            if (error instanceof TypeError){
                next(ApiError.badRequest(error.message))
            }
        }
    }
    async getOne(req: typeof Request, res:typeof Response, next:any){
        try {
            const {id} = req.params;
            const stand = await Stand.findOne({where: {id}})
            return res.json(stand);
        }catch (error) {
            if (error instanceof TypeError){
                next(ApiError.badRequest(error.message))
            }
        }
    }
    async getByCatalogId(req: typeof Request, res:typeof Response, next:any){
        try {
            let {id} = req.params;
            let {page, limit, sort} = req.query
            page = page || 1;
            limit = limit || 12;
            let offset = page*limit - limit;
            let stands = await Stand.findAll({where: {catalogId: id}})
            stands = sortStands(stands, sort)
            if (offset<stands.length){
                stands = stands.slice(offset, offset+limit)
            }else{
                stands = [];
            }
            return res.json(stands)
        }catch (error) {
            if (error instanceof TypeError){
                next(ApiError.badRequest(error.message))
            }
        }
    }

    async getByString(req: typeof Request, res:typeof Response, next:any){
        try {
            let {page, limit, sort, searchString} = req.query
            page = page || 1;
            limit = limit || 12;
            let offset = page*limit - limit;
            let stands = await Stand.findAll({where: {
                    [Op.or]: [
                        {
                            name: {
                                [Op.like]: `%${searchString}%`
                            }
                        },{
                            deep: {
                                [Op.like]: `%${searchString}%`
                            }
                        },{
                            height: {
                                [Op.like]: `%${searchString}%`
                            }
                        },{
                            width: {
                                [Op.like]: `%${searchString}%`
                            }
                        },
                    ]
                }})
            /*console.log("page: "+page,"limit: "+limit,"offset: "+offset,"stands: ",stands, typeof stands, "searchString: "+searchString, typeof searchString)*/
            stands = sortStands(stands, sort)
            if (offset<stands.length){
                stands = stands.slice(offset, offset+limit)
            }else{
                stands = [];
            }
            return res.json(stands)
        }catch (error) {
            if (error instanceof TypeError){
                next(ApiError.badRequest(error.message))
            }
        }
    }
}

module.exports = new stoikiController();