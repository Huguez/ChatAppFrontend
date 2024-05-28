
const baseurl = process.env.REACT_APP_BASEURL

export const myFetch = async ( endpoint, data, method = "GET",  withToken = false, ) => {
   const url = `${ baseurl }/${ endpoint }`
   
   const headers = {
      'Content-type': 'application/json',
      ...( withToken ? {'x-token': localStorage.getItem( "x-token" ) } : {} ),
   }

   if ( method === "GET" ) {
      
      const resp = await fetch( url, {
         method,
         headers
      } )
      return await resp.json()
   } else {   

      const resp = await fetch( url, {
         method,
         headers,
         body: JSON.stringify( data ) 
      } )
      
      return await resp.json()
   }
}