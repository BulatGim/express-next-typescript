import React from 'react';
import MainContainer from "../../templates/mainContainer/mainContainer";
import {GetServerSideProps, NextPage} from "next";
import {ICase} from "../../types/types";
import styles from "../../styles/casePage.module.scss"
import StageNumber from "../../atoms/stageNumber/stageNumber";

interface ICasePage {
    Case: ICase
}

const CasePage: NextPage<ICasePage> = (props) => {
    let {Case} = props;
    const {
        company,
        client,
        sphere,
        region,
        stand,
        done,
        mainPhoto,
        task,
        solution,
        stage1,
        stage2,
        stage3,
        caseResult
    } = Case
    console.log(Case)

    return (
        <MainContainer>
            <div className={styles.casePage}>
                <h2 className={styles.title}>{company}</h2>
                <div className={styles.head}>
                    <div className={styles.description}>
                        <div className={styles.titles}>
                            <p className={styles.titles__item}>Клиент</p>
                            <p className={styles.titles__item}>Сфера</p>
                            <p className={styles.titles__item}>Регион</p>
                            <p className={styles.titles__item}>Тип</p>
                            <p className={styles.titles__item}>Сдано</p>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.content__item}>{client}</p>
                            <p className={styles.content__item}>{sphere}</p>
                            <p className={styles.content__item}>{region}</p>
                            <p className={styles.content__item}>{stand}</p>
                            <p className={styles.content__item}>{done}</p>
                        </div>
                    </div>
                    <img className={styles.head__mainPhoto} src={process.env.NEXT_PUBLIC_IMAGE_SERVER_URL+mainPhoto} alt={stand}/>
                </div>
                <div className={styles.caseDescription}>
                    <h3 className={styles.caseDescription__title}>ЗАДАЧА</h3>
                    <div className={styles.caseDescription__content}>
                        {task}
                    </div>
                </div>
                <div className={styles.caseDescription}>
                    <h3 className={styles.caseDescription__title}>РЕШЕНИЕ</h3>
                    <div className={styles.caseDescription__content}>
                        {solution}
                    </div>
                </div>
                {[stage1, stage2, stage3].map((item, index)=>
                    <div className={styles.stage}>
                        <div className={styles.stageTitle}>
                            <StageNumber number={index+1}/>
                            <h3 className={styles.stageTitle__stage}>{index+1} ЭТАП</h3>
                        </div>
                        <div className={styles.stage__content}>
                            {item}
                        </div>
                    </div>
                )}
                <div className={styles.caseDescription}>
                    <h3 className={styles.caseDescription__title}>РЕЗУЛЬТАТ</h3>
                    <div className={styles.caseDescription__content}>
                        {caseResult.resultText}
                    </div>
                    <img className={styles.img} src={process.env.NEXT_PUBLIC_IMAGE_SERVER_URL+caseResult.photo[0]} alt={caseResult.resultText}/>
                    <img className={styles.img} src={process.env.NEXT_PUBLIC_IMAGE_SERVER_URL+caseResult.photo[1]} alt={caseResult.resultText}/>
                </div>
            </div>
        </MainContainer>
    );
};

export default CasePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    let url = process.env.NEXT_PUBLIC_SERVER_URL_ONE_CASE as string
    const res = await fetch(url + context.query.id);
    const Case = await res.json();

    return {
        props: {
            Case,
        },
    }
}