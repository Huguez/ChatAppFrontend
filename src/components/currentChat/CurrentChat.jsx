import React from 'react'
import { FormSendMsg, ListMessages } from "@/components"

export const CurrentChat = () => {
   return <div className="mesgs">

      <ListMessages />
      
      <FormSendMsg />
      
   </div>
}
