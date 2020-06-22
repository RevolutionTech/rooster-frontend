import React from "react";

import { LoadableUserAppBar } from "./LoadableUserAppBar";
import { LoadableActivityHistoryList } from "./LoadableActivityHistoryList";
import { LoadableInProgressSummary } from "./LoadableInProgressSummary";

const App: React.FC = () => (
  <main className="App">
    <LoadableUserAppBar />
    <LoadableInProgressSummary />
    <LoadableActivityHistoryList />
  </main>
);

export default App;
