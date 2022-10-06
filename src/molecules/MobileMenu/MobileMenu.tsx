import React, {useState} from 'react';
import Image from "next/image";
import {useRouter} from "next/router";
import styles from "../../styles/MobileMenu.module.scss"
import inActiveCatalog from "./imgs/inActiveCatalog.svg"
import activeCatalog from "./imgs/activeCatalog.svg"
import inActiveProduction from "./imgs/inActiveProductionsvg.svg"
import activeProduction from "./imgs/activeProductionsvg.svg"
import inActiveContacts from "./imgs/inActiveContacts.svg"
import activeContacts from "./imgs/activeContacts.svg"
import inActiveSearch from "./imgs/inActiveSearch.svg"
import activeSearch from "./imgs/activeSearch.svg"
import inActiveServices from "./imgs/inActiveServices.svg"
import activeServices from "./imgs/activeServices.svg"
import CustomLink from "../../atoms/CustomLink/CustomLink";
import close from "./imgs/close.svg"
import Logo from "../DesktopHeader/imgs/Logo.svg"
import CustomButton from "../../atoms/CustomButton/CustomButton";
import {factoryRoute, servicesRoute, contactsRoute, casesRoute} from "../../consts/routes";
import FormInput from "../../atoms/formInput/formInput";
import {useHandleChange} from "../../hooks/useHandleChange";
import {ICatalogItem, IFormValuesForm} from "../../types/types";
import {NextPage} from "next";
import {useSelector} from "react-redux";
import {RootState} from "../../store";


const MobileMenu:NextPage = () => {
    const catalog = useSelector((state: RootState) => state.catalog.values)
    const router = useRouter()
    const [values, setValues] = useState<IFormValuesForm>({});
    const {handleChange} = useHandleChange(setValues, values)
    const [menuItemActive, setMenuItemActive] = useState<null | string>(null)
    const [isCatalogActive, setIsCatalogActive] = useState<boolean>(false)
    const [isSearchActive, setIsSearchActive] = useState<boolean>(false)
    const mobileMenu = [
        {
            id: 1,
            name: "Каталог",
            inactiveImage: inActiveCatalog,
            activeImage: activeCatalog,
            url: false,
            activeState: isCatalogActive,
            setActiveState: setIsCatalogActive,
        }, {
            id: 2,
            name: "Производство",
            inactiveImage: inActiveProduction,
            activeImage: activeProduction,
            url: factoryRoute,
            activeState: false,
            setActiveState: false,
        }, {
            id: 3,
            name: "Услуги",
            inactiveImage: inActiveServices,
            activeImage: activeServices,
            url: servicesRoute,
            activeState: false,
            setActiveState: false,
        }, {
            id: 4,
            name: "Кейсы",
            inactiveImage: inActiveServices,
            activeImage: activeServices,
            url: casesRoute,
            activeState: false,
            setActiveState: false,
        },{
            id: 5,
            name: "Контакты",
            inactiveImage: inActiveContacts,
            activeImage: activeContacts,
            url: contactsRoute,
            activeState: false,
            setActiveState: false,
        }, {
            id: 6,
            name: "Поиск",
            inactiveImage: inActiveSearch,
            activeImage: activeSearch,
            url: false,
            activeState: isSearchActive,
            setActiveState: setIsSearchActive,
        },
    ]

    const search = (searchString:string) => {
        router.push(`/search/${searchString}`)
    }

    return (
        <div className={styles.mobileMenu}>
            <div
                className={styles.mobileCatalog + " " + (isCatalogActive ? (styles.mobileCatalog_opened) : (styles.mobileCatalog_closed))}>
                <div className={styles.mobileCatalog__container}>
                    <div className={styles.header}>
                        <CustomLink url={"/"}>
                            <Image width={150} src={Logo} alt="Логотип"/>
                        </CustomLink>
                        <div className={styles.panel}>
                            <div className={styles.contacts}>
                                <a className={styles.contacts__phone} href="tel:84951822582">
                                    <span>+7 (495) 182 2582</span>
                                </a>
                                <span className={styles.contacts__callback}>Заказать звонок</span>
                            </div>
                            <Image className={styles.panel__close} src={close} alt="Закрыть каталог" onClick={()=>setIsCatalogActive(false)}/>
                        </div>
                    </div>
                    <div className={styles.catalogContent}>
                        {catalog?.map(item =>
                            <CustomLink url={"/catalog/" + item.id} key={item.id}>
                                <div className={styles.catalogContent__item}>
                                    <p>{item.name}</p>
                                </div>
                            </CustomLink>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.searchContainer + " " + (isSearchActive ? (styles.searchContainer_opened) : (styles.searchContainer_closed))}>
                <div className={styles.search}>
                    <FormInput width={"100%"} placeholder="Поиск" value={values.search || ""} name={"search"} setter={handleChange}/>
                    <div className={styles.panel}>
                        <CustomButton className={styles.searchBtn} callBack={()=>search(values.search || "")}><h4>НАЙТИ</h4></CustomButton>
                        <img className={styles.panel__close} src={close.src} onClick={()=> setIsSearchActive(false)} alt="Закрыть"/>
                    </div>
                </div>
            </div>

            <div className={styles.mobileMenuContainer}>
                <div className={styles.content}>
                    {mobileMenu.map((item, index) =>
                        !!item.setActiveState ? (
                                <div className={styles.content__item} key={item.id}
                                     onClick={() => {
                                         // @ts-ignore
                                         item.setActiveState(prevState => !prevState)
                                     }}>
                                    <img className={styles.image}
                                         src={item.activeState ? (item.activeImage.src) : (item.inactiveImage.src)} alt="Меню"/>
                                    <span className={styles.description}>{item.name}</span>
                                    {index === 4 ? (
                                        ""
                                    ) : (
                                        <div className={styles.line}></div>
                                    )}
                                </div>

                        ) : (
                            <CustomLink url={item.url as string} key={item.id}>
                                <div className={styles.content__item}>
                                    <img className={styles.image}
                                         src={item.url === router.pathname ? (item.activeImage.src) : (item.inactiveImage.src)} alt="Меню"/>
                                    <span className={styles.description}>{item.name}</span>
                                    <div className={styles.line}></div>
                                </div>
                            </CustomLink>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
