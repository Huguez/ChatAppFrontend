import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ChatPage, RegisterPage, LoginPage } from '@/pages';

export const MainRouter = () => {
   
   return (
      <Router>
         <div>
            <Routes>
               <Route exact path='/login' element={ <LoginPage /> }  />

               <Route exact path='/register' element={ <RegisterPage /> } />

               <Route exact path='/chat' element={ <ChatPage /> }  />
      
               <Route path="/*" element={ <Navigate to="/chat" replace /> } />
            </Routes>
         </div>
      </Router>
   );
}
