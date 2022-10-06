import React from 'react';
import CustomButton from "../../atoms/CustomButton/CustomButton";
import CustomLink from "../../atoms/CustomLink/CustomLink";
import devImg from "../../commonImgs/devImgStandPage.svg"
import Case from "../../molecules/case/case";
import styles from "../../styles/sectionCases.module.scss"
import {ICase} from "../../types/types";
import {NextPage} from "next";

interface ISectionCasesProps {
    Cases: ICase[]
}

const SectionCases:NextPage<ISectionCasesProps> = ({Cases}) => {

    return (
        <div className={styles.SectionCases}>
            <div className={styles.title}>
                <h3 className={styles.title__item}>Наши проекты</h3>
                <CustomLink url="/cases">
                    <CustomButton className={styles.title__button}>
                        <h4>ВСЕ ПРОЕКТЫ</h4>
                    </CustomButton>
                </CustomLink>
            </div>
            <div className={styles.casesContainer}>
                {Cases?.slice(0,3)?.map(item=>
                    <Case someCase={item} key={item.id}/>
                )}
            </div>
        </div>
    );
};

export default SectionCases;