import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) =>
{
  const isloggedId = localStorage.getItem("isLoggedId") === "true"
  console.log("User Authentication: ",isloggedId)
  return isloggedId ? children : <Navigate to ='/Login' replace />
}

export default PrivateRoute