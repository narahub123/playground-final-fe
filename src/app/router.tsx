import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Explore,
  Search as SearchPage,
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
  About,
  Accessibility,
  AccountData,
  AdsPreferences,
  AppAndSession,
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
  MuteAndBlock,
  NotificationFilter,
  NotificationPreferences,
  Security,
  SortContents,
  YourPosts,
} from "@pages/Settings/pages";
import SettingsBranchContainer from "@pages/Settings/layouts/SettingsBranchContainer/SettingsBranchContainer";
import { AuthLayout } from "@/layouts";
import Constant from "@/constants";
import {
  MainContentListLayout,
  MainLayout,
  PageLayout,
} from "@shared/pages/layout";
import { Description, Icon, Title } from "@shared/@common/ui/components";
import { Search, Tab } from "@shared/pages/ui";
import { tabListExample } from "@shared/pages/data";
import { SelectionProvider } from "@shared/pages/model/providers";
import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import {
  AccessibilityAndDisplayAndLanguages,
  accountBranchList,
} from "@shared/@common/data/settings/languages/ko_KR/settings-mid-branch-list";

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
                    element: (
                      <SettingsBranchContainer
                        title={Constant.settings.security.title}
                        detail={Constant.settings.security.detail}
                        settingsBranchList={
                          Constant.settings.security.settingsBranchList
                        }
                      />
                    ),
                  },
                  // 개인정보 및 보안
                  {
                    path: "privacy_and_safety",
                    element: (
                      <SettingsBranchContainer
                        title={Constant.settings.privacy.title}
                        detail={Constant.settings.privacy.detail}
                        settingsBranchList={
                          Constant.settings.privacy.settingsBranchList
                        }
                      />
                    ),
                  },
                  // 알림
                  {
                    path: "notifications",
                    element: (
                      <SettingsBranchContainer
                        title={Constant.settings.notifications.title}
                        detail={Constant.settings.notifications.detail}
                        settingsBranchList={
                          Constant.settings.notifications.settingsBranchList
                        }
                      />
                    ),
                  },
                  // 접근성, 표시, 언어
                  {
                    path: "accessibility_display_and_languages",
                    element: (
                      <SettingsBranchContainer
                        title={Constant.settings.accessibility.title}
                        detail={Constant.settings.accessibility.detail}
                        settingsBranchList={
                          Constant.settings.accessibility.settingsBranchList
                        }
                      />
                    ),
                  },
                  // 추가 리소스
                  {
                    path: "about",
                    element: <About />,
                  },
                  // 계정 정보
                  {
                    path: "your_data/account",
                    element: <AccountData />,
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
                    element: <Deactivate />,
                  },
                  // 보안
                  {
                    path: "security",
                    element: <Security />,
                  },
                  // 앱 및 세션
                  {
                    path: "apps_and_sessions",
                    element: <AppAndSession />,
                  },
                  {
                    path: "connected_accounts",
                    element: <ConnectedAccounts />,
                  },
                  {
                    path: "delegate",
                    element: <Delegate />,
                  },
                  // 앱 및 세션
                  {
                    path: "apps_and_sessions",
                    element: <AppAndSession />,
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
                    element: <MuteAndBlock />,
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
                    path: "filters",
                    element: <NotificationFilter />,
                  },
                  {
                    path: "preferences",
                    element: <NotificationPreferences />,
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
