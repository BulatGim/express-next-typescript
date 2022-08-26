const path = require("path");
const ApiError = require("../error/apiError");
const uuid = require("uuid")
const {Catalog} = require("../models/models");

class catalogController {
    async create(req,res, next){
        try {
            let {name} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4()+".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const category = await Catalog.create({name, photo: fileName});
            return res.json(category);
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
    async getAll(req,res){
        const categories = await Catalog.findAll()
        return res.json(categories);
    }
}

module.exports = new catalogController();