
import { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from "@/context"

export const LayoutAuth = () => {

   const { user, verifyToken } = useAuth()

   useEffect( () => {
      verifyToken()
   }, [verifyToken] )

   if ( user.uid ) {
      return <Navigate to="/" />
   }

   return (
      <Outlet />
   )
}
