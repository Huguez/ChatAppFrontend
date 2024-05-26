import { createContext, useState, useCallback, useContext } from "react"
import { myFetch } from "@/helpers"
import Swal from "sweetalert2"

const initVal = {
   user: {
      uid: null,
      nickname: null,
      email: null,
   },
   login: ( email, password ) => {}, 
   register: ( nickname, email, password ) => {},
   verifyToken: () => {},
   logout: () =>{} ,
}

const AuthContext = createContext( initVal )

export const useAuth = () => {
   return useContext( AuthContext )
}

export const AuthProvider = ( props ) => {

   const [ auth, setAuth ] = useState( initVal.user )

   const login = async ( email, password ) => {
      
      const { ok, user, token, msg, errors } = await myFetch( "auth/login", { email, password }, "POST" )

      if ( ok ) {
         const { uid } = user
         setAuth( { email: user.email, nickname: user.nickname, uid } )
         localStorage.setItem( "x-token", token )
      } else {
         if ( msg ) {
            Swal.fire( "Error", msg, "error" )
         }else{
            Object.values( errors ).forEach( ( { msg } ) => {
               Swal.fire( "Error", msg, "error" )
               console.log( msg );
            });
         }
      }
   }

   const register = async ( nickname, email, password ) => {

      const { ok, user, token, msg, errors } = await myFetch( "auth/register", { nickname,  email, password }, "POST" )

      if ( ok ) {
         const { uid } = user
         setAuth( { email: user.email, nickname: user.nickname, uid } )
         localStorage.setItem( "x-token", token )
      } else {
         if ( msg ) {
            Swal.fire( "Error", msg, "error" )
         }else{
            Object.values( errors ).forEach( ( { msg } ) => {
               Swal.fire( "Error", msg, "error" )
               console.log( msg );
            });
         }
      }
   }

   const verifyToken = useCallback( async () => {
     
      const { ok, token, user, msg } = await myFetch( "auth/renew", {}, "POST", true )
      
      if ( ok ) {
         setAuth( user )
         localStorage.setItem( "x-token", token )
      } else {
         setAuth( initVal.user )
      }

   }, [] )

   const logout = () => {
      localStorage.removeItem( "x-token" )
      setAuth( initVal.user )
   }

   const values = {
      user: {
         ...auth
      },
      login,
      register,
      verifyToken,
      logout,
   }

   return <AuthContext.Provider value={ values } {...props} />
}