import type {ReactElement, ReactNode} from 'react';
import Link from "next/link";
import {NextPage} from "next";
import styles from "../../styles/CustomLink.module.scss"
import React from "react"


interface ILinkProps {
    url:string;
    children: ReactElement;
}

const CustomLink:NextPage<ILinkProps> = ({url, children}) => {
    return (
        <Link href={url}>
            <a className={styles.CustomLink}>
                {children}
            </a>
        </Link>
    );
};

export default CustomLink;