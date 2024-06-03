import React, { useState } from 'react'
import { useSocket, useAuth, useChat } from "@/context"

export const FormSendMsg = () => {
   const [ msg, setMsg ] = useState( "" )
   
   const { socket } = useSocket()
   const { user } = useAuth()
   const { chatState:{ currentChat } } = useChat()


   const onChange = ( { target } ) => {
      const { value } = target
      setMsg( value )
   }

   const onSubmit = ( e ) => {
      e.preventDefault()

      if ( msg.trim().length === 0 ) {
         return;
      }
      
      socket.emit( "send-msg", {
         to: currentChat,
         from: user.uid,
         msg: msg.trim(),
      } )
      
      setMsg( "" ) 
   }

   return <form onSubmit={onSubmit}>
      <div className="type_msg row">
         <div className="input_msg_write col-sm-9">
            <input type="text" className="write_msg" value={ msg } name="msg" onChange={ onChange } placeholder="Message..." autoComplete='off' />
         </div>
         <div className="col-sm-3 text-center">
            <button className="msg_send_btn mt-3" type="submit">
               enviar
            </button>
         </div>
      </div>
   </form>
}
