import React from 'react';
import {IStand} from "../../types/types";
import SliderSomeItems from "../SliderSomeItems/SliderSomeItems";
import {NextPage} from "next";
import StandCard from "../../molecules/StandCard/StandCard";
import styles from "../../styles/standBlock.module.scss"

interface IStandsBlockProps {
    title:string;
    stands: IStand[];
}


const StandsBlock:NextPage<IStandsBlockProps> = ({title, stands}) => {

    return (
        <div className={styles.standsBlock}>
            <h3 className={styles.standsBlock__title}>{title}</h3>
            <SliderSomeItems isCrumbs={true} slidesAmount={4} arrayItems={stands.map(item=>
                <StandCard stand={item}/>
            )} />
        </div>
    );
};

export default StandsBlock;