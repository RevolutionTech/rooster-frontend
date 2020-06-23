import React from "react";

import { LoadableUserAppBar } from "./dashboard/LoadableUserAppBar";
import { LoadableActivityHistoryList } from "./dashboard/LoadableActivityHistoryList";
import { LoadableInProgressSummary } from "./dashboard/LoadableInProgressSummary";

const App: React.FC = () => (
  <main className="App">
    <LoadableUserAppBar />
    <LoadableInProgressSummary />
    <LoadableActivityHistoryList />
  </main>
);

export default App;
