import React from 'react'

export const ChatItem = ( props ) => {
   const { nickname, updatedAt, online, email } = props

   return (
      <div className="chat_list active_chat"> {/* if chating */}
         <div className="chat_people">
            <div className="chat_img"> 
               <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
            </div>
            <div className="chat_ib">
                  <h5>
                     { email }
                     <span className="chat_date">{  updatedAt.split("T")[0] }</span> {/* if chating */}
                     
                  </h5>
                  { online ? 
                     <span className="text-success">Online</span> :
                     <span className="text-danger">Offline</span>
                  }
                  
                  {/* <p>Test, which is a new approach to have all solutions
                     astrology under one roof.</p> */}
            </div>
         </div>
      </div>
   )
}
