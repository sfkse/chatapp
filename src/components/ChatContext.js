import React, { createContext, useState } from 'react'



export const ChatContext = createContext()

export const ChatProvider = props => {

    const [userAuth, setUserAuth] = useState()
    return (
        <ChatContext.Provider value={[userAuth, setUserAuth]}>
            {props.children}
        </ChatContext.Provider>
    )
}


