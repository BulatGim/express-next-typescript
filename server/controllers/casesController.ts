export {};

const path = require("path");
const {Case, CaseResult} =  require("../models/models");
const uuid = require("uuid");
const ApiError = require("../error/apiError");
const {Request, Response} = require("../index");

function createFileName(img:any) {
    let fileName = uuid.v4()+".jpg"
    img.mv(path.resolve(__dirname, '..', 'static', fileName))
    return fileName
}

class casesController {
    async createCase(req: typeof Request, res:typeof Response, next:any) {
        try {
            let {company, client, sphere, region, stand, done, task, solution, stage1, stage2, stage3, resultText} = req.body;
            let {mainPhoto, result0, result1, result2} = req.files;
            mainPhoto = createFileName(mainPhoto);
            result0 = createFileName(result0);
            result1 = createFileName(result1);
            result2 = createFileName(result2);
            let photo = [result0, result1, result2]
            let caseItem = await Case.create({company, client, sphere, region, stand, done, task, solution, stage1, stage2, stage3, mainPhoto})
            let result = await CaseResult.create({resultText, photo, caseId: caseItem.id})
            res.json({caseItem, result})
        }catch (error) {
            if (error instanceof TypeError){
                next(ApiError.badRequest(error.message))
            }
        }
    }
    async getAllCases(req: typeof Request, res:typeof Response, next:any){
        try {
            let cases = await Case.findAll({include: CaseResult});
            res.json(cases)
        }catch (error) {
            if (error instanceof TypeError){
                next(ApiError.badRequest(error.message))
            }
        }
    }
    async getOneCase(req: typeof Request, res:typeof Response, next:any){
        try {
            let {id} = req.params;
            console.log(id)
            let oneCase = await Case.findOne({where: {id}, include: CaseResult})
            res.json(oneCase)
        }catch (error) {
            if (error instanceof TypeError){
                next(ApiError.badRequest(error.message))
            }
        }
    }
}
module.exports = new casesController();