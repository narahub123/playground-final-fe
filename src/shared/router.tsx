import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "@layouts/index";
import {
  Home,
  Explore,
  Search,
  Notification,
  Messages,
  ProfilePage,
  Bookmarks,
  Settings,
  Auth,
  Login,
  Signin,
  Logout,
  Cover,
  NotFound,
} from "@pages/index";
import AuthLayout from "@layouts/AuthLayout/AuthLayout";

// 로그인 여부 확인
const login = true;
// 로그인 한 경우 유저 아이디
const id = "abc";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Cover />,
    children: [
      {
        path: "/",
        element: login ? <PageLayout /> : <AuthLayout />,
        children: login
          ? [
              {
                path: "home",
                element: <Home />,
              },
              {
                path: "explore",
                element: <Explore />,
              },
              {
                path: "search",
                element: <Search />,
              },
              {
                path: "notification",
                element: <Notification />,
              },
              {
                path: "messages",
                element: <Messages />,
              },
              {
                path: `${id}`,
                element: <ProfilePage />,
              },
              {
                path: `bookmarks`,
                element: <Bookmarks />,
              },
              {
                path: `settings`,
                element: <Settings />,
              },
              {
                path: "*",
                element: <NotFound />,
              },
            ]
          : [
              {
                index: true,
                element: <Auth />,
              },
              {
                path: `login`,
                element: <Login />,
              },
              {
                path: `signin`,
                element: <Signin />,
              },
              {
                path: `logout`,
                element: <Logout />,
              },
              {
                path: "*",
                element: <NotFound />,
              },
            ],
      },
    ],
  },
]);
