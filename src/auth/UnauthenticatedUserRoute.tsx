import React from "react";
import * as HttpStatus from "http-status-codes";
import { AxiosError } from "axios";
import { Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

import { NavContainer } from "../nav/NavContainer";

export const UnauthenticatedUserRoute: React.FC<AxiosError> = (
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
        <NavContainer
          userInfo={
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href="/login/github/"
            >
              Login with Github
            </Button>
          }
          menuDisabled={true}
        />
        <p>You must be signed in to view Rooster.</p>
      </>
    );
  } else {
    return <p>An unexpected error occurrred!</p>;
  }
};
