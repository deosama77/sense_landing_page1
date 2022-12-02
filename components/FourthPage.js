import React from 'react';
import styles from "../styles/BackgroundImages.module.css";
import ClickIcon1 from "./ClickIcon1";

function FourthPage(props) {
    return (
        <div className={styles.bgimg_4}>
            <div className={styles.container_click_icon_4}>
                <ClickIcon1></ClickIcon1>
            </div>
        </div>
    );
}

export default FourthPage;
