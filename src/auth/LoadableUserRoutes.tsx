import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import { LoadableView } from "../common/Loadable";
import { NavContainer } from "../nav/NavContainer";
import { Dashboard } from "../dashboard/Dashboard";
import { LoadableSettingsForm } from "../settings/LoadableSettingsForm";
import { UnauthenticatedUserRoute } from "./UnauthenticatedUserRoute";

interface User {
  full_name: string;
}

const getUser = async () => {
  const response = await axios.get<User>("/api/user/");
  return response.data;
};

const AuthenticatedUserRoutes: React.FC<User> = (props: User) => (
  <>
    <NavContainer userInfo={<>Signed in as {props.full_name}.</>} />
    <Route path="/" exact component={Dashboard} />
    <Route path="/settings/" exact component={LoadableSettingsForm} />
  </>
);

export const LoadableUserRoutes: React.FC = () => (
  <LoadableView
    getProps={getUser}
    component={AuthenticatedUserRoutes}
    failureComponent={UnauthenticatedUserRoute}
  />
);
