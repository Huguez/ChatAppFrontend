import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { RegisterPage } from '@/pages/RegisterPage'
import { LoginPage } from '@/pages/LoginPage'

export const AuthRouter = () => {

   return (
      <Routes>

         <Route path="/auth" element={ <Navigate to="/auth/login" replace /> } />
      </Routes>
   )  
}
