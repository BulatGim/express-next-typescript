import React from 'react';
import magnitLogo from "./imgs/magnit.svg";
import metroLogo from "./imgs/metro.svg";
import x5Logo from "./imgs/x5.svg";
import billaLogo from "./imgs/billa.svg";
import styles from "../../styles/sectionOurClients.module.scss"


const SectionOurClients = () => {
    return (
        <div className={styles.sectionOurClients}>
            <h3 className={styles.sectionOurClients__title}>Наши клиенты</h3>
            <div className={styles.container}>
                <img className={styles.container__item} src={magnitLogo.src} alt="Магнит"/>
                <img className={styles.container__item} src={metroLogo.src} alt="Metro"/>
                <img className={styles.container__item} src={x5Logo.src} alt="X5 group"/>
                <img className={styles.container__item} src={billaLogo.src} alt="BILLA"/>
            </div>
        </div>
    );
};

export default SectionOurClients;