import React, {useEffect, useState} from 'react';
import CatalogDesktop from "../../molecules/catalogDesktop/catalogDesktop";
import styles from "../../styles/catalogPage.module.scss"
import {useRouter} from "next/router";
import {ISortingPoint, IStand} from "../../types/types";
import {GetServerSideProps, NextPage} from "next";
import StandCard from "../../molecules/StandCard/StandCard";
import SectionCalculation from "../../molecules/sectionCalculation/sectionCalculation";
import SectionOurClients from "../../molecules/sectionOurClients/sectionOurClients";
import {useElementOnScreen} from "../../hooks/useElementOnScreen";
import axios from "axios";
import MainContainer from "../../templates/mainContainer/mainContainer";
import Sorting from "../../organisms/sorting/sorting";

interface ICatalogPageProps {
    stands: IStand[];
}

const CatalogPage:NextPage<ICatalogPageProps> = ({stands}) => {

    const router = useRouter()

    const [catalogStand, setCatalogStands] = useState(stands)

    const [sorting, setSorting] = useState("")

    const [page, setPage] = useState(2);

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    })

    const [points,setPoints] = useState<ISortingPoint[]>([
        {
            id:1,
            name: "Не выбрано",
            isActive: true,
            sorting: ""
        },{
            id:2,
            name: "По цене (возрастанию)",
            isActive: false,
            sorting: "lowerPrice"
        },{
            id:3,
            name: "По цене (убыванию)",
            isActive: false,
            sorting: "biggerPrice"
        },
    ])

    const [isChooseActive, setIsChooseActive] = useState(false);

    const loadMoreStands = async()=>{
        const {data} = await axios.get(process.env.NEXT_PUBLIC_SERVER_URL_STANDS_CATALOG_ID+""+router.query.id+"?page="+page+"&sort="+sorting)
        setPage(prevState => prevState+1)
        setCatalogStands(prevState => [...prevState, ...data])
    }

    const sortByParams = async ()=>{
        setPage(2);
        const {data} = await axios.get(process.env.NEXT_PUBLIC_SERVER_URL_STANDS_CATALOG_ID+""+router.query.id+"?page=1"+"&sort="+sorting)
        setCatalogStands(data)
    }

    useEffect(()=>{
        if (isVisible){
            loadMoreStands()
        }
    }, [isVisible])

    useEffect(()=>{
        sortByParams();
    }, [sorting])

    useEffect(()=>{
        sortByParams()
    }, [router.query.id])

    return (
        <MainContainer>
                <div className={styles.CatalogPage}>
                    <CatalogDesktop/>
                    <div className={styles.content}>
                        <h2 className={styles.content__title}>Торговые стеллажи</h2>
                        <Sorting sortingPoints={points} setSorting={setSorting} setIsSortingActive={setIsChooseActive} isSortingActive={isChooseActive} setSortingPoints={setPoints}/>
                        <div className={styles.standsContainer}>
                            {catalogStand?.map(item=>
                                <StandCard key={item.id} stand={item} />
                            )}
                        </div>
                    </div>
                </div>
                <div ref={containerRef as React.RefObject<HTMLDivElement>}></div>
                <SectionCalculation/>
                <SectionOurClients/>
        </MainContainer>
    );
};

export const getServerSideProps:GetServerSideProps = async(context)=> {
    let url = process.env.NEXT_PUBLIC_SERVER_URL_STANDS_CATALOG_ID as string
    const res = await fetch(url+context.query.id);
    const stands = await res.json();

    return {
        props: {
            stands,
        },
    }
}

export default CatalogPage;