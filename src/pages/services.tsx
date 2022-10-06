import React from 'react';
import MainContainer from "../templates/mainContainer/mainContainer";
import serviceImg from "../commonImgs/serviceImg.svg"
import styles from "../styles/servicesPage.module.scss"
import SectionCalculation from "../molecules/sectionCalculation/sectionCalculation";

const Services = () => {
    const services = [
        {
            id:1,
            img:serviceImg,
            name: "Лазерная резка труб",
        },{
            id:2,
            img:serviceImg,
            name: "Гибка листового металла",
        },{
            id:3,
            img:serviceImg,
            name: "Запрессовка / приварка метизов",
        },{
            id:4,
            img:serviceImg,
            name: "Контактная сварка",
        },{
            id:5,
            img:serviceImg,
            name: "Лазерная резка металлов и сплавов",
        },{
            id:6,
            img:serviceImg,
            name: "Производство корпусных изделий",
        },{
            id:7,
            img:serviceImg,
            name: "Изделия из проволоки",
        },{
            id:8,
            img:serviceImg,
            name: "Порошковая окраска",
        },
    ]
    return (
        <MainContainer>
            <div className={styles.services}>
                <h2 className={styles.services__title}>Услуги</h2>
                <p className={styles.services__description}>Наша компания также выполняет дополнительные виды услуг</p>
                <div className={styles.servicesContainer}>
                    {services.map(item=>
                        <div className={styles.service} key={item.id}>
                            <img className={styles.service__image} src={item.img.src} alt="Фото услуги"/>
                            <h4 className={styles.service__name}>{item.name}</h4>
                        </div>
                    )}
                </div>
            </div>
            <SectionCalculation/>
        </MainContainer>
    );
};

export default Services;