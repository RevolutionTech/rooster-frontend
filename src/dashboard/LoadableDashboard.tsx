import React from "react";
import axios from "axios";

import { LoadableView } from "../common/Loadable";
import { UnauthenticatedUser } from "../auth/UnauthenticatedUser";
import { NavContainer } from "../nav/NavContainer";
import { LoadableActivityHistoryList } from "./LoadableActivityHistoryList";
import { LoadableInProgressSummary } from "./LoadableInProgressSummary";

interface User {
  full_name: string;
}

const getUser = async () => {
  const response = await axios.get<User>("/api/user/");
  return response.data;
};

const Dashboard: React.FC<User> = (props: User) => (
  <>
    <NavContainer>Signed in as {props.full_name}.</NavContainer>
    <LoadableInProgressSummary />
    <LoadableActivityHistoryList />
  </>
);

export const LoadableDashboard: React.FC = () => (
  <LoadableView
    getProps={getUser}
    component={Dashboard}
    failureComponent={UnauthenticatedUser}
  />
);
