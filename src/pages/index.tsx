import styles from "../styles/index.module.scss"
import React from "react";
import CustomButton from "../atoms/CustomButton/CustomButton";
import stoiki0 from ".././commonImgs/stoikiAboutUs0.svg"
import stoiki1 from ".././commonImgs/stoikiAboutUs1.svg"
import SectionCatalog from "../molecules/sectionCatalog/sectionCatalog";
import SectionCalculation from "../molecules/sectionCalculation/sectionCalculation";
import SectionOurClients from "../molecules/sectionOurClients/sectionOurClients";
import MainContainer from "../templates/mainContainer/mainContainer";
import StandsBlock from "../organisms/StandsBlock/StandsBlock";
import {ICase, ICatalogItem, IStand} from "../types/types";
import {NextPage} from "next";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import SectionCases from "../organisms/sectionCases/sectionCases";

interface IIndexPage {
    stands: IStand[];
    catalog: ICatalogItem[];
    Cases: ICase[];
}

export const IndexPage:NextPage<IIndexPage> = ({stands, catalog, Cases}) => {

    return(
        <MainContainer>
            <div className={styles.Main}>
                <div className={styles.aboutUs}>
                    <div className={styles.infoBlock}>
                        <h1 className={styles.infoBlock__title}>Торговое оборудование от производителя</h1>
                        <span className={styles.infoBlock__description}>Компания Daimax Group производит металлические стойки, торговые стеллажи, рекламные стенды любой конфигурации. Квалифицированные сотрудники качественно и в требуемый срок оказывают услуги порошковой окраски металлических деталей по каталогу RAL, лазерной резки, гибки и сварки металла. За 9 лет работы в сфере, мы досконально изучили рынок производства металлоизделий и гарантируем качество товаров и предоставляемых услуг.</span>
                        <CustomButton><h4>ЗАКАЗАТЬ ЗВОНОК</h4></CustomButton>
                    </div>
                    <div className={styles.stoiki}>
                        <img className={styles.stoiki__first} src={stoiki0.src} alt="Стойка"/>
                        <img className={styles.stoiki__second} src={stoiki1.src} alt="Стойка"/>
                    </div>
                </div>
                <StandsBlock title="Лучшие предложения" stands={stands || []}/>
                <SectionCases Cases={Cases}/>
                <SectionCatalog/>
                <SectionCalculation/>
                <SectionOurClients/>
            </div>
        </MainContainer>
    )
}

export default IndexPage;


export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL_STANDS_CATALOG_ID}2`);
    const stands = await res.json();

    const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL_CATALOG}`)
    const catalog = await resp.json();

    const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_ALL_CASES as string);
    const Cases = await response.json();
    return {
        props: {
            stands,
            catalog,
            Cases
        },
    }
}
