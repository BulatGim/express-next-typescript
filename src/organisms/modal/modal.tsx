import React, {ReactNode} from 'react';
import styles from "../../styles/modal.module.scss"
import {NextPage} from "next";
import closeIcon from "./imgs/closeIcon.svg"
import {useDispatch} from "react-redux";
import {setModal} from "../../layers/serviceLayer";

interface IModalProps {
    children: ReactNode,
}

const Modal:NextPage<IModalProps> = ({ children}) => {
    const dispatch = useDispatch()

    return (
        <div className={styles.modal} onClick={()=>dispatch(setModal(null))}>
            <div className={styles.modalContainer} onClick={(e)=>e.stopPropagation()}>
                <img className={styles.modalContainer__close} src={closeIcon.src} alt="Закрыть" onClick={()=>dispatch(setModal(null))}/>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;