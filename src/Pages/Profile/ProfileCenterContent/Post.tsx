import * as React from 'react'
import {FunctionComponent} from "react";
import styles from "./PostStyles.module.scss";
import avatar from "../../../avaMini.jpg";
import Icon from "@mdi/react";
import {mdiChevronDownBoxOutline, mdiCommentProcessingOutline, mdiCommentQuoteOutline, mdiHeartOutline} from "@mdi/js";
import {PostHeader} from "../../../miniResourses/PostHeader";

export interface PostProps {
content:string
}

export const Post:FunctionComponent<PostProps>=(props)=>{
    return(
        <div className={styles.newPost}>
            <PostHeader/>
            <div className={styles.newPost_content}>
                {props.content}
            </div>
            <div className={styles.newPost_statistic}>
                <Icon path={mdiCommentProcessingOutline} size={1}/>
                <Icon path={mdiHeartOutline} size={1}/>
                <Icon path={mdiCommentQuoteOutline} size={1}/>
            </div>

        </div>
    )
}