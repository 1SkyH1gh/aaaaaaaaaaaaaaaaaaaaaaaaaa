import * as React from 'react'
import {FunctionComponent} from "react";
import {Avatar} from "./Avatar";
import {AvatarControl} from "./AvatarControl";
import styles from './AvatarFullStyles.module.scss'
export interface AvatarFullProps {

}

export const AvatarFull:FunctionComponent<AvatarFullProps>=()=>{
    return(
        <div className={styles.AvatarFull}>
            <Avatar/>
            <AvatarControl/>
        </div>
    )
}