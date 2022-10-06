import React from 'react';
import MainContainer from "../templates/mainContainer/mainContainer";
import factoryImg from "../commonImgs/factoryImg.svg";
import styles from "../styles/contacts.module.scss"

const Contacts = () => {
    return (
        <MainContainer>
            <div className={styles.contacts}>
                <h2 className={styles.contacts__title}>Контакты</h2>
                <div className={styles.addresses}>
                    <div className={styles.address}>
                        <h3 className={styles.address__title}>Офис</h3>
                        <p className={styles.address__item}>141150, Московская обл., г.Лосино-Петровский, ул.Первомайская, д.1, корп.4</p>
                        <a className={styles.phone} href="tel:84954325308">
                            <p className={styles.phone__item}>+7 495 432-53-08</p>
                        </a>
                        <a className={styles.mail} href="mailto:">
                            <p className={styles.mail__item}>pochta@pochta.ru</p>
                        </a>
                        <div className={styles.workTime}>
                            <span className={styles.workTime__title}>Время работы:</span>
                            <p className={styles.workTime__item}>Пн-Пт: с 9-00 до 19-00</p>
                            <p className={styles.workTime__item}>Сб-Вс: выходной</p>
                        </div>
                    </div>
                    <div className={styles.line}>
                    </div>
                    <div className={styles.address}>
                        <h3 className={styles.address__title}>Производство</h3>
                        <p className={styles.address__item}>141150, Московская обл., г.Лосино-Петровский, ул.Первомайская, д.1, корп.4</p>
                        <a className={styles.phone} href="tel:84954325308">
                            <p className={styles.phone__item}>+7 495 432-53-08</p>
                        </a>
                        <div className={styles.workTime}>
                            <span className={styles.workTime__title}>Время работы:</span>
                            <p className={styles.workTime__item}>Пн-Пт: с 9-00 до 19-00</p>
                            <p className={styles.workTime__item}>Сб-Вс: по предварительной договоренности</p>
                        </div>
                    </div>
                </div>
                <div className={styles.delivery}>
                    <div className={styles.deliveryContainer}>
                        <h4 className={styles.deliveryContainer__title}>Доставка по Санкт-Петербургу, России и СНГ:</h4>
                        <p className={styles.deliveryContainer__content}>Для наших дилеров и клиентов мы транспортируем торговое оборудование в любые города
                            России через
                            транспортные компании-партнеры: Деловые линии и ПЭК</p>
                        <p className={styles.deliveryContainer__content}>Доставка стеллажей и торгового оборудования производится по тарифам транспортных
                            компаний-партнеров на день отгрузки.</p>
                        <p className={styles.deliveryContainer__content}>СТОИМОСТЬ ДОСТАВКИ ЗАВИСИТ от местоположения Заказчика, количества, веса и объема
                            заказанного
                            товара.</p>
                        <p className={styles.deliveryContainer__content}>Услуга по доставке товара со склада включает в себя доставку торгового оборудования ДО
                            ПОДЪЕЗДА
                            (СКЛАДА) ЗАКАЗЧИКА.</p>
                        <p className={styles.deliveryContainer__content}>Рассчитать стоимость доставки в Ваш город помогут наши менеджеры</p>
                    </div>
                    <img className={styles.delivery__image} src={factoryImg.src} alt="Фотография производства"/>
                </div>
            </div>
        </MainContainer>
    );
};

export default Contacts;