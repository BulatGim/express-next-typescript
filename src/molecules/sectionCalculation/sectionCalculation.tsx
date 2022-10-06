import {useState, useCallback, ChangeEvent, FormEvent} from 'react';
import FormInput from "../../atoms/formInput/formInput";
import uploadImg from "./imgs/uploadImg.svg"
import CustomButton from "../../atoms/CustomButton/CustomButton";
import {IFormValuesForm} from "../../types/types";
import decorationLeft from "./imgs/decorationLeft.svg"
import decorationRight from "./imgs/decorationRight.svg"
import React from "react"
import styles from "../../styles/sectionCalculation.module.scss"
import {useHandleChange} from "../../hooks/useHandleChange";
import {useUserErrors} from "../../hooks/useUserErrors";
import {useValidations} from "../../hooks/useValidations";
import axios from "axios";
import {setModal} from "../../layers/serviceLayer";
import SuccessForm from "../successForm/successForm";
import {useDispatch} from "react-redux";

const SectionCalculation = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState<IFormValuesForm>({phone: "+7(___)___-__-__"});
    const [file, setFile] = useState()
    const [userError, setUserError] = useState([])
    const [, updateState] = useState<any>();
    const forceUpdate = useCallback(() => updateState({}), []);

    const {handleChange, handleBigChange} = useHandleChange(setValues, values)

    const {hideUserError, showUserError} = useUserErrors(userError, setUserError)

    const {
        phoneInputMask,
        nameValidation,
        emailValidation
    } = useValidations(showUserError, hideUserError, values, handleBigChange)
    const handleOnChange = (e: any) => {
        setFile(e.target.files[0]);
    };

    async function send(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        emailValidation();
        nameValidation();
        forceUpdate();
        if (userError.length < 1) {
            try {
                let url = process.env.NEXT_PUBLIC_SERVER_URL_MAIL_FORM as string
                const formData = new FormData();
                formData.append("file", file || uploadImg);
                formData.append("name", values.name || "Без имени");
                formData.append("phone", values.phone || "Без телефона");
                formData.append("email", values.email || "Без email");
                formData.append("comment", values.comment || "Без комментария",);
                formData.append("emailTitle",  "Расчет стоимости индивидуального заказа",);
                let {data} = await axios.post(url, formData)
                setValues({phone: "+7(___)___-__-__"})
                dispatch(setModal(<SuccessForm/>))
            } catch (e) {
                alert(e)
            }
        }
    }

    return (
        <div className={styles.sectionCalculation}>
            <div className={styles.decoration}>
                <img className={styles.decoration__item + " " + styles.decoration__item_left} src={decorationLeft.src}
                     alt="Декорация"/>
                <img className={styles.decoration__item + " " + styles.decoration__item_right} src={decorationRight.src}
                     alt="Декорация"/>
            </div>
            <div className={styles.content}>
                <div className={styles.description}>
                    <h2 className={styles.description__title}>Заказать расчет стоимости оборудования</h2>
                    <p className={styles.description__item}>Мы не просто продаем, а вникаем в суть проекта для поиска
                        наилучшего решения в рамках Ваших критериев и бюджета.</p>
                </div>
                <div className={styles.form}>
                    <form onSubmit={(e)=>send(e)}>
                        <FormInput value={values.name || ""} name={"name"} setter={handleChange} errors={userError}
                                   placeholder={"Имя"}/>
                        <FormInput value={values.phone || ""} name={"phone"} setter={handleChange} errors={userError}
                                   placeholder={"+7 (___)___-__-__"} validation={phoneInputMask}/>
                        <FormInput value={values.email || ""} name={"email"} setter={handleChange} errors={userError}
                                   placeholder={"Email"}/>
                        <FormInput value={values.comment || ""} name={"comment"} setter={handleChange}
                                   errors={userError} placeholder={"Комментарий"}/>
                        <div className={styles.attachment}>
                            <label className={styles.attachment__label} htmlFor="File">
                                <div className={styles.attachmentIcon}>
                                    <img className={styles.attachmentIcon__content} src={uploadImg.src}
                                         alt="Загрузить файл"/>
                                </div>
                                <div className={styles.attachmentDescription}>
                                    <span className={styles.attachmentDescription__content}>Прикрепить файл</span>
                                </div>
                                <input onChange={(e) => handleOnChange(e)} className={styles.attachment__inputFile}
                                       id="File" type="file"/>
                            </label>
                            <span className={styles.attachment__description}>До 20 файлов формата: jpg, png, heic, pdf, ai, cdr, doc, xls, docx, xlsx. Размер файла не более 10MB</span>
                        </div>
                        <CustomButton type={"submit"} className={styles.btnSubmit}>
                            <h4>ОТПРАВИТЬ</h4>
                        </CustomButton>
                        <div className={styles.form__warning}>
                            <span>Нажимая на кнопку, Вы даёте согласие на обработку ваших персональных данных в соответствии с политикой конфиденциальности</span>
                            <span>Данные не подлежат распространению в соответствии с ФЗ-152</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SectionCalculation;