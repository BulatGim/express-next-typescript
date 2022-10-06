import React, {useState} from 'react';
import MainContainer from "../templates/mainContainer/mainContainer";
import styles from "../styles/factoryPage.module.scss"
import factoryImg from "../commonImgs/factoryImg.svg"
import factoryImg1 from "../commonImgs/factoryImg1.svg"
import factoryImg2 from "../commonImgs/factoryImg2.svg"
import SectionCalculation from "../molecules/sectionCalculation/sectionCalculation";
import SliderSomeItems from "../organisms/SliderSomeItems/SliderSomeItems";


const Factory = () => {

    const [state, setState] = useState([factoryImg, factoryImg1, factoryImg2,factoryImg, factoryImg1, factoryImg2,factoryImg, factoryImg1, factoryImg2,])
    return (
        <MainContainer>
            <div className={styles.factory}>
                <h2 className={styles.factory__title}>Производство</h2>
                <div className={styles.content}>
                    <div className={styles.description}>
                        <span className={styles.description__item}>Производство стеллажей – основное направление деятельности завода стеллажей "Евромаркет". Как производители стеллажей мы работаем с 2010 года и за этот срок выполнили сотни проектов, завоевав большую лояльность клиентов. На сегодняшний день завод по производству стеллажей обеспечивает непрерывное изготовление стеллажей почти всех известных модификаций. Мощности наших производственных линий позволяют не только оперативно выполнять заказы, но и держать на складе образцы готового торгового оборудования.
Производство обладает собственной покрасочной линией швейцарского производства, что позволяет осуществлять порошковую окраску изготовленных металлических стеллажей в любой цвет RAL. Наше торговое оборудование соответствует мировым стандартам качества.</span>
                        <span className={styles.description__item}>Все производимые стеллажи из металла уже в стандартном варианте имеют повышенную грузоподъемность: 100 – 120 кг. Секрет такого преимущества в технологиях производства, использования электронных и полуавтоматических станков при изготовлении стеллажей. Однако это далеко не предел, в зависимости от потребности, стеллажи, производимые на заказ, могут обладать теми характеристиками, которые необходимы клиенту. </span>
                    </div>
                    <img className={styles.content__image} src={factoryImg.src} alt="Производство"/>
                </div>
                <div className={styles.factory__description}>
                    <h3 className={styles.title}>Торговое оборудование от производителя: качество без переплат!</h3>
                    <div className={styles.upperCase}>
                        <div className={styles.description}>
                            <span className={styles.description__item}>На нашем официальном сайте представлен большой выбор стандартного магазинного оборудования и торговой мебели: стеллажи, прилавки, прикассовое оборудование, металлические сумочницы, стойки и стенды. Нестандартные модели изготавливаются по уникальным размерам заказчика. Все изделия удобны в использовании и эффектно демонстрируют товары.</span>
                            <span className={styles.description__item}>Производим оборудование из металла и дерева с дополнительным оснащением - подсветкой, зеркалами, фурнитурой и другими элементами.</span>
                        </div>
                        <img className={styles.upperCase__image} src={factoryImg1.src} alt="Производство"/>
                    </div>
                    <div className={styles.lowerCase}>
                        <img className={styles.lowerCase__image} src={factoryImg2.src} alt="Производство"/>
                        <span className={styles.lowerCase__description}>У нас вы сможете приобрести торговое оборудование для вашего магазина с гарантией качества и доставкой по всей России. С нашей помощью вы оптимально и гармонично оснастите пространство разного масштаба и любых направлений - от самых маленьких магазинчиков до крупных столичных торговых сетей.</span>
                    </div>
                </div>
                <div className={styles.Slider}>
                    <SliderSomeItems arrayItems={state.map(item=>
                        <img className={styles.Slider__item} src={item.src} alt="Наша продукция"/>
                    )}/>
                </div>
            </div>
            <SectionCalculation/>

        </MainContainer>
    );
};

export default Factory;