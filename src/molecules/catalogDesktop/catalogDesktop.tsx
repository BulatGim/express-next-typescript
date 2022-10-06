import React from 'react';
import styles from "../../styles/catalogDesktop.module.scss"
import {useRouter} from "next/router";
import CustomLink from "../../atoms/CustomLink/CustomLink";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const CatalogDesktop = () => {

    const router = useRouter()
    const catalog = useSelector((state: RootState) => state.catalog.values)

    return (
        <div className={styles.catalogDesktop}>
            {catalog.map(item=>
                <CustomLink url={"/catalog/"+item.id} key={item.id}>
                    <div className={router.query.id === String(item.id)? (styles.catalogDesktop__item_active + " " + styles.catalogDesktop__item) : styles.catalogDesktop__item} >
                        <h4 className={styles.catalogItemName}>{item.name}</h4>
                    </div>
                </CustomLink>
            )}
        </div>
    );
};

export default CatalogDesktop;