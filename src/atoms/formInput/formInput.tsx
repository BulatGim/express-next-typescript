import {useState, useEffect, KeyboardEvent, ChangeEvent} from 'react';
import {IError} from "../../types/types";
import {NextPage} from "next";
import styles from "../../styles/formInput.module.scss"
import React from "react"


interface IFormInputProps {
    placeholder: string;
    errors?: IError[],
    name: string;
    value: string | number;
    setter: (e:ChangeEvent<HTMLTextAreaElement>|ChangeEvent<HTMLInputElement>)=> void;
    validation?: (e:KeyboardEvent<HTMLTextAreaElement>|ChangeEvent<HTMLInputElement>)=>void;
    width?: string;
    marginTop?:string;
    className?: string;
}

const FormInput:NextPage<IFormInputProps> = (props) => {
    const [messageError, setMessageError] = useState("")
    const {placeholder, errors, name, setter, value, validation, className} = props;
    useEffect(()=>{
        showError();
    }, [props])
    function showError() {
        if(!messageError){
            if (!errors){
                return
            }
            let arr = errors;
            arr.map((item)=>{
                if (item.formInput === name){
                    return setMessageError(item.error);
                }
            })
        }else{
            let arr = errors;
            let noError = true;
            arr?.map((item)=>{
                if (item.formInput === name){
                    return noError = false;
                }else{
                    return
                }
            })
            if (noError){
                return setMessageError("");
            }
        }
    }
    return (
        <div className={styles.formInput+" "+className} style={{width: props.width, marginTop: props.marginTop}}>
            <textarea
                className={(messageError? styles.formInput__item_error+" "+styles.formInput__item: styles.formInput__item) + " "+ (name==="comment"?styles.formInput__item_comment:(""))}
                value={value}
                onChange={(e) => {setter(e); }}
                onKeyDown={(e)=>validation?validation(e):""}
                name={name}
                placeholder={placeholder}
            />
            <p className={styles.errorDescription}>{messageError}</p>
        </div>
    );
};

export default FormInput;