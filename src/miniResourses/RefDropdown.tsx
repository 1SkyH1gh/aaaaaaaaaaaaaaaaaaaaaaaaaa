import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './RedDropdownStyles.module.scss'
export interface RefDropdownProps {

}

export const RefDropdown:FunctionComponent<RefDropdownProps>=(props)=>{
    return(
        <div className={styles.drp_dwnMsg_cont}>
            {props.children}
        </div>
    )
}