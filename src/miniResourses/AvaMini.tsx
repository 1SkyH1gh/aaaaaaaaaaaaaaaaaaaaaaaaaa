import * as React from 'react'
import {FunctionComponent} from "react";
import ava from '../avaMini.jpg'
import styles from '../AvaStyles.module.scss'
export interface AvaMiniProps {
onClick?:()=>void
}

export const AvaMini:FunctionComponent<AvaMiniProps>=(props)=>{
    return(
        <img src={ava} className={styles.ava} onClick={props.onClick}/>
    )
}