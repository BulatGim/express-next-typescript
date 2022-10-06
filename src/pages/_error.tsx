import {NextPage, NextPageContext} from "next";
import CustomButton from "../atoms/CustomButton/CustomButton";
import styles from "../styles/ErrorPage.module.scss"
import error0 from "../commonImgs/Error0.png"
import error1 from "../commonImgs/Error1.png"
import error2 from "../commonImgs/Error2.png"
import error3 from "../commonImgs/Error3.png"
import CustomLink from "../atoms/CustomLink/CustomLink";
import React from "react";

interface IErrorProps {
    statusCode?: any
}

const Error:NextPage<IErrorProps> = ({statusCode}) => {
    return (
        <div className={styles.ErrorPage}>
            <img className={styles.ErrorPage__image + " " + styles.ErrorPage__image_boxes} src={error0.src} alt="Фото"/>
            <img className={styles.ErrorPage__image + " " + styles.ErrorPage__image_stand} src={error1.src} alt="Фото"/>
            <img className={styles.ErrorPage__image + " " + styles.ErrorPage__image_error} src={error2.src} alt="Фото"/>
            <div className={styles.content}>
                <img className={styles.logo} src={error3.src} alt="ЛОГО"/>
                <h1 className={styles.content__title}>Страница не найдена</h1>
                <p className={styles.content__text}>Похоже, нужная вам страница потерялась.</p>
                <p>Мы обязательно разберемся с этим недоразумением!</p>
                <p className={styles.content__text}>А пока перейдите в каталог или вернитесь на главную</p>
                <div className={styles.btnsPanel}>
                    <CustomLink url={"/"}>
                        <CustomButton className={styles.btnsPanel__item}>
                            <h4>Перейти в каталог</h4>
                        </CustomButton>
                    </CustomLink>
                    <CustomLink url={"/"}>
                        <CustomButton color={"white"} className={styles.btnsPanel__item} >
                            <h4>Вернуться на главную</h4>
                        </CustomButton>
                    </CustomLink>
                </div>
            </div>
        </div>
    );
};
Error.getInitialProps = ({res, err}: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {statusCode};
};
export default Error;