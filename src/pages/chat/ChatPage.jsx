import React from 'react'
import "./chat.css"
import { InboxPeople, CurrentChat } from "@/components"

export const ChatPage = () => {

   return <div className="messaging">
      <div className="inbox_msg">
   
         <InboxPeople />        

         <CurrentChat />
         {/* <ChatEmpty /> */}
         
      </div>

   </div>
}
