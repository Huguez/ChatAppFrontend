import React, { useEffect, useRef } from 'react'
import { useChat, useAuth } from "@/context"
import moment from 'moment';


export const ListMessages = () => {

   const { chatState: { messages }  } = useChat()
   const { user } = useAuth()
   const listMsg = useRef()

   // console.log( messages );

   const getDateMsg = ( param )  => {
      
      const fecha = moment( param ).format("DD MMMM YYYY - HH:MM");

      return fecha
   }

   useEffect( () => {
      listMsg.current.scrollTo( 0, listMsg.current.scrollHeight )
   }, [ messages ] )

   return <div className="msg_history" ref={ listMsg } >
      {
         messages.map( ( { id, message, to, createdAt }, index ) => (
            ( to === user.uid  ) ?
            <div className="incoming_msg mb-4" key={ `${ id }-${index}` } >
               <div className="incoming_msg_img">
                  <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
               </div>
               <div className="received_msg">
                  <div className="received_withd_msg">
                        <p>{ message }</p>
                        <span className="time_date"> { getDateMsg( createdAt ) } </span>
                  </div>
               </div>
            </div> :
            <div className="outgoing_msg" key={ `${ id }-${index}` }>
               <div className="sent_msg">
                  <p> { message } </p>
                  <span className="time_date"> { getDateMsg( createdAt ) }</span>
               </div>
            </div>
         ) )
      }
   </div>
}
