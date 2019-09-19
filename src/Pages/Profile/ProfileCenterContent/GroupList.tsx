import * as React from 'react'
import {FunctionComponent} from "react";
import {PostHeader} from "../../../miniResourses/PostHeader";

export interface GroupListProps {

}

export const GroupList:FunctionComponent<GroupListProps>=()=>{
    return(
        <div>
            <PostHeader/>
        </div>
    )
}