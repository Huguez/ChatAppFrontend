import { useContext, createContext, useReducer } from "react"
import { chatReducer } from "./chatReducer"

const initVal = {
   uid: null,
   currentChat: null,
   users: [],
   messages: []
}

const ChatContext = createContext( initVal )

export const useChat = () => {
   return useContext( ChatContext )
}

export const ChatProvider = ( props ) => {

   const [ chatState, dispatch ] = useReducer( chatReducer , initVal )

   const values = {
      chatState,
      dispatch
   }

   return <ChatContext.Provider  value={ values } { ...props } />
}