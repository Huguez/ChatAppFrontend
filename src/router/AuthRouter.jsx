import React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'
import { LayoutAuth, RegisterPage, LoginPage } from '@/pages';

export const AuthRouter = () => {

   return (
      <Routes>
         <Route path='auth' element={ <LayoutAuth /> } >

            <Route exact path='login' element={ <LoginPage /> }  />

            <Route exact path='register' element={ <RegisterPage /> } />

            <Route path="" element={ <Navigate to="login" replace /> } />
         </Route>
      </Routes>
   )  
}
