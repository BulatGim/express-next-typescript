import React from 'react';
import MainContainer from "../templates/mainContainer/mainContainer";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import styles from "../styles/casesPage.module.scss"
import {NextPage} from "next";
import {ICase} from "../types/types";
import Case from "../molecules/case/case";

interface ICasesPage {
    Cases: ICase[];
}

const CasesPage:NextPage<ICasesPage> = ({Cases}) => {
    return (
        <MainContainer>
            <div className={styles.casesPage}>
                <h2 className={styles.casesPage__title}>ПРОЕКТЫ</h2>
                <div className={styles.content}>
                    {Cases.map(item=>
                        <Case someCase={item} key={item.id}/>
                    )}
                </div>
            </div>
        </MainContainer>
    );
};

export default CasesPage;

export async function getServerSideProps() {
    let url = process.env.NEXT_PUBLIC_SERVER_URL_ALL_CASES as string
    const res = await fetch(url);
    const Cases = await res.json();

    return {
        props: {
            Cases,
        },
    }
}