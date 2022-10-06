import {NextPage} from "next";
import CustomLink from "../../atoms/CustomLink/CustomLink";
import styles from "../../styles/case.module.scss"
import {ICase} from "../../types/types";
import React from "react"


interface ICaseProps {
    someCase: ICase
}

const Case:NextPage<ICaseProps> = (props) => {
    const {someCase} = props;
    return (
        <div className={styles.Case} style={{background: `url(${process.env.NEXT_PUBLIC_IMAGE_SERVER_URL + someCase.mainPhoto}) center/cover no-repeat`}}>
            <div className={styles.caseContainer}>
                <h3 className={styles.caseContainer__title}>{someCase.company}</h3>
                <span className={styles.caseContainer__description}>{someCase.stand}</span>
                <CustomLink url={`/cases/${someCase.id}`}>
                    <span className={styles.caseContainer__link}>Подробнее</span>
                </CustomLink>
            </div>
        </div>
    );
};

export default Case;