import * as React from 'react'
import {FunctionComponent} from "react";
import {Profile} from "./Profile/Profile";

export interface PageProps {

}

export const Page:FunctionComponent<PageProps>=()=>{
    return(
        <div>
<Profile nickname={"Ilya Tormanov"} id={"@qwe123a"} status={"Like tears in rain."}/>
        </div>
    )
}