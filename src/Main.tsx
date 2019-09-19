import * as React from 'react'
import {FunctionComponent, useState} from "react";
import styles from "./App.module.scss";
import {LeftControlPanel} from "./LeftControlPanel";
import {Header} from "./Header";
import {MusicContentTopBlock} from "./MusicContentTopBlock";


import {Page} from "./Pages/Page";
import Popover from "react-tiny-popover";
import {RefDropdown} from "./miniResourses/RefDropdown";
import {MusicDrpPanelContainer} from "./MusicDrpPanel/MusicDrpPanelContainer";
export interface MainProps {

}

export const Main:FunctionComponent<MainProps>=()=>{
    const [music,showMusic]=useState()
    return(
        <div>
            <div className={styles.app}>

                <LeftControlPanel/>
                <div className={styles.main}>
                    <Header/>
                    <Popover isOpen={music}
                             position={"bottom"}
                             content={
                            <MusicDrpPanelContainer/>
                    }>
                      <MusicContentTopBlock handleMusicClick={()=>showMusic(true)}/>
                    </Popover>
                    <Page/>
                </div>
            </div>
        </div>
    )
}