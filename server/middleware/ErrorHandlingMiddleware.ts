export {}

const ApiError = require("../error/apiError");
const {Request, Response} = require("../index");

module.exports = function (err:any, req: typeof Request, res:typeof Response, next:any){
    if(err instanceof ApiError){
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: "Непредвиденная ошибка"})
}