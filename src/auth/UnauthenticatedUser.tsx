import React from "react";
import * as HttpStatus from "http-status-codes";
import { AxiosError } from "axios";

export const UnauthenticatedUser: React.FC<AxiosError> = (
  props: AxiosError
) => {
  const response = props.response;
  if (
    response &&
    response.status === HttpStatus.FORBIDDEN &&
    response.data.detail === "Authentication credentials were not provided."
  ) {
    return <p>User is not logged in!</p>;
  } else {
    return <p>An unexpected error occurrred!</p>;
  }
};
