import React, {useState} from 'react';
import {NextPage} from "next";
import selectImg from "./imgs/selectImg.svg"
import styles from "../../styles/customSelect.module.scss"
import {log} from "util";

interface IPoints {
    id: number;
    name: string;
    isActive: boolean;
}

interface ICustomSelectProps {
    points: IPoints[];
    setActivePoint: (points: IPoints[])=>void;
}

const CustomSelect:NextPage<ICustomSelectProps> = ({points, setActivePoint} : ICustomSelectProps) => {
    const [isChooseActive, setIsChooseActive] = useState(false);

    function changeActivePoint(index:number) {
        let arr = points;
        for (let i = 0; i < arr.length; i++){
            if (arr[i].isActive){
                arr[i].isActive = false
            }
        }
        arr[index].isActive = true;
        setActivePoint(arr)
        setIsChooseActive(false)
    }

    return (
        <div className={styles.customSelect}>
            {points.map(item=>
                item.isActive?(
                    <div className={styles.selected} key={item.id} onClick={()=>setIsChooseActive(prevState => !prevState)}>
                        <span className={styles.selected__name}>{item.name}</span>
                        <img className={styles.selected__img} src={selectImg.src} alt="select"/>
                    </div>
                ):("")
            )}
            <div className={styles.container}>
                {isChooseActive?(
                    points.map((item, index)=>
                        <div className={styles.selectItem} key={item.id} onClick={()=>changeActivePoint(index)}>
                            <span className={styles.selectItem__name}>{item.name}</span>
                        </div>
                    )
                ):("")}
            </div>
        </div>
    );
};

export default CustomSelect;