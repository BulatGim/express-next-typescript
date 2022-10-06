import {IError} from "../types/types";
import {Dispatch, SetStateAction} from "react";

export const useUserErrors = (userErrors:IError[], setUserErrors:Dispatch<SetStateAction<any>>)=>{

    function hideUserError(formInput:string) {
        for (let i = 0; i < userErrors.length; i++){
            if (userErrors[i].formInput === formInput){
                let arr = userErrors;
                arr.splice(i, 1)
                setUserErrors(arr)
            }
        }
        return false
    }
    function showUserError(formInput:string, errorMessage:string){
        let prev;
        userErrors.map((item)=>{
            if (item.formInput===formInput){
                prev=true
            }
        })
        if (prev){
            return
        }
        let obj:IError = {
            error: errorMessage,
            formInput: formInput
        }
        let errors:IError[] = userErrors;
        errors.push(obj);
        setUserErrors(errors)
    }

    return {hideUserError, showUserError}
}