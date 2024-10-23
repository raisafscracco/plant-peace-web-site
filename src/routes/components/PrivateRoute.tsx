import { useAuth } from "@clerk/clerk-react"
import { Navigate, Outlet } from "react-router-dom"


export const PrivateRoute = () => {
  const {isLoaded, isSignedIn} = useAuth() 

  if (!isLoaded) return <div>Loading...</div>

      
  if (!isSignedIn) return <Navigate to='/auth/login-page'/>

  return <Outlet/>
}


