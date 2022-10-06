import React from 'react';
import logo from "./imgs/logoDAIMAX.svg"
import styles from "../../styles/Footer.module.scss"
import CustomLink from "../../atoms/CustomLink/CustomLink";
import {factoryRoute, servicesRoute, contactsRoute} from "../../consts/routes";
import {ICatalogItem} from "../../types/types";
import {NextPage} from "next";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const Footer:NextPage = () => {
    const catalog = useSelector((state: RootState) => state.catalog.values)

    return (
        <div className={styles.Footer}>
            <div className={styles.Footer__container}>
                <div className={styles.content}>
                    <div className={styles.aboutCompany}>
                        <img className={styles.aboutCompany__logo} src={logo.src} alt="Даймакс"/>
                        <span className={styles.aboutCompany__item}>
                            <a className={styles.aboutCompany__item_link} href="tel:84954325308">+7 495 432-53-08</a>
                        </span>
                        <span className={styles.aboutCompany__item}>
                            <a className={styles.aboutCompany__item_link} href="mailto:">order+470719@evro-market.ru</a>
                        </span>
                        <span className={styles.aboutCompany__item}>141150, Московская обл., г.Лосино-Петровский, ул.Первомайская, д.1, корп.4</span>
                        <span className={styles.aboutCompany__item}>Пн-Пт: 09:00 — 20:00</span>
                    </div>
                    <div className={styles.mainContent}>
                        <div className={styles.catalog}>
                            <h4 className={styles.catalog__title}>Каталог</h4>
                            <div className={styles.catalogContainer}>
                                <div className={styles.leftContent}>
                                    {catalog?.slice(0, Math.floor(catalog.length/2)).map(item=>
                                        <CustomLink url={"/catalog/"+item.id} key={item.id}>
                                            <p className={styles.leftContent__description}>{item.name}</p>
                                        </CustomLink>
                                    )}
                                </div>
                                <div className={styles.rightContent}>
                                    {catalog?.slice(Math.floor(catalog.length/2), catalog.length).map(item=>
                                        <CustomLink url={"/catalog/"+item.id} key={item.id}>
                                            <p className={styles.rightContent__description}>{item.name}</p>
                                        </CustomLink>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={styles.linksToPages}>
                            <CustomLink url={factoryRoute}>
                                <h4 className={styles.linksToPages__item}>Производство</h4>
                            </CustomLink>
                            <CustomLink url={servicesRoute}>
                                <h4 className={styles.linksToPages__item}>Услуги</h4>
                            </CustomLink>
                            <CustomLink url={contactsRoute}>
                                <h4 className={styles.linksToPages__item}>Контакты</h4>
                            </CustomLink>
                        </div>
                    </div>
                </div>
                <p className={styles.warning}>Вся информация размещенная на сайте носит исключительно информационный характер и не является публичной офертой(ст.437 ГК РФ)</p>
            </div>
        </div>
    );
};

export default Footer;