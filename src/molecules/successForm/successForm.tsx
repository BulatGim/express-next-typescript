import React from 'react';
import success from "./imgs/success.svg"
import styles from "./successForm.module.scss"

const SuccessForm = () => {
    return (
        <div className={styles.success}>
            <img className={styles.success__img} src={success.src} alt="Успешно"/>
            <p className={styles.success__description}>Заявка успешно отправлена</p>
        </div>
    );
};

export default SuccessForm;