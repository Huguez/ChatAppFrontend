import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { RegisterPage, LoginPage, ChatPage, LayoutAuth, LayoutChat } from '@/pages';
import { useAuth } from "@/context"

export const MainRouter = () => {
   
   const { verifyToken  } = useAuth()

   useEffect( () => {
      verifyToken()
   }, [verifyToken] )
   
   return (
      <Router>
         <Routes>
            <Route path='auth' element={ <LayoutAuth /> } >
               <Route path='login'  element={ <LoginPage /> } />
               <Route path='register'  element={ <RegisterPage /> } />
            </Route>
            
            <Route path='chat' element={ <LayoutChat /> } >
               <Route path='/chat' index element={ <ChatPage /> }  />
            </Route>

            <Route path="*" element={ <Navigate to="/chat" replace /> } />
         </Routes>
      </Router>
   );
}
