import React from 'react';
import {NextPage} from "next";
import styles from "../../styles/CatalogCard.module.scss"
import CustomLink from "../CustomLink/CustomLink";

interface ICatalogCardProps {
    img: string;
    id: number;
    name: string;
}

const CatalogCard: NextPage<ICatalogCardProps> = ({img, name, id}) => {
    return (
        <CustomLink url={"/catalog/" + id}>
            <div className={styles.catalogCard}>
                <img className={styles.catalogCard__image} src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER_URL+img}`} alt={name}/>
                <span className={styles.catalogCard__description}>{name}</span>
            </div>
        </CustomLink>
    );
};

export default CatalogCard;