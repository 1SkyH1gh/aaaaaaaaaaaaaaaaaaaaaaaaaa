import * as React from 'react'
import {FunctionComponent, useState} from "react";
import {PhotoCollection} from "./PhotoCollection";
import {ProfileDescription} from "./ProfileDescription";
import {NewPost} from "./NewPost";
import {Post} from "./Post";
import styles from './UserContentFullStyles.module.scss'
import {FriendList} from "./FriendList";
import {stringify} from "querystring";

export interface UserContentFullProps{

}

export const UserContentFull:FunctionComponent<UserContentFullProps>=()=>{
    const [eventVal,setEventVal]=useState()
    const [click,setClick]=useState(false)

    return(
        <div className={styles.ContentBlock}>

        <PhotoCollection/>
        <div className={styles.contentColumn}>
        <div className={styles.contentRow}>

        <ProfileDescription  status={"empty status"}/>

            <NewPost handleClick={()=>setClick(true)} handleChange={(e:any)=>setEventVal(e.target.value)}/>
        </div>
            <div className={styles.Postrow}>
                <FriendList firstName={"nikita"}/>

                <Post content={"23423423regiejgoerijgoeigj"}/>:

            </div>
        </div>


        </div>
    )
}