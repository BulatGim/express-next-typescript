import React from 'react';
import {NextPage} from "next";
import {IStand} from "../../types/types";
import CustomLink from "../../atoms/CustomLink/CustomLink";
import styles from "../../styles/StandCard.module.scss"
import standImg from "./imgs/stand.svg"

interface IStandCardProps {
    stand: IStand
}

const StandCard:NextPage<IStandCardProps> = ({stand}) => {
    return (
        <CustomLink url={"/stand/"+stand.id}>
            <div className={styles.StandCard}>
                <img className={styles.image} src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER_URL+stand.photo[0]}`} alt={stand.name}/>
                <h4 className={styles.title}>{stand.name}</h4>
                <p className={styles.sizes}>{stand.width} X {stand.height}</p> {/*//ширина * высоту * глубину?*/}
                <div className={styles.panel}>
                    <h3 className={styles.panel__price}>{stand.price} ₽</h3>
                    <button className={styles.panel__btn}>ПОДРОБНЕЕ</button>
                </div>
            </div>
        </CustomLink>
    );
};

export default StandCard;

/*
{id, name, characteristics, createdAt, deep, description, height, photo, price, updatedAt, width, catalogId}*/
