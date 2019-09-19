import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './ButtonStyles.module.scss'
export interface ButtonProps {
    text:string,
    className?:string
}

export const Button:FunctionComponent<ButtonProps>=(props)=>{
    return(
        <div className={styles.btn}>
            <span>{props.text}</span>
        </div>
    )
}