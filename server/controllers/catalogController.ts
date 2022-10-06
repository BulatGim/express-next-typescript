export {};
const {Request, Response} = require("../index");
const path = require("path");
const ApiError = require("../error/apiError");
const uuid = require("uuid")
const {Catalog} = require("../models/models");

class catalogController {
    async create(req: typeof Request, res:typeof Response, next:any){
        try {
            let {name} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4()+".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const category = await Catalog.create({name, photo: fileName});
            return res.json(category);
        } catch (error) {
            if (error instanceof TypeError){
                next(ApiError.badRequest(error.message))
            }
        }
    }
    async getAll(req: typeof Request, res:typeof Response, next:any){
        try {
            const categories = await Catalog.findAll()
            return res.json(categories);
        }catch (error) {
            if (error instanceof TypeError){
                next(ApiError.badRequest(error.message))
            }
        }
    }
}

module.exports = new catalogController();