import * as React from 'react'
import {FunctionComponent} from "react";
import styles from "../ProfileStyles.module.scss";

export interface AvatarControlProps{


}


export const AvatarControl:FunctionComponent<AvatarControlProps>=()=>{
    return(
        <div className={styles.controlAvatar}>
            <span>Редактировать</span>
            <span>Изменить</span>
        </div>
    )
}