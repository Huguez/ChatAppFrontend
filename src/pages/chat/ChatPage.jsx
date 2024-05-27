import React from 'react'
import "./chat.css"
import { InboxPeople, CurrentChat, ChatEmpty } from "@/components"
import { useChat } from '@/context'

export const ChatPage = () => {
   const { chatState:{ currentChat } } = useChat()

   return <div className="messaging">
      <div className="inbox_msg">
   
         <InboxPeople />        

         { currentChat ? 
            <CurrentChat /> :
            <ChatEmpty />
         }
         
      </div>

   </div>
}
