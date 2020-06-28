import React from "react";
import { BrowserRouter } from "react-router-dom";

import { LoadableUserRoutes } from "./auth/LoadableUserRoutes";

const App: React.FC = () => (
  <main className="App">
    <BrowserRouter>
      <LoadableUserRoutes />
    </BrowserRouter>
  </main>
);

export default App;
