import {IFormValuesForm} from "../types/types";

export const useValidations = (showUserError:(formInput: string, errorMessage: string)=>void, hideUserError:(formInput:string)=>boolean, values:IFormValuesForm, handleBigChange:(value: (string | number), inputName: string) => void)=>{
    function nameValidation(){
        values.name?hideUserError("name"):showUserError("name", "Имя не может быть пустым")
    }
    function phoneInputMask(e:any) {
        if (e.keyCode === 8 || e.keyCode === 46){
            e.preventDefault()
            let arr: any = values.phone&&values.phone.split("").reverse();
            let abc:boolean;
            for (let i = 0; i<arr.length-2; i++){
                const regex = /[0-9]/;
                abc = regex.test(String(arr[i]).toLowerCase());
                if (abc){
                    arr.splice(i,1,"_")
                    let str = arr.reverse().join("")
                    return handleBigChange(str, "phone")
                }
            }
        }else if((e.keyCode < 47 || e.keyCode > 57) && (e.keyCode<96 || e.keyCode>106)){
            return e.preventDefault()
        }else{
            e.preventDefault()
            let arr:any = values.phone&&values.phone.split("")
            const index = arr.findIndex((item:string)=> item==="_")
            arr[index] = e.key
            const str = arr.join("")
            handleBigChange(str, "phone")
        }
    }
    function emailValidation () {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return (values.email === '')
            ? showUserError("email", "Email не может быть пустым")
            : hideUserError("email")
            || (!regex.test(String(values.email).toLowerCase()))
                ? showUserError("email", "Некорректный email")
                : hideUserError("email")
    }
    return {phoneInputMask, nameValidation, emailValidation}
}