import React from 'react'
import { Sidebar, SearchBox } from '@/components'

export const InboxPeople = () => {
   
   return (
      <div className="inbox_people">

         <SearchBox />
      

         <Sidebar />  {/* chatList */}
         
      </div>
   )  
}
