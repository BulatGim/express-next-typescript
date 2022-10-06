import React from 'react';
import metalProducts from "./imgs/metalProducts.svg"
import styles from "../../styles/sectionCatalog.module.scss"
import CustomLink from "../../atoms/CustomLink/CustomLink";
import {NextPage} from "next";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const SectionCatalog:NextPage = () => {
    const catalog = useSelector((state: RootState) => state.catalog.values)
    return (
        <div className={styles.sectionCatalog}>
            <h3 className={styles.sectionCatalog__title}>Наша продукция</h3>
            <div className={styles.catalogContainer}>
                {catalog?.map(item =>
                    item.name === "корпусные изделия из листового металла" ? ("") : (
                        <CustomLink url={"/catalog/"+item.id} key={item.id}>
                            <div className={styles.catalogItem} >
                                <img className={styles.catalogItem__image} src={process.env.NEXT_PUBLIC_IMAGE_SERVER_URL+item.photo} alt={item.name}/>
                                <h4 className={styles.catalogItem__title}>{item.name}</h4>
                            </div>
                        </CustomLink>
                    )
                )}
            </div>
            <div className={styles.metalProducts}>
                <h3 className={styles.metalProducts__title}>корпусные изделия из листового металла</h3>
                <p className={styles.metalProducts__description}>Компания Daimax Group производит корпусные изделия любой конфигурации. За 9 лет работы в сфере, мы досконально изучили рынок производства металлоизделий и гарантируем качество товаров и предоставляемых услуг.</p>
                <div className={styles.content}>
                    <ul>
                        <li className={styles.content__item}>Забор “Жалюзи”</li>
                        <li className={styles.content__item}>Декоративные панно из металла</li>
                        <li className={styles.content__item}>Ширмы из металла</li>
                        <li className={styles.content__item}>Обрамление лифтовых порталов</li>
                        <li className={styles.content__item}>Металлокассеты открытого типа</li>
                        <li className={styles.content__item}>Корзины для кондиционера</li>
                        <li className={styles.content__item}>Подсистема (П-, Z-, С- профили)</li>
                        <li className={styles.content__item}>Корпуса светильников Армстронг</li>
                    </ul>
                    <img className={styles.content__image} src={metalProducts.src} alt="корпусные изделия из листового металла"/>
                </div>
            </div>
        </div>
    );
};

export default SectionCatalog;