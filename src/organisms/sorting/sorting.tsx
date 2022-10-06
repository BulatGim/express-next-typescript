import React from 'react';
import styles from "../../styles/sorting.module.scss";
import selectImg from "../../atoms/customSelect/imgs/selectImg.svg";
import {ISortingPoint} from "../../types/types";
import {NextPage} from "next";

interface ISortingProps {
    sortingPoints: ISortingPoint[];
    setSortingPoints: React.Dispatch<React.SetStateAction<ISortingPoint[]>>;
    isSortingActive: boolean;
    setIsSortingActive:  React.Dispatch<React.SetStateAction<boolean>>;
    setSorting:  React.Dispatch<React.SetStateAction<string>>;
}

const Sorting:NextPage<ISortingProps> = ({sortingPoints, setSortingPoints, isSortingActive , setIsSortingActive, setSorting}) => {
    async function changeActivePoint(index:number) {
        let arr = sortingPoints;
        for (let i = 0; i < arr.length; i++){
            if (arr[i].isActive){
                arr[i].isActive = false
            }
        }
        arr[index].isActive = true;
        setSorting(arr[index].sorting)
        setSortingPoints(arr)
        setIsSortingActive(false)
    }
    return (
        <div className={styles.sorting}>
            <p className={styles.sorting__title}>Сортировать по</p>
            <div className={styles.customSelect}>
                {sortingPoints.map(item=>
                    item.isActive?(
                        <div className={styles.selected} key={item.id} onClick={()=>setIsSortingActive(prevState => !prevState)}>
                            <span className={styles.selected__name}>{item.name}</span>
                            <img className={isSortingActive? (styles.selected__img + " "+ styles.selected__img_rotate): (styles.selected__img)} src={selectImg.src} alt="select"/>
                        </div>
                    ):("")
                )}
                <div className={styles.container}>
                    {isSortingActive?(
                        sortingPoints.map((item, index)=>
                            <div className={item.isActive? (styles.selectItem_active+" "+styles.selectItem): styles.selectItem} key={item.id} onClick={()=>changeActivePoint(index)}>
                                <span className={item.isActive? styles.selectItem_active__name : styles.selectItem__name}>{item.name}</span>
                            </div>
                        )
                    ):("")}
                </div>
            </div>
        </div>
    );
};

export default Sorting;