import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './ControlHeaderStyles.module.scss'

export interface HeaderProps{

}

export const Header:FunctionComponent<HeaderProps>=()=>{
    return(
        <div className={styles.header}>
           Settings
            <form>
                <input placeholder={"search..."}/>
            </form>
        </div>
    )
}