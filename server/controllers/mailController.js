const nodemailer = require("nodemailer")
const uuid = require("uuid");
const path = require("path");

async function sendMail(subject,html, attachment){
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
        to: "bulat.gimaletdinov.01@gmail.com",
        subject: subject,
        //text: "Hello world?",
        html: html,
        attachments: [
            {   // encoded string as an attachment
                filename: attachment.name,
                content: attachment.data
            },
        ],
    });
}


class mailController {
    async mailForm(req,res, next){
        let {name} = req.body;
        let file = req.files.file;
        let fileName = uuid.v4()+"."+file.name.split(".")[1]
        file.name = fileName
        file.currentDirection = path.resolve(__dirname, '..', 'static')
        await file.mv(path.resolve(__dirname, '..', 'static', file.name))
        await sendMail("Новая форма с сайта stoikipolki 🤑",name, file)
        return res.json("success");
        // БЕЗОПАСНОСТЬ!!!!!!!!!!!!!
    }
    async mailStand(req,res, next){

    }
}

module.exports = new mailController();