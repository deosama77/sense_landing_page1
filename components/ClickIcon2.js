import React from 'react';
import styles from '../styles/ClickButton2.module.css'
import Image from 'next/image';
import clickButton from '../public/icons/icons-02.png'
function ClickIcon1(props) {
    return (
        <Image src={clickButton} alt={'icon buttons'}
               width={350} height={100}
               className={styles.click_icon}
        ></Image>
    );
}

export default ClickIcon1;
