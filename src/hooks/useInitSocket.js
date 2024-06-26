import { useCallback, useEffect, useState } from 'react';
import io from 'socket.io-client';

export const useInitSocket = ( serverPath ) => {
    
    const [ socket, setSocket ] = useState( null )
    const [ online, setOnline ] = useState(false);
    
    const connectSocket = useCallback( () => {
        
        const token = localStorage.getItem("x-token")

        const socketTemp = io.connect( serverPath, { 
            transports: ['websocket'], 
            autoConnect: true, 
            forceNew: true,
            query: {
                "x-token": token
            }
        } )

        setSocket( socketTemp )
    }, [ serverPath ] )

    const disconnectSocket = useCallback( () => {
        socket?.disconnect()
        setSocket( null )
    }, [ socket ] )


    useEffect(() => {
        setOnline( socket?.connected );
    }, [socket])

    useEffect(() => {
        socket?.on('connect', () => setOnline( true ));
    }, [ socket ])

    useEffect(() => {
        socket?.on('disconnect', () => setOnline( false ));
    }, [ socket ])

    return {
        socket,
        online,
        connectSocket,
        disconnectSocket,
    }
}