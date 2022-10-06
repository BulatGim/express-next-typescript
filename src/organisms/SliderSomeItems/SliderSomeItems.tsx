import {FC, useEffect, useState, TouchEvent, MouseEvent, ReactElement} from 'react';
import styles from "../../styles/SliderSomeItems.module.scss"
import React from "react"


interface ISliderProps {
    arrayItems: Array<any>
    turningNextBtn?: ReactElement;
    turningPrevBtn?: ReactElement;
    isCrumbs?:boolean;
    slidesAmount?: number;
}


const SliderSomeItems: FC<ISliderProps> = ({arrayItems, turningNextBtn, turningPrevBtn, isCrumbs, slidesAmount}) => {
    let img = arrayItems
    // Хук Effect
    useEffect(() => {
        // Запускаем интервал
        const interval = setInterval(() => {
            doNextSlide();
        }, 5000)
        // Выключаем интервал
        return () => {
            clearInterval(interval)
        }
    }, [])
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

    const [action, setAction] = useState<"next" | "prev" | null>("next")

    const [x3, setX3] = useState<number>(0);
    const [y3, setY3] = useState<number>(0);

    function doNextSlide() {
        setActiveIndex((current) => {
            setAction("next")
            // Вычисляем индекс следующего слайда, который должен вывестись
            const res = current === img.length - 1 ? 0 : current + 1;
            // Возвращаем индекс
            //console.log(res)
            return res
        })
        //countIndex(1);
    }

    function doPrevSlide() {
        setActiveIndex((current) => {
            setAction("prev")
            // Вычисляем индекс следующего слайда, который должен вывестись
            const res = current === 0 ? img.length - 1 : current - 1;
            // Возвращаем индекс
            return res
        })
        // countIndex(-1);
    }

// Вычисляем индекс предыдущего слайда
    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
    const prevImgDouble = prevImgIndex ? prevImgIndex - 1 : img.length - 1;
// Вычисляем индекс следующего слайда
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;
    const nextImgDouble = (activeIndex + 1) < img.length ? (activeIndex + 2) < img.length ? (((activeIndex === img.length - 2 ? 0 : activeIndex + 2))) : 0 : 1;
//инициализируем переменные для начала ведения отсчета для перелистывания
    let x1: number | null = null;
    let y1: number | null = null;

//функция записывающая начало свайпа по координатам x и y
    function handleTouchStart(e: TouchEvent<any>) {
        x1 = e.touches[0].clientX;
        y1 = e.touches[0].clientY;
    }

    function handleTouchMove(e: TouchEvent<any>) {
        if (!x1 || !y1) {
            // если не существует начала свайпа, выходим из функци
            return;
        }
        //каждый раз инициализируется переменная записывающая текущие координаты свайпа
        let x2 = e.touches[0].clientX;
        let y2 = e.touches[0].clientY;
        let xDifference = x2 - x1;
        let yDifference = y2 - y1
        calculateCoordinates(xDifference, yDifference)
    }

    function handleMouseDown(e: MouseEvent<any>) {
        setIsMouseDown(true);
        setX3(e.pageX);
        setY3(e.pageY);
    }

    function handleMouseMove(e: MouseEvent<any>) {
        if (isMouseDown) {
            let x4 = e.pageX;
            let y4 = e.pageY;
            e.preventDefault();
            if (Math.abs(x4 - x3) > 80) {
                setX3(x4)
                let xDifference = x4 - x3;
                let yDifference = y4 - y3;
                calculateCoordinates(xDifference, yDifference);
            } else {
                return;
            }
        }
    }

    function handleMouseUp(e: MouseEvent<any>) {
        setIsMouseDown(false);
    }

    function calculateCoordinates(xDiff: number, yDiff: number) {
        // записываем разницу в координатах
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            //ветка выполняется, когда свайп идет влево или вправо
            if (xDiff > 0) {
                doPrevSlide();
            } else {
                doNextSlide();
            }
        }
    }

    function switchToGivenSlide(index: number) {
        setActiveIndex(index)
    }

    useEffect(()=>{
        if (action){
            setTimeout(()=>{
                setAction(null)
            }, 1000)
        }
    }, [action])

    return (
        <div className={styles.SliderSomeItems} onTouchStart={(e) => handleTouchStart(e)}
             onTouchMove={(e) => handleTouchMove(e)} onMouseDown={(e) => handleMouseDown(e)}
             onMouseMove={(e) => handleMouseMove(e)} onMouseUp={(e) => handleMouseUp(e)}
             onMouseLeave={(e) => handleMouseUp(e)}>
            {turningPrevBtn?(
                <div className={styles.prevSlide} onClick={doPrevSlide}>
                    {turningPrevBtn}
                </div>
            ):("")}
            <div className={styles.slidesContainer}>
                {slidesAmount===5?(
                    <div className={styles.SliderSomeItems__img + " " + (action?(action==="next"?(styles.SliderSomeItems__img_next):(styles.SliderSomeItems__img_prev)):(""))}
                         key={prevImgDouble}>
                        {img[prevImgDouble]}
                    </div>
                ):("")}
                <div className={styles.SliderSomeItems__img + " " + (action?(action==="next"?(styles.SliderSomeItems__img_next):(styles.SliderSomeItems__img_prev)):(""))}
                     key={prevImgIndex}>
                    {img[prevImgIndex]}
                </div>
                <div className={styles.SliderSomeItems__img + " " + (action?(action==="next"?(styles.SliderSomeItems__img_next):(styles.SliderSomeItems__img_prev)):(""))}
                     key={activeIndex}>
                    {img[activeIndex]}
                </div>
                <div className={styles.SliderSomeItems__img + " " + (action?(action==="next"?(styles.SliderSomeItems__img_next):(styles.SliderSomeItems__img_prev)):(""))}
                     key={nextImgIndex}>
                    {img[nextImgIndex]}
                </div>
                {slidesAmount&&slidesAmount>=4?(
                    <div className={styles.SliderSomeItems__img + " " + (action?(action==="next"?(styles.SliderSomeItems__img_next):(styles.SliderSomeItems__img_prev)):(""))}
                         key={nextImgDouble}>
                        {img[nextImgDouble]}
                    </div>
                ):("")}
            </div>
            {turningNextBtn?(
                <div className={styles.nextSlide} onClick={doNextSlide}>
                    {turningNextBtn}
                </div>
            ):("")}
            {isCrumbs?(
                <div className={styles.SliderSomeItems_crumbs}>
                    {img.map((item, index) =>
                        <span key={index}
                              className={(activeIndex === index) ? (styles.SliderSomeItems_crumbs__item + " " + styles.SliderSomeItems_crumbs__item_active) : (styles.SliderSomeItems_crumbs__item)}
                              onClick={() => switchToGivenSlide(index)}></span>
                    )}
                </div>
            ):("")}
        </div>
    )
}
//(action==="next"?(styles.SliderSomeItems__img_next):(styles.SliderSomeItems__img_prev))
export default SliderSomeItems;
