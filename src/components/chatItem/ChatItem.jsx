import React from 'react'

export const ChatItem = () => {
   return (
      <div className="chat_list active_chat"> {/* if chating */}
         <div className="chat_people">
            <div className="chat_img"> 
                  <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
            </div>
            <div className="chat_ib">
                  <h5>
                     Some random name
                     <span className="chat_date">Date</span> {/* if chating */}
                     
                  </h5>
                  <span className="text-success">Online</span> {/* if chating */}
                  <p>Test, which is a new approach to have all solutions
                     astrology under one roof.</p> {/* if chating */}
            </div>
         </div>
      </div>
   )
}
