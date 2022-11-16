import {FC} from 'react';
import styles from "./colorChoose.module.scss"
import {IColor} from "../../../server/types/types";
import {Color} from "../../atoms/Color/Color";

interface IColorChooseProps {
    className?: string
    colors: IColor[];
}

export const ColorChoose:FC<IColorChooseProps> = ({className, colors}) => {
    return (
        <div className={styles.ColorChoose}>
            {colors.map((item)=>
                <Color
                    key={item.id}
                    color={item}
                    className={styles.ColorChoose__item}
                />
            )}
        </div>
    );
};
