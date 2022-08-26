const path = require("path");
const ApiError = require("../error/apiError");
const uuid = require("uuid")
const {Stand} = require("../models/models");

class stoikiController {
    async create(req,res, next){
        /*try {*/
            let {name, price, height,width,deep,description,characteristics, catalogId} = req.body;
            const imgs = req.files.imgs;
            let imgsNameArr = [];
            for (let i = 0; i<imgs.length; i++){
                let fileName = uuid.v4()+".jpg"
                imgs[i].mv(path.resolve(__dirname, '..', 'static', fileName))
                imgsNameArr = [...imgsNameArr, fileName]
            }
            const stand = await Stand.create({name, price, height, width, deep, photo: imgsNameArr, description, characteristics, catalogId});
            return res.json(stand);
        /*} catch (error) {
            next(ApiError.badRequest(error.message))
        }*/
    }
    async getOne(req,res){
        const {id} = req.params;
        const stand = await Stand.findOne({where: {id}})
        return res.json(stand);
    }
    async getByCatalogId(req,res){
        let {id} = req.params;
        let {page, limit} = req.query
        page = page || 1;
        limit = limit || 12;
        let offset = page*limit - limit;
        const stands = await Stand.findAll({where: {catalogId: id}, limit, offset})
        return res.json(stands)
    }
}

module.exports = new stoikiController();