import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
    console.log("voltou")
  }

  return children;
};

export default PrivateRoute;