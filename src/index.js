import React from "react";
import ReactDOM from "react-dom/client";

import App from "App";
import GlobalStyle from "components/common/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </div>
);
