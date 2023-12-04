import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useAuthContext();
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }
  return children;
};

export default RequireAuth;
