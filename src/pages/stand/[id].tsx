import React, {ReactElement, useState, JSXElementConstructor} from 'react';
import styles from "../../styles/StandPage.module.scss"
import chooseColorIcon from "../../commonImgs/chooseColorIcon.svg"
import CustomButton from "../../atoms/CustomButton/CustomButton";
import nextIcon from "../../commonImgs/nextIcon.svg";
import MainContainer from "../../templates/mainContainer/mainContainer";
import SectionCalculation from "../../molecules/sectionCalculation/sectionCalculation";
import StandsBlock from "../../organisms/StandsBlock/StandsBlock";
import {IStand} from "../../types/types";
import {NextPage} from "next";
import exclamation from "../../commonImgs/exclamationPoint.svg";
import { GetServerSideProps } from 'next'
import Modal from "../../organisms/modal/modal";
import OptPrice from "../../molecules/optPrice/optPrice";
import OrderStand from "../../molecules/orderStand/orderStand";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {setModal} from "../../layers/serviceLayer";


interface IStandPageProps {
    stands: IStand[];
    stand: IStand;
}

const StandPage: NextPage<IStandPageProps> = ({stands, stand}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const dispatch = useDispatch();

    const delivery = "some text of delivery"

    const [activeDescription, setActiveDescription] = useState(stand.description);
    const [activePanel] = useState([
        {
            id: 1,
            name: "Описание",
            activeDescription: stand.description,
        }, {
            id: 2,
            name: "Характеристики",
            activeDescription: stand.characteristics,
        }, {
            id: 3,
            name: "Доставка",
            activeDescription: delivery,
        },
    ])

    const colors = [
        {
            id: 1,
            ral:"2020",
            color: "#D5D9DC"
        },{
            id: 2,
            ral:"2020",
            color: "#128E3D"
        },{
            id: 3,
            ral:"2020",
            color: "#FC0D1B"
        },{
            id: 4,
            ral:"2020",
            color: "#194A87"
        },{
            id: 5,
            ral:"2020",
            color: "#D5D9DC"
        },{
            id: 6,
            ral:"2020",
            color: "#F6B92E"
        },
    ];

    const [activeColor, setActiveColor] = useState(colors[0])

    function createMarkup() {
        return {__html: activeDescription};
    }

    function doNextSlide() {
        setActiveIndex((current) => {
            const res = current === stand.photo.length - 1 ? 0 : current + 1;
            return res
        })
    }

    function doPrevSlide() {
        setActiveIndex((current) => {
            const res = current === 0 ? stand.photo.length - 1 : current - 1;
            return res
        })
    }

    return (
        <MainContainer>
            <div className={styles.StandPage}>
                <div className={styles.card}>
                    <div className={styles.imgs}>
                        <div className={styles.imgsContainer}>
                            {stand?.photo?.map((item, index) =>
                                <div
                                    key={index}
                                    className={index === activeIndex ? (styles.imgsContainer__item + " " + styles.imgsContainer__item_active) : styles.imgsContainer__item}
                                    onClick={() => setActiveIndex(index)}>
                                    <img className={styles.imgItem} src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER_URL+item}`} alt="Фото стеллажа"/>
                                </div>
                            )}
                        </div>
                        <div className={styles.activeImg}>
                            <div className={styles.prevBtn} onClick={doPrevSlide}>
                                <CustomButton>
                                    <img className={styles.prevBtn__img} src={nextIcon.src}
                                         alt="Предыдущее изображение"/>
                                </CustomButton>
                            </div>
                            <img className={styles.activeImg__item} src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER_URL+stand.photo[activeIndex]}`}
                                 alt="Фото стеллажа"/>
                            <div className={styles.nextBtn} onClick={doNextSlide}>
                                <CustomButton>
                                    <img className={styles.nextBtn__img} src={nextIcon.src}
                                         alt="Следующее изображение"/>
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                    <div className={styles.characteristics}>
                        <div className={styles.mainPanel}>
                            <span className={styles.article}>Арт. {stand.id}</span>
                            <div className={styles.mainPanelContainer}>
                                <h4 className={styles.mainPanelContainer__name}>{stand.name}</h4>
                                <div className={styles.order}>
                                    <div className={styles.price}>
                                        <p>от</p>
                                        <h3 className={styles.price__number}>{stand.price}Р</h3>
                                    </div>
                                    <h4 className={styles.optPrice} onClick={()=>dispatch(setModal(<OptPrice/>))}>ЗАПРОСИТЬ ОПТОВУЮ ЦЕНУ</h4>
                                </div>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.sizes}>
                                <div className={styles.sizes__item}>
                                    <span className={styles.title}>Высота</span>
                                    <span className={styles.description}>{stand.height} см</span>
                                </div>
                                <div className={styles.sizes__item}>
                                    <span className={styles.title}>Ширина</span>
                                    <span className={styles.description}>{stand.width} см</span>
                                </div>
                                <div className={styles.sizes__item}>
                                    <span className={styles.title}>Глубина</span>
                                    <span className={styles.description}>{stand.deep} см</span>
                                </div>
                            </div>
                            <div className={styles.individualSizes}>
                                <img className={styles.individualSizes__exclamation} src={exclamation.src} alt="Заказать изготовление по индивидуальным размерам"/>
                                <span className={styles.individualSizes__description} onClick={()=> dispatch(setModal(<OrderStand stand={stand}/>))}>Заказать изготовление по индивидуальным размерам</span>
                            </div>
                            <div className={styles.colorChoose}>
                                <div className={styles.description}>
                                    <div className={styles.colorChooseContent}>
                                        <img className={styles.colorChooseContent__icon} src={chooseColorIcon.src} alt="Выберите цвет"/>
                                        <span className={styles.colorChooseContent__description}>Выберите цвет</span>
                                    </div>
                                    <span className={styles.description__allColors}>Смотреть все цвета</span>
                                </div>
                                <div className={styles.colors}>
                                    {colors.slice(0, 5).map((item, index) =>
                                        <div className={styles.colors__item} style={{backgroundColor: item.color}} key={index}>

                                        </div>
                                    )}
                                </div>
                            </div>
                            <CustomButton className={styles.orderBtn} callBack={()=>dispatch(setModal(<OrderStand stand={stand} activeColor={activeColor}/>))}>
                                <h4>Заказать</h4>
                            </CustomButton>
                        </div>
                    </div>
                </div>
                <div className={styles.description}>
                    <div className={styles.panel}>
                        {activePanel.map(item =>
                            <div
                                key={item.id}
                                className={item.activeDescription === activeDescription ? (styles.panel__item + " " + styles.panel__item_active) : (styles.panel__item)}
                                onClick={() => setActiveDescription(item.activeDescription)}>
                                <h4 className={styles.name}>{item.name}</h4>
                            </div>
                        )}
                    </div>
                    <div className={styles.content} dangerouslySetInnerHTML={createMarkup()}>
                    </div>
                </div>
            </div>

            <SectionCalculation/>
            <StandsBlock stands={stands} title={"Похожие товары"}/>
        </MainContainer>
    );
};
export default StandPage;

export const getServerSideProps:GetServerSideProps = async(context)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL_STANDS_CATALOG_ID}2`);
    const stands = await res.json();

    const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL_STANDS}${context.query.id}`);
    const stand = await resp.json()
    return {
        props: {
            stands,
            stand
        },
    }
}