import React from "react";
import moment from "moment";

import { ActivitySummary } from "./ActivitySummary";
import { PullRequest, PullRequestSummary } from "./PullRequestSummary";

const relativeDateDisplay = (date: moment.Moment): string =>
  date.calendar(null, {
    lastWeek: "dddd",
    lastDay: "[Yesterday]",
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    nextWeek: "[Next] dddd",
    sameElse: "dddd, MMMM Do YYYY",
  });

export interface ActivityDateSummary {
  date: moment.Moment;
  pullRequests: PullRequest[];
  pullRequestReviews: PullRequest[];
}

export const DateSummary: React.FC<ActivityDateSummary> = (
  props: ActivityDateSummary
) => (
  <>
    <h2>{relativeDateDisplay(props.date)}</h2>
    <ActivitySummary
      title="Pull Requests"
      activities={props.pullRequests}
      render={(data) => <PullRequestSummary {...data} />}
    />
    <ActivitySummary
      title="PR Reviews"
      activities={props.pullRequestReviews}
      render={(data) => <PullRequestSummary {...data} />}
    />
  </>
);
