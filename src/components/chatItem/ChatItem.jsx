import React, { useState } from 'react'
import { typesChat } from "@/types";
import moment from "moment"
import { useChat } from '@/context'
import { myFetch } from "@/helpers"

export const ChatItem = ( props ) => {
   const { uid, nickname, updatedAt, online } = props
   const { chatState:{ currentChat }, dispatch } = useChat()
   
   const [ lastMsg, setLastMsg ] = useState( "" )

   const handleSelect = async  () => {
      dispatch( { type: typesChat.selectChat, payload: { chat: uid } } )

      const { ok, chat } = await myFetch( `message/chatByUser/${ uid }`, {}, "GET", true )

      dispatch( { type: typesChat.setChat, payload: { allChat: ok ? chat : []  } } )
      
      // setLastMsg( chat[chat.length-1].message )

   }

   return (
      <div className={`chat_list ${  currentChat === uid  ? "active_chat" : "" }`} onClick={ handleSelect }>
         <div className="chat_people">
            <div className="chat_img"> 
               <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
            </div>
            <div className="chat_ib">
                  <h5>
                     { nickname }
                     { currentChat === uid && <span className="chat_date">{ moment( updatedAt ).format("DD/MM/YYYY") }</span> }
                     
                  </h5>
                  { online ? 
                     <span className="text-success">Online</span> :
                     <span className="text-danger">Offline</span>
                  }
                  
                  { currentChat === uid &&
                     <p>{ lastMsg }</p> 
                  }
            </div>
         </div>
      </div>
   )
}
