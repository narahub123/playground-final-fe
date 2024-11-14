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
import Trend from "@pages/Explore/components/Trend/Trend";
import ForYou from "@pages/Explore/components/ForYou/ForYou";
import Notifications from "@pages/Notification/Notifications";
import NotificationFeeds from "@pages/Notification/components/NotificationFeeds/NotificationFeeds";
import MessageSettings from "@pages/Messages/components/MessageSettings/MessageSettings";
import ConversationWindow from "@pages/Messages/components/ConversationWindow/ConversationWindow";
import Feeds from "@pages/Explore/components/Feeds/Feeds";

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
                children: [
                  { path: "", element: <ForYou /> },
                  { path: "tabs/trending", element: <Trend /> },
                  { path: "tabs/for_you", element: <ForYou /> },
                ],
              },
              {
                path: `search`,
                element: <Search />,
              },
              {
                path: "notifications",
                element: <Notifications />,
                children: [
                  {
                    path: "",
                    element: <NotificationFeeds />,
                  },
                  {
                    path: "verified",
                    element: <NotificationFeeds />,
                  },
                  {
                    path: "mentions",
                    element: <NotificationFeeds />,
                  },
                ],
              },
              {
                path: "messages",
                element: <Messages />,
                children: [
                  {
                    path: "settings",
                    element: <MessageSettings />,
                  },
                  {
                    path: `${id}`,
                    element: <ConversationWindow />,
                  },
                ],
              },
              {
                path: `${id}`,
                element: <ProfilePage />,
                children: [
                  {
                    path: "",
                    element: <Feeds list={[]} />,
                  },
                  {
                    path: "with_replies",
                    element: <Feeds list={[]} />,
                  },
                  {
                    path: "media",
                    element: <Feeds list={[]} />,
                  },
                  {
                    path: "likes",
                    element: <Feeds list={[]} />,
                  },
                ],
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
