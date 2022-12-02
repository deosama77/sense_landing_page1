import React from 'react';
import styles from '../styles/BackgroundImages.module.css'
import ClickIcon1 from "./ClickIcon1";
function FirstPage(props) {
    return (
        <div className={styles.bgimg_1}>
            <div className={styles.container_click_icon}>
              <ClickIcon1></ClickIcon1>
            </div>
        </div>
    );
}

export default FirstPage;
