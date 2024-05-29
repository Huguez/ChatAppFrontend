
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from "@/context"

export const LayoutChat = () => {
   
   const { user } = useAuth()

   if ( !user.uid ) {
      return <Navigate to="/auth/login" />
   }

   return (
      <Outlet />
   )
}
