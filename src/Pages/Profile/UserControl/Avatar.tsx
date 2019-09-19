import * as React from 'react'
import {FunctionComponent} from "react";
import avatar from "../../../avaMini.jpg";
import styles from "../ProfileStyles.module.scss";

export interface AvatarProps{

}

export const Avatar:FunctionComponent<AvatarProps>=()=>{
    return(
        <img src={avatar} className={styles.avatar}/>
    )
}