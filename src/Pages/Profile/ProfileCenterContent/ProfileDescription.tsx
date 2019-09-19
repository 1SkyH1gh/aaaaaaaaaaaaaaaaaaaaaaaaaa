import * as React from 'react'
import {FunctionComponent} from "react";
import styles from "./ProfileDescription.module.scss";
import Icon from "@mdi/react";
import {mdiLibraryMusicOutline, mdiPostOutline, mdiStarOutline} from "@mdi/js";

import {MiniUserConst} from "../Profile";

export interface ProfileDescriptionProps{

    status?:string
}

export const ProfileDescription:FunctionComponent<ProfileDescriptionProps>=(props)=>{
    return(
        <div className={styles.Profile}>

            <div className={styles.descriptionProfile}>
                <span className={styles.nickStatus}>
                    <div className={styles.nickname}>ilya Tormanov</div>
                    <div className={styles.tag}>@qwea</div>
                </span>

                <span className={styles.status}>{props.status}</span>
            </div>
            <div className={styles.profileContent}>
                <Icon path={mdiPostOutline} size={1} color={"#444444"}/>
                <Icon path={mdiLibraryMusicOutline} size={1} color={"#444444"}/>
                <Icon path={mdiStarOutline} size={1} color={"#444444"}/>
            </div>
        </div>
    )
}