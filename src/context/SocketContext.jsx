import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { useInitSocket } from '@/hooks'
import { useAuth } from "."

const initVal = {
    socket: null,
    online: false,
}

const SocketContext = createContext( initVal );

const socketUrl = process.env.REACT_APP_SOCKET_URL

export const useSocket = () => {
    return useContext( SocketContext )
}

export const SocketProvider = ( props ) => {

    const { socket, online, connectSocket, disconnectSocket } = useInitSocket( socketUrl );    
    const { user } = useAuth()

    useEffect( () => {
        if ( user.uid ) {
            connectSocket()
        }else{
        }
    }, [ user ] )

    useEffect( () => {
        if ( !user.uid ) {
            disconnectSocket()
        }
    }, [ user ] )

    useEffect( () => {
        socket?.on( "list-users", ( users ) => {
            console.log( users );
        } )
    }, [ socket ] )

    return (
        <SocketContext.Provider value={{ socket, online }} { ...props } />
    )
}