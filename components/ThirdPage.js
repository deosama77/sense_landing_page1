import React from 'react';
import styles from "../styles/BackgroundImages.module.css";
import ClickIcon1 from "./ClickIcon1";

function ThirdPage(props) {
    return (
        <div className={styles.bgimg_3}>
            <div className={styles.container_click_icon}>
                <ClickIcon1></ClickIcon1>
            </div>
        </div>
    );
}

export default ThirdPage;
