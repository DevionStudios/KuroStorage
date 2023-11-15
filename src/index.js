import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  StoicWallet,
  InfinityWallet,
  InternetIdentity,
  NFID,
} from "@connect2ic/core/providers";
import { createClient } from "@connect2ic/core";
import { Connect2ICProvider } from "@connect2ic/react";
import "@connect2ic/core/style.css";

const client = createClient({
  providers: [
    new StoicWallet(),
    new InfinityWallet(),
    new InternetIdentity(),
    new NFID(),
  ],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Connect2ICProvider client={client}>
      <App />
    </Connect2ICProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
