import React, {JSXElementConstructor, ReactElement, useEffect, useState} from 'react';
import {NextPage} from "next";
import Header from "../../organisms/Header/Header";
import Footer from "../../molecules/Footer/Footer";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setCatalog} from "../../layers/catalogSlice";
import Modal from "../../organisms/modal/modal";
import {RootState} from "../../store";

interface IMainContainer {
    children: ReactElement | ReactElement[];
}

const MainContainer:NextPage<IMainContainer> = ({children}) => {
    const dispatch = useDispatch()

    const modal = useSelector((state: RootState) => state.service.values)

    async function getCatalog() {
        const {data} = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL_CATALOG}`);
        dispatch(setCatalog(data));
    }


    useEffect(()=>{
        getCatalog()
    },[])
    return (
        <div>

            <div>
                <Header/>
                {children}
                <Footer/>
            </div>
            {modal?(
                <Modal>
                    {modal}
                </Modal>
            ):(<></>)}
        </div>
    );
};

export default MainContainer;