import React from "react";
import { groupBy, mapValues, toPairs, orderBy } from "lodash";
import moment from "moment";
import axios from "axios";

import { BACKEND_HOST } from "./config";
import { LoadableText } from "./Loadable";
import { PullRequest } from "./PullRequestSummary";
import { ActivityDateSummary, DateSummary } from "./DateSummary";

enum ActivityType {
  PULL_REQUEST = "Pull Requests",
  PULL_REQUEST_REVIEW = "PR Reviews",
}

interface ActivityHistoryItem {
  created_at: string;
  activity_type: ActivityType;
  pull_request: PullRequest;
}

const activityDateSummariesFromActivityHistory = (
  activityHistoryList: ActivityHistoryItem[]
): ActivityDateSummary[] => {
  const parsedActivityHistory = activityHistoryList.map((activityHistory) => ({
    ...activityHistory,
    created_at: moment(activityHistory.created_at, moment.ISO_8601, true),
  }));
  const activitiesByDate = groupBy(parsedActivityHistory, (activityHistory) =>
    activityHistory.created_at.startOf("date").format()
  );
  const activitiesByDateAndType = mapValues(
    activitiesByDate,
    (activityHistoryList) =>
      groupBy(
        activityHistoryList,
        (activityHistory) => activityHistory.activity_type
      )
  );
  const activityDateSummaries = orderBy(
    toPairs(activitiesByDateAndType),
    ([date]) => date,
    "desc"
  ).map(([date, activitiesByType]) => ({
    date: moment(date, moment.ISO_8601, true),
    pullRequests:
      ActivityType.PULL_REQUEST in activitiesByType
        ? activitiesByType[ActivityType.PULL_REQUEST].map(
            (activityHistory) => activityHistory.pull_request
          )
        : [],
    pullRequestReviews:
      ActivityType.PULL_REQUEST_REVIEW in activitiesByType
        ? activitiesByType[ActivityType.PULL_REQUEST_REVIEW].map(
            (activityHistory) => activityHistory.pull_request
          )
        : [],
  }));
  return activityDateSummaries;
};

interface ActivityHistoryListProps {
  dateSummaries: ActivityDateSummary[];
}

const getActivitiesByDate = async (): Promise<ActivityHistoryListProps> => {
  const response = await axios.get<ActivityHistoryItem[]>(
    `${BACKEND_HOST}/api/activities/history/`
  );
  const dateSummaries = activityDateSummariesFromActivityHistory(response.data);
  return { dateSummaries };
};

const ActivityHistoryList: React.FC<ActivityHistoryListProps> = (
  props: ActivityHistoryListProps
) => {
  return (
    <section>
      {props.dateSummaries.map((summary, i) => (
        <DateSummary key={i} {...summary} />
      ))}
    </section>
  );
};

export const LoadableActivityHistoryList: React.FC = () => (
  <LoadableText
    getProps={getActivitiesByDate}
    component={ActivityHistoryList}
  />
);
