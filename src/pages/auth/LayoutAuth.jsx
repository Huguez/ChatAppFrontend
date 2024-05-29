
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from "@/context"

export const LayoutAuth = () => {

   const { user } = useAuth()

   if ( user.uid ) {
      return <Navigate to="/chat" />
   }

   return (
      <Outlet />
   )
}
