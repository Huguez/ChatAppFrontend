import React from 'react'
import { ChatItem } from "@/components"
import { useChat } from '@/context'
import { useAuth } from '@/context'

export const Sidebar  = () => {

   const { chatState: { users } } = useChat()
   const { user } = useAuth()
   
   return <div className="inbox_chat">
      {
         users.filter( u => u.uid !== user.uid ).map( 
            ( user, index ) => <ChatItem { ...user } key={ `${index}-${ user.email }` 
         }/> )
      }
   </div>
}
