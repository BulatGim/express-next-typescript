import React, {useCallback, useState} from 'react';
import {NextPage} from "next";
import FormInput from "../../atoms/formInput/formInput";
import {IFormValuesForm} from "../../types/types";
import {useHandleChange} from "../../hooks/useHandleChange";
import {useUserErrors} from "../../hooks/useUserErrors";
import {useValidations} from "../../hooks/useValidations";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import styles from "../../styles/callback.module.scss";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setModal} from "../../layers/serviceLayer";
import SuccessForm from "../successForm/successForm";


const Callback:NextPage = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState<IFormValuesForm>({phone: "+7(___)___-__-__"});
    const [userError, setUserError] = useState([])
    const [, updateState] = useState<any>();
    const forceUpdate = useCallback(() => updateState({}), []);

    const {handleChange, handleBigChange} = useHandleChange(setValues, values)

    const {hideUserError, showUserError} = useUserErrors(userError, setUserError)

    const {phoneInputMask, nameValidation, emailValidation} = useValidations(showUserError, hideUserError, values, handleBigChange)
    
    async function send() {
        nameValidation();
        forceUpdate();
        if (userError.length<1){
            try {
                let url = process.env.NEXT_PUBLIC_SERVER_URL_MAIL_FORM as string
                let {data} = await axios.post(url, {
                    name: values.name || "",
                    phone: values.phone || ""
                })
                setValues({phone: "+7(___)___-__-__"})
                dispatch(setModal(<SuccessForm/>))
            }catch (e) {
                alert(e)
            }
        }
    }
    return (
        <div className={styles.callback}>
            <h3 className={styles.callback__title}>Оставьте контактные данные</h3>
            <p className={styles.callback__subtitle}>для обратного звонка</p>
            <div className={styles.content}>
                <FormInput className={styles.content__formInput} value={values.name||""} setter={handleChange} name={"name"} placeholder={"Имя"} errors={userError}/>
                <FormInput className={styles.content__formInput} value={values.phone||""} setter={handleChange} name={"phone"} placeholder={"Телефон"} errors={userError} validation={phoneInputMask}/>
                <CustomButton className={styles.content__submitBtn} callBack={send}>
                    <h4>ОТПРАВИТЬ</h4>
                </CustomButton>
                <div className={styles.description}>
                    <span className={styles.description__item}>Нажимая на кнопку, Вы даёте согласие на обработку ваших персональных данных в соответствии с политикой конфиденциальности</span>
                    <span className={styles.description__item}>Данные не подлежат распространению в соответствии с ФЗ-152</span>
                </div>
            </div>
        </div>
    );
};

export default Callback;