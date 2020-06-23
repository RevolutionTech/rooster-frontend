import React from "react";
import * as HttpStatus from "http-status-codes";
import axios, { AxiosError } from "axios";

import { assertNever } from "../common/assert";
import { LoadableState, useLoadable } from "../common/Loadable";
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

export const LoadableDashboard: React.FC = () => {
  const loadable = useLoadable<User, AxiosError>(getUser);
  if (loadable.state === LoadableState.LOADING) {
    return <p>Loading...</p>;
  } else if (loadable.state === LoadableState.FAILURE) {
    const response = loadable.error.response;
    if (
      response &&
      response.status === HttpStatus.FORBIDDEN &&
      response.data.detail === "Authentication credentials were not provided."
    ) {
      return <p>User is not logged in!</p>;
    } else {
      return <p>An unexpected error occurrred!</p>;
    }
  } else if (loadable.state === LoadableState.SUCCESS) {
    return <Dashboard {...loadable.data} />;
  } else {
    assertNever(loadable);
  }
};
