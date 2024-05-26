import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { LayoutAuth, RegisterPage, LoginPage, LayoutChat, ChatPage } from '@/pages';


export const MainRouter = () => {
   
   return (
      <Router>
         <Routes>
            <Route path='auth' element={ <LayoutAuth /> } >

               <Route  path='login' element={ <LoginPage /> }  />

               <Route path='register' element={ <RegisterPage /> } />

               <Route path="" element={ <Navigate to="login" replace /> } />
            </Route>

            <Route path='chat' element={ <LayoutChat /> } >
               <Route index element={ <ChatPage /> }  />
            </Route>

            <Route path="*" element={ <Navigate to="chat" replace /> } />
         </Routes>
      </Router>
   );
}
