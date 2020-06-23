import React from "react";
import * as HttpStatus from "http-status-codes";
import { AxiosError } from "axios";
import { Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

import { UserAppBar } from "../nav/UserAppBar";

export const UnauthenticatedUser: React.FC<AxiosError> = (
  props: AxiosError
) => {
  const response = props.response;
  if (
    response &&
    response.status === HttpStatus.FORBIDDEN &&
    response.data.detail === "Authentication credentials were not provided."
  ) {
    return (
      <>
        <UserAppBar>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href="/login/github/"
          >
            Login with Github
          </Button>
        </UserAppBar>
        <p>You must be signed in to view Rooster.</p>
      </>
    );
  } else {
    return <p>An unexpected error occurrred!</p>;
  }
};
