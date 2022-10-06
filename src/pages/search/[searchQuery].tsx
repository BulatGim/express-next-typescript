import React, {useEffect, useState} from 'react';
import styles from "../../styles/SearchPage.module.scss";
import selectImg from "../../atoms/customSelect/imgs/selectImg.svg";
import StandCard from "../../molecules/StandCard/StandCard";
import SectionCalculation from "../../molecules/sectionCalculation/sectionCalculation";
import SectionOurClients from "../../molecules/sectionOurClients/sectionOurClients";
import {GetServerSideProps, NextPage} from "next";
import Sorting from "../../organisms/sorting/sorting";
import {ISortingPoint, IStand} from "../../types/types";
import {useElementOnScreen} from "../../hooks/useElementOnScreen";
import axios from "axios";
import {useRouter} from "next/router";
import MainContainer from "../../templates/mainContainer/mainContainer";

interface ICatalogPageSearchProps {
    stands: IStand[];
}

const CatalogPageSearchString:NextPage<ICatalogPageSearchProps> = ({stands}) => {

    const router = useRouter()

    const [catalogStand, setCatalogStands] = useState(stands)

    const [sorting, setSorting] = useState("")

    const [page, setPage] = useState(2);

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

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    })

    const loadMoreStands = async()=>{
        const {data} = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL_STANDS_SEARCH_QUERY}?searchString=${router.query.searchQuery}&page=${page}&sort=${sorting}`)
        setPage(prevState => prevState+1)
        setCatalogStands(prevState => [...prevState, ...data])
    }

    const sortByParams = async ()=>{
        setPage(2);
        const {data} = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL_STANDS_SEARCH_QUERY}?searchString=${router.query.searchQuery}&page=1&sort=${sorting}`)
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

    async function newSearchQuery() {
        let url = process.env.NEXT_PUBLIC_SERVER_URL_STANDS_SEARCH_QUERY as string
        const {data} = await axios.get(`${url}?searchString=${router.query.searchQuery}`);
        setCatalogStands(data)
    }

    useEffect(()=>{
        newSearchQuery();
    }, [router.query.searchQuery])
    return (
        <MainContainer>
            <div className={styles.SearchPage}>
                <div className={styles.SearchPage__container}>
                    <div className={styles.content}>
                        <h2 className={styles.content__title}>Запрос по</h2>
                        <Sorting setSorting={setSorting} setSortingPoints={setPoints} sortingPoints={points} isSortingActive={isChooseActive} setIsSortingActive={setIsChooseActive}  />
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
            </div>
        </MainContainer>
    );
};

export const getServerSideProps:GetServerSideProps = async(context)=> {

    let url = process.env.NEXT_PUBLIC_SERVER_URL_STANDS_SEARCH_QUERY as string
    const res = await fetch(`${url}?searchString=${context.query.searchQuery}`);
    const stands = await res.json();

    return {
        props: {
            stands,
        },
    }
}


export default CatalogPageSearchString;