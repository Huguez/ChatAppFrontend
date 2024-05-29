import { typesChat } from "@/types";

export const chatReducer = ( state, action ) => {
   switch ( action.type ) {
      case typesChat.loadedUsers:

         return { ...state, users: action.payload.users }

      case typesChat.selectChat: 
         
         if ( state.currentChat === action.payload.chat ) {
            return { ...state }
         }

         return { ...state, currentChat: action.payload.chat, messages: [] }

      case typesChat.newMsg:

         if ( state.currentChat === action.payload.from || state.currentChat === action.payload.to ) {
            
            return { ...state, messages: [ ...state.messages, action.payload ] }
         }

         return { ...state };
      case typesChat.setChat:
         
         return { ...state, messages: [ ...action.payload.allChat ] }
      case typesChat.emptyChatState:
         
         return {
            uid: null,
            currentChat: null,
            users: [],
            messages: []
         }
      default:
         return { ...state };
   }
}