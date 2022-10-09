import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../routes";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <Routes>
      {authRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<PrivateRoute />}>
          <Route key={path} path={path} element={<Component />} />
        </Route>
      ))}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
