import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { user } = useContext(Context);
  const token = localStorage.getItem("token");

  if (token && !user.isAuth) {
    return <div></div>;
  }

  return user.isAuth ? <Outlet /> : <Navigate to={LOGIN_ROUTE} />;
};

export default PrivateRoute;
