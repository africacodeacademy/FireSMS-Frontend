import { Outlet, Navigate } from "react-router-dom";
import AuthUser from "./AuthUser";

function PrivateRoutes() {
  const auth = { token: AuthUser.authenticated };

  return auth.token ? <Outlet /> : <Navigate to="SignIn" />;
}

export default PrivateRoutes;
