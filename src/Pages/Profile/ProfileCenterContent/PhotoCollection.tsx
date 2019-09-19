import * as React from  'react'
import {FunctionComponent} from "react";
import styles from "./PhotoCollectionStyles.module.scss";
import avaminiF from "../../../album1.jpg";
import avaminiS from "../../../album2.jpg";
import avaminiT from "../../../album3.jpg";

export interface PhotoCollectionProps {

}

export const PhotoCollection:FunctionComponent<PhotoCollectionProps>=()=>{
    return(
        <div className={styles.photoCollectionDemo}>
            <img src={avaminiF} className={styles.photoDemo}/>
            <img src={avaminiS} className={styles.photoDemo}/>
            <img src={avaminiT} className={styles.photoDemo}/>
        </div>
    )
}