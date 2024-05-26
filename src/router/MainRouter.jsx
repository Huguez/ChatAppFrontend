import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthRouter } from "."
import { LayoutChat, ChatPage } from '@/pages';


export const MainRouter = () => {
   
   return (
      <Router>
         <AuthRouter />

         <Routes>
            <Route path='' element={ <LayoutChat /> } >
               <Route exact path='' element={ <ChatPage /> }  />

               <Route path="*" element={ <Navigate to="" replace /> } />
            </Route>
         </Routes>
         
      </Router>
   );
}
