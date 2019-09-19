import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './ControlHeaderStyles.module.scss'
import Icon from '@mdi/react'
import { mdiHomeImportOutline } from '@mdi/js';
import { mdiViewStream } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import { mdiAccountMultiple } from '@mdi/js';
import { mdiAccountGroup } from '@mdi/js';
import { mdiMusicClefTreble } from '@mdi/js';
import { mdiCamera } from '@mdi/js';
import { mdiVideoOutline } from '@mdi/js';
export interface LeftControlPanelProps{


}

export const LeftControlPanel:FunctionComponent<LeftControlPanelProps>=()=>{
    return(

        <div className={styles.controlPanel}>

            <h2 className={styles.logo}>
                <span className={styles.T}>T</span>
                <span className={styles.I}>I</span>
            </h2>
            <div className={styles.control}>
                <Icon path={mdiHomeImportOutline} size={1} color={"#F3F1F1"}/>
                <Icon path={mdiViewStream} size={1} color={"#F3F1F1"}/>
                <Icon path={mdiAccountMultiple} size={1} color={"#F3F1F1"}/>
                <Icon path={mdiAccountGroup} size={1} color={"#F3F1F1"}/>
                <Icon path={mdiMagnify} size={1} color={"#F3F1F1"}/>
                <Icon path={mdiVideoOutline} size={1} color={"#F3F1F1"}/>
                <Icon path={mdiMusicClefTreble}size={1} color={"#F3F1F1"}/>
            </div>
        </div>
    )
}