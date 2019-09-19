import * as React from 'react'
import {FunctionComponent} from "react";
import {AvaMini} from "../../../miniResourses/AvaMini";
import { mdiCloseCircleOutline } from '@mdi/js';
import Icon from '@mdi/react'
import styles from './RecommendedComponents.module.scss'
import {PostHeader} from "../../../miniResourses/PostHeader";
import {Button} from "../../../miniResourses/Button";

export interface RecommendedFriendsProps {
   id:number,
nickname:string,
    status:string
}

export const RecommendedFriends:FunctionComponent<RecommendedFriendsProps>=(props)=>{
    return(
        <div className={styles.rec_container}>
           <PostHeader/>
           <div className={styles.bnt_cont}>
            <Button text={"add"}/>
           </div>
        </div>
    )
}