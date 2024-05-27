import { typesChat } from "@/types";

export const chatReducer = ( state, action ) => {
   switch ( action.type ) {
      case typesChat.loadedUsers:

         return { ...state, users: action.payload.users }
      default:
         return state;
   }
}