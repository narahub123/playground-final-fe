import "./shared/@common/styles/reset.css";
import "./shared/@common/styles/globals.css";
import "./shared/@common/styles/theme.css";
import "./shared/@common/styles/colorTheme.css";
import "./shared/@common/styles/fontSize.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router, store } from "./app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
