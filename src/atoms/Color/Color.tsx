import {FC} from 'react';
import styles from "./Color.module.scss"
import {IColor} from "../../../server/types/types";
import {useDispatch} from "react-redux";
import {setActiveColor} from "../../layers/standMailSlice";

interface IColorProps {
    color: IColor
    className?:string;
}

export const Color:FC<IColorProps> = ({color, className}) => {
    const dispatch = useDispatch()
    return (
        <div
            className={styles.Color+" "+className}
             style={{backgroundColor: `${color.color} `}}
             onClick={()=>dispatch(setActiveColor(color))}
        >
        </div>
    );
};
