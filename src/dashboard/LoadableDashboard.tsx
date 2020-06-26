import React from "react";
import axios from "axios";
import { Link } from "@material-ui/core";

import { LoadableView } from "../common/Loadable";
import { UnauthenticatedUser } from "../auth/UnauthenticatedUser";
import { UserAppBar } from "../nav/UserAppBar";
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
    <UserAppBar>
      Signed in as {props.full_name}.{" "}
      <Link href="/logout/" color="inherit" style={{ marginLeft: "1em" }}>
        Logout
      </Link>
    </UserAppBar>
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
