import React from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '@/context'

export const SearchBox = () => {
   
   const { logout } = useAuth()
   const navigate = useNavigate()
   
   const handleLogout = () => {
      logout()
      navigate("/auth/login")
   }

   return <>
      <div className="headind_srch">
            <div className="recent_heading mt-2">
               <h4>Recientes</h4>
            </div>
            <div className="srch_bar">
               <div className="stylish-input-group">
                  <button className="btn text-danger" onClick={ handleLogout } >
                     Log out
                  </button>
               </div>
            </div>
      </div>
   </>
   
}
