import React, { createContext, useEffect, useState } from 'react'
import { getSignedInUser } from '../firebase/auth'



export const ChatContext = createContext()

export const ChatProvider = props => {
    const [userAuth, setUserAuth] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getSignedInUser(setUserAuth, setLoading)
    }, [])
    const value = {
        userAuth,
        setUserAuth,
        setLoading
    }
    return (
        <ChatContext.Provider value={value}>
            {!loading && props.children}
        </ChatContext.Provider>
    )
}


