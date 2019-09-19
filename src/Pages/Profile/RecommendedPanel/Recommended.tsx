import * as React from 'react'
import {FunctionComponent} from "react";
import {RecommendedFriends} from "./RecommendedFriends";
import styles from './RecommendedComponents.module.scss'
export interface RecommendedProps {

}

export const Recommended:FunctionComponent<RecommendedProps>=()=>{
    return(
            <div className={styles.contRec}>
                <RecommendedFriends nickname={"Ilya Tormanov"} status={"emptyStatus"} id={5}/>
                <RecommendedFriends nickname={"Nikita Teluykov"} status={"tolstiy,no krasivyi"} id={5}/>
                <RecommendedFriends nickname={"Alexandra Griwenko"} status={"mama sumawedwego"} id={5}/>
            </div>
    )
}