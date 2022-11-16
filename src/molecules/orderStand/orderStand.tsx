import React, {useCallback, useState} from 'react';
import {IFormValuesForm, IStand} from "../../types/types";
import {NextPage} from "next";
import Image from "next/dist/client/future/image";
import {useHandleChange} from "../../hooks/useHandleChange";
import {useUserErrors} from "../../hooks/useUserErrors";
import {useValidations} from "../../hooks/useValidations";
import FormInput from "../../atoms/formInput/formInput";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import styles from "../../styles/orderStand.module.scss"
import axios from "axios";
import {setModal} from "../../layers/serviceLayer";
import {useDispatch, useSelector} from "react-redux";
import SuccessForm from "../successForm/successForm";
import {RootState} from "../../store";

interface IOrderStandProps {

}

const OrderStand:NextPage<IOrderStandProps> = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState<IFormValuesForm>({phone: "+7(___)___-__-__"});
    const [userError, setUserError] = useState([])
    const [, updateState] = useState<any>();
    const forceUpdate = useCallback(() => updateState({}), []);

    const {handleChange, handleBigChange} = useHandleChange(setValues, values)

    const {hideUserError, showUserError} = useUserErrors(userError, setUserError)

    const {phoneInputMask, nameValidation, emailValidation} = useValidations(showUserError, hideUserError, values, handleBigChange)

    const {activeColor, stand} = useSelector((state:RootState)=>state.mail.values)

    async function send() {
        emailValidation();
        nameValidation();
        forceUpdate();
        if (userError.length<1){
            try {
                let url = process.env.NEXT_PUBLIC_SERVER_URL_MAIL_STAND as string;
                let {data} = await axios.post(url, {
                    standId: stand.id,
                    phone: values.phone || "",
                    name: values.name || "",
                    email: values.email ||"",
                    color: activeColor,
                    emailTitle: 'Заказ торгового оборудования'
                })
                setValues({phone: "+7(___)___-__-__"})
                dispatch(setModal(<SuccessForm/>))
            }catch (e) {
                alert(e)
            }
        }
    }
    return (
        <div className={styles.orderStand}>
            <div className={styles.head}>
                <h3 className={styles.head__title}>Оставьте контактные данные</h3>
                <p className={styles.head__subtitle}>для заказа</p>
            </div>
            {stand ?(
                <div className={styles.card}>
                    <img
                        className={styles.card__img}
                        src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER_URL+stand.photo[0]}`}
                        alt="Фото стеллажа"
                    />
                    <div className={styles.characteristics}>
                        <h4 className={styles.characteristics__name}>{stand.name}</h4>
                        <div className={styles.price}>
                            <span>от</span>
                            <h4 className={styles.price__item}>{stand.price}</h4>
                        </div>
                        <span className={styles.sizes}>Размер: {stand.height}x{stand.width}x({stand.deep})</span>
                        <div className={styles.color}>
                            <span className={styles.color__title}>Цвет:</span>
                            <div className={styles.color__activeColor} style={{backgroundColor: activeColor.color || ""}}>

                            </div>
                        </div>
                    </div>
                </div>
            ):""}
            <div>
                <FormInput value={values.name || ""} name={"name"} setter={handleChange} errors={userError} placeholder={"Имя"}/>
                <FormInput value={values.phone || ""} name={"phone"} setter={handleChange} errors={userError} placeholder={"+7 (___)___-__-__"} validation={phoneInputMask}/>
                <FormInput value={values.email || ""} name={"email"} setter={handleChange} errors={userError} placeholder={"Email"}/>
                <CustomButton className={styles.submitBtn} callBack={()=>send()}>
                    <h4>Отправить</h4>
                </CustomButton>
                <div className={styles.description}>
                    <span className={styles.description__item}>Нажимая на кнопку, Вы даёте согласие на обработку ваших персональных данных в соответствии с политикой конфиденциальности</span>
                    <span className={styles.description__item}>Данные не подлежат распространению в соответствии с ФЗ-152</span>
                </div>
            </div>

        </div>
    );
};

export default OrderStand;