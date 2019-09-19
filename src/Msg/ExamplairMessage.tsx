import * as React from 'react'
import {FunctionComponent} from "react";
import {AvaMini} from "../miniResourses/AvaMini";
import Icon from "@mdi/react";
import { mdiCloseCircleOutline } from '@mdi/js';
import styles from './ExamplairMessageStyles.module.scss'
export interface ExamplairMessageProps{
lastMsg:string
}

export const ExamplairMessage:FunctionComponent<ExamplairMessageProps>=(props)=>{
    return(
        <div className={styles.msg_cont}>
            <AvaMini/>
            <div className={styles.msg_body}>
                <div className={styles.senderName}>Nikita Teluykov</div>
                 <div className={styles.message}>{props.lastMsg}</div>
            </div>
            <Icon path={mdiCloseCircleOutline} size={1}/>
        </div>
    )
}