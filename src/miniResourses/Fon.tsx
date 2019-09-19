import * as React from 'react'
import {FunctionComponent} from "react";
import fonTest from "../fonTest.jpg";
import styles from "../Pages/Profile/ProfileStyles.module.scss";

export interface FonProps {

}

export const Fon:FunctionComponent<FonProps>=()=>{
    return(
        <div className={styles.fon}>
        <img src={fonTest} className={styles.fonStyles}/>
        </div>
    )
}