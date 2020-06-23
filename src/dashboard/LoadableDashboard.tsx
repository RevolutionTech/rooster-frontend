import React from "react";
import axios from "axios";

import { LoadableView } from "../common/Loadable";
import { UnauthenticatedUser } from "../auth/UnauthenticatedUser";
import { User, UserAppBar } from "./UserAppBar";
import { LoadableActivityHistoryList } from "./LoadableActivityHistoryList";
import { LoadableInProgressSummary } from "./LoadableInProgressSummary";

const getUser = async () => {
  const response = await axios.get<User>("/api/user/");
  return response.data;
};

const Dashboard: React.FC<User> = (props: User) => (
  <>
    <UserAppBar {...props} />
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
