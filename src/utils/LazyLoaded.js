import React from "react";

export const Dashboard = React.lazy(() => import("../containers/Dashboard/Dashboard"));
export const Login = React.lazy(() => import("../containers/Login/Login"));
export const NotFound = React.lazy(() =>
  import("../components/NotFound/NotFound")
);
