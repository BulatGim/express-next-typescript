import React, {ReactElement} from 'react';
import {NextPage} from "next";
import styles from "../../styles/customButton.module.scss"

interface ICustomButton {
    callBack?: ()=>void;
    children: ReactElement;
    color?: string;
    className?: string;
    type?: "button" | "submit" | "reset";
}

const CustomButton:NextPage<ICustomButton> = ({className, type, callBack, color, children}) => {
    return (
        <button className={color==="white"?(styles.whiteButton):(styles.blueButton)+" "+className} type={type?type:undefined} onClick={()=> callBack?(callBack()):("")}>{children}</button>
    );
};

export default CustomButton;