import styles from "../../styles/Header.module.scss"
import MobileMenu from "../../molecules/MobileMenu/MobileMenu";
import DesktopHeader from "../../molecules/DesktopHeader/DesktopHeader";
import React from "react"


const Header = () => {
    return (
        <div className={styles.Header}>
            <DesktopHeader/>
            <MobileMenu/>
        </div>
    );
};

export default Header;