import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "../layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
  },
]);
