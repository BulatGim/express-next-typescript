import {ChangeEvent, Dispatch, SetStateAction} from "react";
import {IFormValuesForm} from "../types/types";

export const useHandleChange = (setter:Dispatch<SetStateAction<any>>, values:IFormValuesForm)=>{
    function handleChange(e:ChangeEvent<HTMLTextAreaElement>|ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setter({
            ...values,
            [name]: value
        })
    }

    function handleBigChange(value:string|number, inputName:string) {
        setter({
            ...values,
            [inputName]: value
        })
    }

    return {handleChange, handleBigChange}
}