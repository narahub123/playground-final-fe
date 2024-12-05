import { SettingsBranchType } from "@features/settings-setting/types/data";

// 계정
const accountBranchList: SettingsBranchType[] = [
  // 계정 정보
  {
    title: "アカウント情報",
    expl: "携帯電話番号やメールアドレスなどのアカウント情報を確認してください。",
    path: "account_data",
    icon: "user",
  },
  // 비밀번호 변경
  {
    title: "パスワード変更",
    expl: "いつでもパスワードを変更できます。",
    path: "password",
    icon: "key",
  },
  // 데이터 기록 다운로드
  {
    title: "データ記録ダウンロード",
    expl: "アカウントに保存された情報の種類についてのインサイトを得てください。",
    path: "download_data",
    icon: "download",
  },
  // 계정 비활성화
  {
    title: "アカウント無効化",
    expl: "アカウントを無効化する方法を確認してください。",
    path: "inactivate",
    icon: "crackedHeart",
  },
];

// 보안 및 계정 접근 권한
const securityAndAccountAccessBranchList: SettingsBranchType[] = [
  // 보안
  {
    title: "セキュリティ",
    path: "security",
    expl: "アカウントのセキュリティを管理します。",
    icon: "lock",
  },
  // 앱 및 세션
  {
    title: "アプリとセッション",
    path: "apps_and_sessions",
    expl: "アカウントと接続されたアプリにログインした時点の情報を確認します。",
    icon: "apps",
  },
  // 연결된 계정
  {
    title: "接続されたアカウント",
    path: "connected_accounts",
    expl: "PlayGroundにログインするために接続されたGoogle、Naver、またはKakaoアカウントを管理します。",
    icon: "twoWay",
  },
  // 위임
  {
    title: "委任",
    path: "delegate",
    expl: "共有アカウントを管理します。",
    icon: "delegate",
  },
];

// 개인정보 및 안전
const privacyAndSafetyBranchList: SettingsBranchType[] = [
  {
    title: "オーディエンス、メディア、およびタグ付け",
    expl: "Xで他の人々に公開する情報を管理します。",
    path: "audience_and_tagging",
  },
  {
    title: "私の投稿",
    expl: "投稿に関連する情報を管理します。",
    path: "my_tweets",
  },
  {
    title: "表示されるコンテンツ",
    expl: "トピックや関心事など、ユーザーの好みに基づいてPlayGroundに表示される情報を決定します。",
    path: "content_you_see",
  },
  {
    title: "ミュートおよびブロック",
    expl: "ミュートしたりブロックしたアカウント、単語、通知を管理します。",
    path: "mute_and_block",
  },
  {
    title: "メッセージ",
    expl: "私に直接メッセージを送れる対象を管理します。",
    path: "messages",
  },
  {
    title: "アカウント検索および連絡先",
    expl: "アカウント検索設定を制御し、インポートした連絡先を管理します。",
    path: "contacts",
  },
  {
    title: "広告設定",
    expl: "PlayGroundでの広告設定を管理します。",
    path: "ads_preferences",
  },
  {
    title: "位置情報",
    expl: "PlayGroundで環境をカスタマイズする際に使用される位置情報を管理します。",
    path: "location_information",
  },
];

// 알림
const notificationBranchList: SettingsBranchType[] = [
  // 필터
  {
    title: "フィルター",
    expl: "確認したい通知と確認したくない通知を選択してください。",
    path: "notifications/filters",
    icon: "",
  },
  // 환경 설정
  {
    title: "設定",
    expl: "通知の種類ごとに設定を選択してください。",
    path: "notifications/preferences",
    icon: "",
  },
];

// 접근성, 표시, 언어
const AccessibilityAndDisplayAndLanguages: SettingsBranchType[] = [
  // 접근성
  {
    title: "アクセシビリティ",
    expl: "色のコントラストや動作制限など、PlayGroundのユーザー環境を管理します。これらの設定はこのブラウザのすべてのPlayGroundアカウントに適用されます。",
    path: "accessibility",
    icon: "eyeoff",
  },
  // 표시
  {
    title: "表示",
    expl: "フォントサイズ、色、背景を管理します。これらの設定はこのブラウザのすべてのPlayGroundアカウントに適用されます。",
    path: "display",
    icon: "pen",
  },
  // 언어
  {
    title: "言語",
    expl: "ユーザー環境をカスタマイズする際に使用される言語を管理します。",
    path: "languages",
    icon: "map",
  },
  // 데이터 사용량
  {
    title: "データ使用量",
    expl: "PlayGroundはこのデバイスでユーザーの一部ネットワークデータの使用を制限します。",
    path: "data",
    icon: "barChart",
  },
  // 키보드 단축키
  {
    title: "キーボードショートカット",
    path: "/i/keyboard_shortcuts",
    icon: "shortcut",
  },
];

export {
  accountBranchList,
  securityAndAccountAccessBranchList,
  privacyAndSafetyBranchList,
  notificationBranchList,
  AccessibilityAndDisplayAndLanguages,
};
