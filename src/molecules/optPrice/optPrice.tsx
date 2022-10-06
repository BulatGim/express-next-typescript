import React, {useCallback, useState} from 'react';
import FormInput from "../../atoms/formInput/formInput";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import {NextPage} from "next";
import styles from "../../styles/optPrice.module.scss"
import {IFormValuesForm} from "../../types/types";
import {useHandleChange} from "../../hooks/useHandleChange";
import {useUserErrors} from "../../hooks/useUserErrors";
import {useValidations} from "../../hooks/useValidations";
import axios from "axios";
import {setModal} from "../../layers/serviceLayer";
import {useDispatch} from "react-redux";
import SuccessForm from "../successForm/successForm";

const OptPrice:NextPage = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState<IFormValuesForm>({phone: "+7(___)___-__-__"});
    const [userError, setUserError] = useState([])
    const [, updateState] = useState<any>();
    const forceUpdate = useCallback(() => updateState({}), []);

    const {handleChange, handleBigChange} = useHandleChange(setValues, values)

    const {hideUserError, showUserError} = useUserErrors(userError, setUserError)

    const {phoneInputMask, nameValidation, emailValidation} = useValidations(showUserError, hideUserError, values, handleBigChange)

    async function send() {
        emailValidation();
        nameValidation();
        forceUpdate();
        if (userError.length<1){
            try {
                let url = process.env.NEXT_PUBLIC_SERVER_URL_MAIL_FORM as string
                const {data} = await axios.post(url, {
                    name: values.name || "",
                    email: values.email || "",
                    phone: values.phone || "",
                    emailTitle: 'Запрос оптовой цены'
                })
                setValues({phone: "+7(___)___-__-__"})
                dispatch(setModal(<SuccessForm/>))
            }
            catch (e) {
                alert(e)
            }
        }
    }

    return (
        <div className={styles.optPrice}>
            <div className={styles.optPrice__head}>
                <h3 className={styles.title}>Запросить оптовую цену</h3>
                <p className={styles.subtitle}>Оставьте контактные данные</p>
            </div>
            <div className={styles.form}>
                <FormInput value={values.name || ""} name={"name"} setter={handleChange} errors={userError} placeholder={"Имя"}/>
                <FormInput value={values.phone || ""} name={"phone"} setter={handleChange} errors={userError} placeholder={"+7 (___)___-__-__"} validation={phoneInputMask}/>
                <FormInput value={values.email || ""} name={"email"} setter={handleChange} errors={userError} placeholder={"Email"}/>
                <CustomButton callBack={()=>send()} className={styles.btnSubmit}>
                    <h4>Отправить</h4>
                </CustomButton>
            </div>
            <div className={styles.description}>
                <span className={styles.description__item}>Нажимая на кнопку, Вы даёте согласие на обработку ваших персональных данных в соответствии с политикой конфиденциальности</span>
                <span className={styles.description__item}>Данные не подлежат распространению в соответствии с ФЗ-152</span>
            </div>
        </div>
    );
};

export default OptPrice;