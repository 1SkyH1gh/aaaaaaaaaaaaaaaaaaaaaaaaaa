import * as React from 'react'
import {FunctionComponent} from "react";

import styles from './ProfileStyles.module.scss'

import {Fon} from "../../miniResourses/Fon";
import {AvatarFull} from "./UserControl/AvatarFull";
import {UserContentFull} from "./ProfileCenterContent/UserContentFull";

import {AvaMini} from "../../miniResourses/AvaMini";
import {MiniUser} from "../../Types";
import {Recommended} from "./RecommendedPanel/Recommended";
export const MiniUserConst:MiniUser={
    id:1,
    name:{firstName:"Ilya",lastName:"tormanov"},

    tag:"@qweqfw"

}




export interface ProfileProps{
nickname:string
    id?:string
    status?:string
}
export const Profile:FunctionComponent<ProfileProps>=(props)=>{
    return(
        <div className={styles.ProfileFull}>
          <Fon/>
            <AvatarFull/>

                <UserContentFull/>
            <Recommended/>





        </div>
    )
}