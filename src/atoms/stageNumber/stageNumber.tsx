import React from 'react';
import {NextPage} from "next";
import styles from "../../styles/stageNumber.module.scss"

interface IStageNumber {
    number: number;
}

const StageNumber:NextPage<IStageNumber> = ({number}) => {
    return (
        <h2 className={styles.stageNumber}>{number}</h2>
    );
};

export default StageNumber;