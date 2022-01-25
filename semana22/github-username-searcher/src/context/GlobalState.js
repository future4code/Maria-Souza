import React, { useState, createContext } from 'react'

export const GlobalContext = createContext()

export const GlobalState = (props) => {
    const [userData, setUserData] = useState({})
    const [userRepo, setUserRepo] = useState({})

    return (
        <GlobalContext.Provider value={{
            userData, 
            setUserData, 
            userRepo, 
            setUserRepo}}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState