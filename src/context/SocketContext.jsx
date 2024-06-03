import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { useInitSocket } from '@/hooks'
import { useChat } from '@/context'
import { typesChat } from '@/types'
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
    const { dispatch } = useChat()

    useEffect( () => {
        if ( user.uid ) {
            connectSocket()
        }

        return () => {
            disconnectSocket()
        }

    }, [ user ] )

    useEffect( () => {
        if ( !user.uid ) {
            disconnectSocket()
        }

        return () => {
            disconnectSocket()
        }
    }, [ user ] )
    
    useEffect( () => {
        socket?.on( "list-users", ( users ) => {
            dispatch( { type: typesChat.loadedUsers, payload: { users } } )
        } )
    }, [ socket, dispatch ] )

    useEffect( () => {
        console.log( "send" );
		socket?.on( "send-msg", ( msg ) => {
			dispatch( { type: typesChat.newMsg, payload: msg } )
		} )
    }, [ socket, dispatch ] )

    return (
        <SocketContext.Provider value={{ socket, online }} { ...props } />
    )
}