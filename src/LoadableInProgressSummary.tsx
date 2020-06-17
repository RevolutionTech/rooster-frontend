import React from "react";
import axios from "axios";

import { LoadableText } from "./Loadable";
import { JiraTicket, JiraTicketSummary } from "./JiraTicketSummary";

interface ActivitiesInProgress {
  jira_tickets: JiraTicket[];
}

const getActivitiesInProgress = async (): Promise<ActivitiesInProgress> => {
  const response = await axios.get<ActivitiesInProgress>(
    "/api/activities/in-progress/"
  );
  return response.data;
};

const InProgressSummary: React.FC<ActivitiesInProgress> = (
  props: ActivitiesInProgress
) =>
  props.jira_tickets.length > 0 ? (
    <section>
      <h2>Tickets In Progress</h2>
      <ul>
        {props.jira_tickets.map((ticket, i) => (
          <li key={i}>
            <JiraTicketSummary {...ticket} />
          </li>
        ))}
      </ul>
    </section>
  ) : null;

export const LoadableInProgressSummary: React.FC = () => (
  <LoadableText
    getProps={getActivitiesInProgress}
    component={InProgressSummary}
  />
);
