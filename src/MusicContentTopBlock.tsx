import * as React from "react";
import {FunctionComponent, useState} from "react";
import styles from './App.module.scss'
import { mdiArrowLeftDropCircleOutline } from '@mdi/js';
import { mdiPause } from '@mdi/js';
import { mdiArrowRightDropCircleOutline } from '@mdi/js';
import { mdiMessageAlertOutline } from '@mdi/js';
import { mdiMessagePlusOutline } from '@mdi/js';
import Icon from '@mdi/react'
import {AvaMini} from "./miniResourses/AvaMini";
import Popover from "react-tiny-popover";
import {ExamplairMessage} from "./Msg/ExamplairMessage";
import {DropdownMsg} from "./Pages/Profile/MsgDropdown/DropdownMsg";

export interface MusicContentTopBlockProps {
handleMusicClick:()=>void
}

export const MusicContentTopBlock :FunctionComponent<MusicContentTopBlockProps>=(props)=>{
    const [open,setOpen]=useState()
    return(
        <div className={styles.music_content}>

            <div className={styles.trackName} onClick={props.handleMusicClick}>
                StatusQUo-in the army now
            </div>
            <div className={styles.trackControl}>
                <Icon path={mdiArrowLeftDropCircleOutline} size={1} color={"#444444"}/>
                <Icon path={mdiPause} size={1} color={"#444444"}/>
                <Icon path={mdiArrowRightDropCircleOutline} size={1} color={"#444444"}/>
            </div>

            <div className={styles.notification}>
                <Icon path={mdiMessageAlertOutline} size={1} color={"#444444"} />
                <Icon path={mdiMessagePlusOutline} size={1} color={"#444444"}/>
            </div>
            Ilya Tormanov
            <Popover isOpen={open}
                     position={"bottom"}
                     content={<DropdownMsg/>} >
              <AvaMini onClick={()=>setOpen(true)}/>
            </Popover>
        </div>
    )
}
