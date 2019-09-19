import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './NewPostStyles.module.scss'
import Icon from "@mdi/react";
import {mdiEmoticonWinkOutline, mdiLibraryMusicOutline, mdiStickerEmoji} from "@mdi/js";

export interface NewPostProps {
handleChange:(e:any)=>void,
    handleClick:()=>void
}

export const NewPost:FunctionComponent<NewPostProps>=(props)=>{
    return(
        <div className={styles.createPost}>
            <form className={styles.form}>
                <input placeholder={"create masterpiece"} className={styles.input} onChange={props.handleChange}/>
            </form>
            <div className={styles.add_post_content}>
                <div className={styles.add_post_icon}>
                    <Icon path={mdiEmoticonWinkOutline } size={1} color={"#444444"}/>
                    <Icon path={mdiStickerEmoji} size={1} color={"#444444"}/>
                    <Icon path={mdiLibraryMusicOutline} size={1} color={"#444444"}/>
                </div>
                <div className={styles.submit} onClick={props.handleClick}>Create:)</div>
            </div>

        </div>
    )
}