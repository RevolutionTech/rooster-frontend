import React from "react";

export interface JiraTicket {
  issue_key: string;
  summary: string;
  url: string;
}

export const JiraTicketSummary: React.FC<JiraTicket> = (props: JiraTicket) => (
  <>
    <a href={props.url}>{props.issue_key}</a>: {props.summary}
  </>
);
