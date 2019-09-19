import * as React from 'react'
import {FunctionComponent} from "react";
import styles from "./PostHeaderStyles.module.scss";
import avatar from "../avaMini.jpg";
import Icon from "@mdi/react";
import {mdiChevronDownBoxOutline} from "@mdi/js";
import {AvaMini} from "./AvaMini";

export interface PostHeaderProps {

}

export const PostHeader:FunctionComponent<PostHeaderProps>=()=>{
    return(
        <div className={styles.newPost_header}>
            <div className={styles.newPost_header_left}>
              <AvaMini/>
                <div className={styles.nickname_data}>
                    <div>Ilya Tormanov</div>
                    <div>18.08.2021</div>
                </div>
            </div>
            <Icon path={mdiChevronDownBoxOutline} size={1} className={styles.newPost_header_right}/>

        </div>
    )
}