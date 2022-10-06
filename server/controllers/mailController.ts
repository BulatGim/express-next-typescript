const ApiError = require("../error/apiError") ;

export {};
import {IStand, IColor, IFile} from "../types/types";
const nodemailer = require("nodemailer")
const uuid = require("uuid");
const path = require("path");
const {Stand} = require("../models/models");
const {Request, Response} = require("../index");

async function makeHTML(name:string, phone:string, email:string, emailTitle:string, comment:string = '', stand:string = '') {
    let html = `
    <center>
        
<table style="max-width:1024px; width: 100%;">
    <tr style="width: 100%; background: #456F8F; max-width:1024px;">
        <td colspan="3"><h1 style="font-size:28px; font-weight:500; color:#FFF; width: 100%; padding: 40px 0; text-align: center;">СТОЙКИ-ПОЛКИ</h1></td>
    </tr>
        <tr style="width: 100%; background: #F2F5F6;">
            <td><h2 style="font-size: 24px; font-weight:400; padding: 20px 30px;text-align: center;">ФОРМА ЗАЯВКИ</h2></td>
            <td colspan="3"><h2 style="font-size: 24px; font-weight:400; padding: 20px 30px;text-align: center;">${emailTitle}</h2></td>
        </tr>
        <tr style="width: 100%; ">
            <td style="padding: 15px 30px;">Имя</td>
            <td colspan="3" style="background: #F2F5F6; padding: 15px 30px;">${name}</td>
        </tr>
        <tr style="width: 100%; ">
            <td style="padding: 15px 30px;">Телефон</td>
            <td colspan="3" style="background: #F2F5F6; padding: 15px 30px;">${phone}</td>
        </tr>
        <tr style="width: 100%; ">
            <td style="padding: 15px 30px;">E-mail</td>
            <td colspan="3" style="background: #F2F5F6; padding: 15px 30px;">${email}</td>
        </tr>
        <tr style="width: 100%; ">
            <td style="padding: 15px 30px;">Комментарий</td>
            <td colspan="3" style="background: #F2F5F6; padding: 15px 30px;">${comment}</td>
        </tr>
        ${stand}
    </table>
    </center>`
    return html
}
async function makeStandHTML(stand: IStand, color: IColor, name:string, email:string, phone:string, emailTitle:string) {
    const html = `
    <tr style="width: 100%; ">
            <td style="padding: 15px 30px;">Товар</td>
            <td colspan="3" style="background: #F2F5F6; padding: 15px 30px;">
                ${stand.name}
            </td>
        </tr>
        <tr>
            <td></td>
            <td style="background: #F2F5F6; padding: 15px 30px;">Цена</td>
            <td style="background: #F2F5F6; padding: 15px 30px;">от ${stand.price}Р</td>
        </tr>
        <tr>
            <td></td>
            <td style="background: #F2F5F6; padding: 15px 30px;">Размер</td>
            <td style="background: #F2F5F6; padding: 15px 30px;">Размер ${stand.height}X${stand.width}X(${stand.deep})</td>
        </tr>
        <tr>
            <td></td>
            <td style="background: #F2F5F6; padding: 15px 30px;">Цвет</td>
            <td style="background: #F2F5F6; padding: 15px 30px;">${color.ral}</td>
        </tr>
        <tr>
            <td></td>
            <td style="background: #F2F5F6; padding: 15px 30px;" colspan="2"><img src=${process.env.NEXT_PUBLIC_IMAGE_SERVER_URL}${stand.photo[0]} alt="Товар"></td>
        </tr>
    `
    return makeHTML(name, phone, email, emailTitle,"", html)
}

async function sendMail(subject:string, html:string, attachment: IFile|'' = '') {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_LOGIN,
            pass: process.env.MAIL_PSWRD,
        },
    })
    let info = await transporter.sendMail({
        from: 'stoikipoli.ru',
        to: ["bulat.gimaletdinov.01@gmail.com", "ao797@ya.ru"],
        subject: subject,
        //text: "Hello world?",
        html: html,
        attachments: [
            {   // encoded string as an attachment
                filename: attachment ? (attachment.name) : "",
                content: attachment ? (attachment.data) : ""
            },
        ],
    });
}


class mailController {
    async mailForm(req: typeof Request, res:typeof Response, next:any) {
        try {
            let {name, phone, email, comment, emailTitle} = req.body;
            let files = req.files;
            let file;
            if (files) {
                file = files.file
                file.name = uuid.v4() + "." + file.name.split(".")[1]
                file.currentDirection = path.resolve(__dirname, '..', 'static')
                await file.mv(path.resolve(__dirname, '..', 'static', file.name))
            }
            let html = await makeHTML(name, phone, email, emailTitle, comment)
            await sendMail("Новая форма с сайта stoikipolki 🤑", html, file)
            return res.json("success");
            // БЕЗОПАСНОСТЬ!!!!!!!!!!!!!
        }catch (e:any) {
            next(ApiError.badRequest(e.message()))
        }
    }

    async mailStand(req: typeof Request, res:typeof Response, next:any) {
        try {
            let {name, phone, email, standId, color, emailTitle} = req.body;
            console.log(req.body)
            let stand = await Stand.findOne({where: {id: standId}})
            let html = await makeStandHTML(stand, color, name, email, phone, emailTitle)
            await sendMail("Новая форма с сайта stoikipolki 🤑", html)
            return res.json("success")
        }catch (e:any) {
            next(ApiError.badRequest(e.message()))
        }
    }
}

module.exports = new mailController();

