import { SettingsMainBranchType } from "@features/settings-setting/types";
import { countryNamesJap } from "../../countries";

const settingsBranchList: SettingsMainBranchType[] = [
  // アカウント
  {
    title: "アカウント",
    expl: "アカウント情報を確認し、データ記録をダウンロードしたり、アカウント無効化オプションについて詳しく知ることができます。",
    path: "account",
    midBranches: [
      // アカウント情報
      {
        title: "アカウント情報",
        expl: "電話番号やメールアドレスなどのアカウント情報を確認してください。",
        path: "account_data",
        icon: "user",
      },
      // パスワード変更
      {
        title: "パスワード変更",
        expl: "いつでもパスワードを変更できます。",
        path: "password",
        icon: "key",
      },
      // データ記録のダウンロード
      {
        title: "データ記録のダウンロード",
        expl: "アカウントに保存されている情報の種類に関するインサイトを得ることができます。",
        path: "download_data",
        icon: "download",
      },
      // アカウントの無効化
      {
        title: "アカウントの無効化",
        expl: "アカウントを無効化する方法を学びます。",
        path: "inactivate",
        icon: "crackedHeart",
      },
    ],
  },
  // セキュリティとアカウントアクセス
  {
    title: "セキュリティとアカウントアクセス",
    expl: "アカウントのセキュリティを管理し、アカウントに接続されたアプリを含め、アカウントの使用状況を追跡します。",
    path: "security_and_account_access",
    midBranches: [
      // セキュリティ
      {
        title: "セキュリティ",
        path: "security",
        expl: "アカウントのセキュリティを管理します。",
        icon: "lock",
      },
      // アプリとセッション
      {
        title: "アプリとセッション",
        path: "apps_and_sessions",
        expl: "アカウントや接続されたアプリのログイン情報を確認します。",
        icon: "apps",
        subBranches: [
          // 接続されたアプリ
          {
            title: "接続されたアプリ",
            expl: "アカウントに接続されたアプリを表示し、これらのアプリがアクセスしている情報を確認およびアクセスをブロックすることができます。",
            path: "connected_apps",
          },
          // セッション
          {
            title: "セッション",
            expl: "セッションは現在または過去にPlayGroundアカウントを使用したデバイスを指します。各セッションからログアウトできます。",
            path: "sessions",
          },
          // アカウントアクセス履歴
          {
            title: "アカウントアクセス履歴",
            expl: "アプリで疑わしい活動が発見された場合、接続されたアプリからのアクセスをブロックします。IPベースの位置情報は実際の位置と異なる場合があります。",
            path: "login_history",
          },
          // ログインデバイスとアプリ
          {
            title: "ログインデバイスとアプリ",
            path: "devices",
          },
        ],
      },
      // 接続されたアカウント
      {
        title: "接続されたアカウント",
        path: "connected_accounts",
        expl: "PlayGroundにログインするために接続されたGoogle、Naver、またはKakaoアカウントを管理します。",
        icon: "twoWay",
      },
      // デリゲート
      {
        title: "デリゲート",
        path: "delegate",
        expl: "共有アカウントを管理します。",
        icon: "delegate",
      },
    ],
  },
  // プライバシーと安全
  {
    title: "プライバシーと安全",
    expl: "PlayGroundで表示および共有される情報を管理します。",
    path: "privacy_and_safety",
    midBranches: [
      {
        title: "オーディエンス、メディア、およびタグ付け",
        expl: "PlayGroundで他の人に公開される情報を管理します。",
        path: "audience_and_tagging",
      },
      {
        title: "自分の投稿",
        expl: "投稿に関連する情報を管理します。",
        path: "my_tweets",
      },
      {
        title: "表示されるコンテンツ",
        expl: "トピックや関心事項など、ユーザーの好みに基づいてPlayGroundで表示される情報を決定します。",
        path: "content_you_see",
      },
      {
        title: "ミュートとブロック",
        expl: "ミュートしたりブロックしたりしたアカウント、キーワード、通知を管理します。",
        path: "mute_and_block",
        subBranches: [
          {
            title: "ブロックされたアカウント",
            path: "blocked/all",
          },
          {
            title: "ミュートされたアカウント",
            path: "muted/all",
          },
          {
            title: "ミュートされたキーワード",
            path: "muted_keywords",
          },
          {
            title: "ミュート状態の通知",
            path: "notifications/advanced_filters",
          },
        ],
      },
      {
        title: "メッセージ",
        expl: "自分に直接メッセージを送ることができる対象を管理します。",
        path: "messages",
      },
      {
        title: "アカウント検索と連絡先",
        expl: "アカウント検索の設定を制御し、インポートされた連絡先を管理します。",
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
  // 通知
  {
    title: "通知",
    expl: "活動、関心事項、おすすめに関する通知の種類を選択します。",
    path: "notifications",
    midBranches: [
      // フィルタ
      {
        title: "フィルタ",
        expl: "確認したい通知と確認したくない通知を選択します。",
        path: "notifications/filters",
        icon: "",
      },
      // 設定
      {
        title: "設定",
        expl: "通知タイプ別に設定を選択します。",
        path: "notifications/preferences",
        icon: "",
        subBranches: [
          // プッシュ通知
          {
            title: "プッシュ通知",
            path: "push_notifications",
          },
          // メール通知
          {
            title: "メール通知",
            path: "email_notifications",
          },
        ],
      },
    ],
  },
  // アクセシビリティ、表示、言語
  {
    title: "アクセシビリティ、表示、言語",
    expl: "PlayGroundのコンテンツ表示方法を管理します。",
    path: "accessibility_display_and_languages",
    midBranches: [
      // アクセシビリティ
      {
        title: "アクセシビリティ",
        expl: "色のコントラストや動きの制限など、PlayGroundのユーザーエクスペリエンスを管理します。この設定は、このブラウザのすべてのPlayGroundアカウントに適用されます。",
        path: "accessibility",
        icon: "eyeoff",
      },
      // 表示
      {
        title: "表示",
        expl: "フォントサイズ、色、背景を管理します。この設定は、このブラウザのすべてのPlayGroundアカウントに適用されます。",
        path: "display",
        icon: "pen",
      },
      // 言語
      {
        title: "言語",
        expl: "ユーザーエクスペリエンスをカスタマイズする際に使用される言語を管理します。",
        path: "languages",
        icon: "map",
      },
      // データ使用量
      {
        title: "データ使用量",
        expl: "PlayGroundがこのデバイスでユーザーの一部のネットワークデータの使用を制限します。",
        path: "data",
        icon: "barChart",
      },
      // キーボードショートカット
      {
        title: "キーボードショートカット",
        path: "/i/keyboard_shortcuts",
        icon: "shortcut",
      },
    ],
  },
  // 収益化
  {
    title: "収益化",
    path: "monetization",
  },
  // その他のリソース
  {
    title: "その他のリソース",
    expl: "他のページをチェックして、PlayGround製品やサービスに関する有用な情報を詳しく確認してください。",
    path: "about",
  },
];

const ja_JP = {
  languageSelect: {
    wrongCountryCode: "無効な国コード",
    countryNames: countryNamesJap,
  },
  // 프로필 이미지
  profileImage: {
    imgAlt: {
      login: "のプロフィール写真",
      logout: "プロフィール写真",
    },
    ariaLabel: "プロフィール写真を変更するにはクリックしてください。",
  },
  // 아미지
  image: {
    imgAlt: "画像",
  },
  // 언어 설정
  colorTheme: {
    colorThemeTitles: {
      cornflowerblue: "基本色",
      red: "赤色",
      green: "緑色",
      yellow: "黄色",
      purple: "紫色",
      black: "黒色",
    },
  },
  // 글자 크기 설정
  fontSize: {
    fontSizeTitles: {
      xs: "非常に小さい",
      s: "小さい",
      b: "標準",
      l: "大きい",
      xl: "非常に大きい",
    },
  },
  // MainHeader
  mainHeader: {
    backwardIconTitle: "前のページへ",
  },
  // Settings 브랜치 리스트
  settingsBranchList,
};

export default ja_JP;
