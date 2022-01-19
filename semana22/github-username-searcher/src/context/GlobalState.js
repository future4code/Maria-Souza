import React, { useState } from "react"
import { GlobalContext } from "./GlobalContext"

export const GlobalState = (props) => {
    const [userInfo, setUserInfo] = useState({})
    const [repos, setRepos] = useState([])
    
    return(
        <GlobalContext.Provider value={{userInfo, setUserInfo, repos, setRepos}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState