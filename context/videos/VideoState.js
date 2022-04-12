import videosContext from "./videosContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";






const VideoState = (props) => {

    const router = useRouter();
    const [urllocation, seturllocation] = useState('')


  





    return (
        <videosContext.Provider value={{ seturllocation,urllocation }}>
            {props.children}
        </videosContext.Provider>
    )
}




export default VideoState;