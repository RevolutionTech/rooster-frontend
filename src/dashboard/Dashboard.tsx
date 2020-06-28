import React from "react";

import { LoadableActivityHistoryList } from "./LoadableActivityHistoryList";
import { LoadableInProgressSummary } from "./LoadableInProgressSummary";

export const Dashboard: React.FC = () => (
  <>
    <LoadableInProgressSummary />
    <LoadableActivityHistoryList />
  </>
);
