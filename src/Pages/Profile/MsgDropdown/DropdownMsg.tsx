import * as React from 'react'
import {FunctionComponent} from "react";
import {ExamplairMessage} from "../../../Msg/ExamplairMessage";
import styles from './DropdownMsgStyles.module.scss'
import Icon from "@mdi/react";
import { mdiChevronLeft } from '@mdi/js';
import {RefDropdown} from "../../../miniResourses/RefDropdown";
export interface DropdownMsgProps {

}
export const DropdownMsg:FunctionComponent<DropdownMsgProps>=()=>{
    return(
       <RefDropdown>
           <div className={styles.dropdownCont}>
            <div className={styles.open}>
                <Icon path={mdiChevronLeft} size={2} color={"lightgrey"} />
            </div>
            <div className={styles.messages}>
            <ExamplairMessage lastMsg={"hi,what are you doing?"}/>
            <ExamplairMessage lastMsg={"hi,what are you doing?"}/>
            <ExamplairMessage lastMsg={"hi,what are you doing?"}/>
            <ExamplairMessage lastMsg={"hi,what are you doing?"}/>
            <ExamplairMessage lastMsg={"hi,what are you doing?"}/>
            <ExamplairMessage lastMsg={"hi,what are you doing?"}/>
            </div>
           </div>
       </RefDropdown>

    )
}














