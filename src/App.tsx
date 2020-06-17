import React from "react";

import { LoadableActivityHistoryList } from "./LoadableActivityHistoryList";
import { LoadableInProgressSummary } from "./LoadableInProgressSummary";

const App: React.FC = () => (
  <main className="App">
    <LoadableInProgressSummary />
    <LoadableActivityHistoryList />
  </main>
);

export default App;
