import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Explore,
  Search as SearchPage,
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
  Test,
} from "@pages/index";
import Trend from "@pages/Explore/components/Trend/Trend";
import ForYou from "@pages/Explore/components/ForYou/ForYou";
import Notifications from "@pages/Notification/Notifications";
import NotificationFeeds from "@pages/Notification/components/NotificationFeeds/NotificationFeeds";
import MessageSettings from "@pages/Messages/components/MessageSettings/MessageSettings";
import ConversationWindow from "@pages/Messages/components/ConversationWindow/ConversationWindow";
import Feeds from "@pages/Explore/components/Feeds/Feeds";
import {
  SettingsLandingPage,
  AccountPage,
  AppsAndSessionsPage,
  About,
  Accessibility,
  AccountData,
  AdsPreferences,
  AudienceAndTagging,
  ChangePassword,
  ConnectedAccounts,
  Contacts,
  DataUsage,
  Deactivate,
  Delegate,
  Display,
  DownloadData,
  Languages,
  LocationInfo,
  NotificationFilter,
  SortContents,
  YourPosts,
  SecurityAndAccountAccessPage,
  PrivacyAndSafetyPage,
  NotificationsPage,
  AccessibilityAndDisplayAndLanguagesPage,
  MuteAndBlockPage,
  NotificationPreferencePage,
  SecurityPage,
  AccountInfoPage,
  DeactivatePage,
} from "@pages/Settings/pages";
import { AuthLayout } from "@/layouts";
import { PageLayout } from "@shared/pages/layout";

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
                element: <SearchPage />,
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
              // 설정
              {
                path: `settings`,
                element: <Settings />,
                children: [
                  // landing 페이지
                  {
                    index: true,
                    element: <SettingsLandingPage />,
                  },
                  // 계정
                  {
                    path: "account",
                    element: <AccountPage />,
                  },
                  // 보안 및 계정 접근 권한
                  {
                    path: "security_and_account_access",
                    element: <SecurityAndAccountAccessPage />,
                  },
                  // 개인정보 및 보안
                  {
                    path: "privacy_and_safety",
                    element: <PrivacyAndSafetyPage />,
                  },
                  // 알림
                  {
                    path: "notifications",
                    element: <NotificationsPage />,
                  },
                  // 접근성, 표시, 언어
                  {
                    path: "accessibility_display_and_languages",
                    element: <AccessibilityAndDisplayAndLanguagesPage />,
                  },
                  // 추가 리소스
                  {
                    path: "about",
                    element: <About />,
                  },
                  // 계정 정보
                  {
                    path: "your_data/account",
                    element: <AccountInfoPage />,
                  },
                  // password 변경
                  {
                    path: "password",
                    element: <ChangePassword />,
                  },
                  // 다운로드 데이터
                  {
                    path: "download_data",
                    element: <DownloadData />,
                  },
                  // 계정 비활성화
                  {
                    path: "deactivate",
                    element: <DeactivatePage />,
                  },
                  // 보안
                  {
                    path: "security",
                    element: <SecurityPage />,
                  },
                  // 앱 및 세션
                  {
                    path: "apps_and_sessions",
                    element: <AppsAndSessionsPage />,
                  },
                  {
                    path: "connected_accounts",
                    element: <ConnectedAccounts />,
                  },
                  {
                    path: "delegate",
                    element: <Delegate />,
                  },
                  {
                    path: "connected_accounts",
                    element: <DownloadData />,
                  },
                  {
                    path: "delegate",
                    element: <Delegate />,
                  },
                  {
                    path: "audience_and_tagging",
                    element: <AudienceAndTagging />,
                  },
                  {
                    path: "your_posts",
                    element: <YourPosts />,
                  },
                  {
                    path: "content_you_see",
                    element: <SortContents />,
                  },
                  {
                    path: "mute_and_block",
                    element: <MuteAndBlockPage />,
                  },
                  {
                    path: "direct_messages",
                    element: <MessageSettings />,
                  },
                  {
                    path: "contacts",
                    element: <Contacts />,
                  },
                  {
                    path: "location_information",
                    element: <LocationInfo />,
                  },
                  {
                    path: "ads_preferences",
                    element: <AdsPreferences />,
                  },
                  {
                    path: "notifications/filters",
                    element: <NotificationFilter />,
                  },
                  {
                    path: "notifications/preferences",
                    element: <NotificationPreferencePage />,
                  },
                  {
                    path: "accessibility",
                    element: <Accessibility />,
                  },
                  {
                    path: "display",
                    element: <Display />,
                  },
                  {
                    path: "languages",
                    element: <Languages />,
                  },
                  {
                    path: "data_usage",
                    element: <DataUsage />,
                  },
                ],
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
  {
    path: "/test",
    element: <Test />,
  },
]);
