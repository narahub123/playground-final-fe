const pages = {
  settingsLandingPage: {
    pageTitle: "設定",
    placeholder: "設定を検索する",
    branchList: [
      {
        title: "アカウント",
        path: "account",
      },
      {
        title: "セキュリティとアカウントアクセス",
        path: "security_and_account_access",
      },
      {
        title: "プライバシーと安全",
        path: "privacy_and_safety",
      },
      {
        title: "通知",
        path: "notifications",
      },
      {
        title: "アクセシビリティ、表示、言語",
        path: "accessibility_display_and_languages",
      },
      {
        title: "収益化",
        path: "monetization",
      },
      {
        title: "追加リソース",
        path: "about",
      },
    ],
  },
  AccountPage: {
    pageTitle: "アカウント",
    description:
      "アカウント情報を確認したり、データ記録をダウンロードしたり、アカウント無効化オプションについて詳しく知ることができます。",
    branchList: [
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
    ],
  },
  SecurityAndAccountAccessPage: {
    pageTitle: "セキュリティとアカウントアクセス",
    description:
      "アカウントのセキュリティを管理し、接続されたアプリを含むアカウントの利用状況を追跡します。",
    branchList: [
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
    ],
  },
  PrivacyAndSafetyPage: {
    pageTitle: "プライバシーと安全",
    description: "PlayGroundで表示および共有される情報を管理します。",
    branchList: [
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
    ],
  },
  NotificationsPage: {
    pageTitle: "通知",
    description: "アクティビティ、関心事、推薦に関する通知の種類を選択します。",
    branchList: [
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
    ],
  },
  AccessibilityAndDisplayAndLanguagesPage: {
    pageTitle: "アクセシビリティ、表示、言語",
    description: "PlayGroundでコンテンツが表示される方法を管理します。",
    branchList: [
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
    ],
  },
  AppsAndSessionsPage: {
    pageTitle: "アプリとセッション",
    description:
      "アカウントおよびアカウントに接続されたアプリのログイン情報を確認します。",
    branchList: [
      // 연결된 앱
      {
        title: "接続されたアプリ",
        expl: "これらはあなたのアカウントに接続されたアプリです。これらのアプリがアクセスする情報を表示し、アクセスをブロックできます。",
        path: "connected_apps",
      },
      // 세션
      {
        title: "セッション",
        expl: "セッションは現在または過去にあなたのPlayGroundアカウントを使用したデバイスです。これらのセッションは現在あなたのアカウントでログインしています。各セッションからログアウトできます。",
        path: "sessions",
      },
      // 계정 엑세스 기록
      {
        title: "アカウントアクセス履歴",
        expl: "アプリで疑わしい活動が見つかった場合は、接続されたアプリからアクセスをブロックしてください。IPベースの位置情報は実際の位置と異なる場合があります。",
        path: "login_history",
      },
      // 로그인된 디바이스 및 앱
      {
        title: "ログイン中のデバイスとアプリ",
        path: "devices",
      },
    ],
  },
  MuteAndBlockPage: {
    pageTitle: "ミュートとブロック",
    description:
      "ミュートまたはブロックしたアカウント、単語、通知を管理します。",
    branchList: [
      {
        title: "ブロックしたアカウント",
        path: "blocked/all",
      },
      {
        title: "ミュートしたアカウント",
        path: "muted/all",
      },
      {
        title: "ミュートしたキーワード",
        path: "muted_keywords",
      },
      {
        title: "ミュートされた通知",
        path: "notifications/advanced_filters",
      },
    ],
  },
  NotificationPreferencePage: {
    pageTitle: "環境設定",
    description: "通知の種類ごとに環境設定を選択してください。",
    branchList: [
      // 푸시 알림
      {
        title: "プッシュ通知",
        path: "push_notifications",
      },
      // 이메일 알림
      {
        title: "メール通知",
        path: "email_notifications",
      },
    ],
  },
};

export default pages;
