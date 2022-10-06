import React, {useState} from 'react';
import styles from "../../styles/DesktopHeader.module.scss";
import Image from "next/image";
import Logo from "./imgs/Logo.svg";
import chooseIcon from "./imgs/selectIcon.svg";
import CustomLink from "../../atoms/CustomLink/CustomLink";
import Loupe from "./imgs/Loupe.svg";
import CatalogCard from "../../atoms/CatalogCard/CatalogCard";
import {servicesRoute, factoryRoute, contactsRoute, casesRoute} from "../../consts/routes";
import FormInput from "../../atoms/formInput/formInput";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import closeIcon from "./imgs/closeIcon.svg"
import {useHandleChange} from "../../hooks/useHandleChange";
import {useRouter} from "next/router";
import {NextPage} from "next";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import Callback from "../callback/callback";
import {setModal} from "../../layers/serviceLayer";

const DesktopHeader:NextPage = () => {

    const dispatch = useDispatch();

    const catalog = useSelector((state: RootState) => state.catalog.values)

    let router = useRouter()

    type SearchType = {
        search?: string
    }

    const [isCatalogActive, setIsCatalogActive] = useState<boolean>(false)

    const [isSearchActive, setIsSearchActive] = useState<boolean>(false)

    const [values, setValues] = useState<SearchType>({});

    const {handleChange} = useHandleChange(setValues, values)

    const search = (searchString:string) => {
        router.push(`/search/${searchString}`)
    }

    return (
        <div>
            <div className={styles.desktopHeader}>
                <div className={styles.desktopHeader__container}>
                    <CustomLink url={"/"}>
                        <div>
                            <Image src={Logo} alt="Логотип"/>
                        </div>
                    </CustomLink>
                    <div className={styles.links}>
                        <div className={styles.catalogChoose} onClick={() => {
                            setIsCatalogActive(prevState => !prevState)
                        }}>
                            <span className={styles.catalogChoose__description}>КАТАЛОГ</span>
                            <Image
                                className={styles.catalogChoose__choose + " " + (isCatalogActive ? (styles.catalogChoose__choose_activeCatalog) : (styles.catalogChoose__choose_inActiveCatalog))}
                                src={chooseIcon} alt="Выбор категории"/>
                        </div>
                        <CustomLink url={factoryRoute}>
                            <span className={styles.links__item}>ПРОИЗВОДСТВО</span>
                        </CustomLink>
                        <CustomLink url={servicesRoute}>
                            <span className={styles.links__item}>УСЛУГИ</span>
                        </CustomLink>
                        <CustomLink url={casesRoute}>
                            <span className={styles.links__item}>КЕЙСЫ</span>
                        </CustomLink>
                        <CustomLink url={contactsRoute}>
                            <span className={styles.links__item}>КОНТАКТЫ</span>
                        </CustomLink>
                    </div>
                    <div className={styles.panel}>
                        <div className={styles.search} onClick={()=>setIsSearchActive(true)}>
                            <Image className={styles.search__icon} src={Loupe} alt="Поиск"/>
                            <p className={styles.search__description}>Поиск</p>
                        </div>
                        <div className={styles.callBack}>
                            <a href="tel:84951822582" className={styles.callBack__phone}>
                                <p className="description">+7 (495) 182 2582</p>
                            </a>
                            <p className={styles.callBack__link} onClick={()=>dispatch(setModal(<Callback/>))}>Заказать звонок</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={styles.Catalog + " " + (isCatalogActive ? styles.Catalog_opened : styles.Catalog_closed)}>
                <div className={styles.Catalog__container}>
                    {catalog?.map(item =>
                        <CatalogCard img={item.photo} name={item.name} id={item.id} key={item.id}/>
                    )}
                </div>
            </div>
            <div className={styles.Search+" "+(isSearchActive? styles.Search_opened: styles.Search_closed)}>
                <div className={styles.Search__container}>
                    <div className={styles.formInputContainer}>
                        <FormInput name={"search"} value={values.search || ""} placeholder={"Поиск"} setter={handleChange} width={"100%"} marginTop={"5px"}/>
                    </div>
                    <CustomButton callBack={()=> {
                        search(values.search || "");
                        setIsSearchActive(false)
                    }}>
                        <h4>НАЙТИ</h4>
                    </CustomButton>
                    <img className={styles.closeImg} src={closeIcon.src} alt="Закрыть" onClick={()=>setIsSearchActive(false)}/>
                </div>
            </div>
        </div>
    );
};

export default DesktopHeader;