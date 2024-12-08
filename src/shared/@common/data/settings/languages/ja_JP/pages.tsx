import { countryNamesJap } from "@shared/@common/data/countries";
import { setBackgroundTheme } from "@shared/@common/model/slices/settingsSlice";
import { UserType } from "@shared/@common/types";
import { SettingsType } from "@shared/@common/types";
import { HyperLink } from "@shared/@common/ui/components";
import {
  calculateAge,
  convertBirthToLocalString,
  getLangName,
  translateGender,
} from "@shared/@common/utils";

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
      "アカウント情報を確認したり、データ記録をダウンロードしたり、アカウントの無効化オプションについて詳しく学ぶことができます。",
    branchList: [
      {
        title: "アカウント情報",
        expl: "電話番号やメールアドレスなどのアカウント情報を表示します。",
        path: "/settings/your_data/account",
        icon: "user",
      },
      {
        title: "パスワードの変更",
        expl: "いつでもパスワードを変更できます。",
        path: "/settings/password",
        icon: "key",
      },
      {
        title: "データ記録のダウンロード",
        expl: "アカウントに保存されている情報の種類についての洞察を得られます。",
        path: "/settings/download_data",
        icon: "download",
      },
      {
        title: "アカウントの無効化",
        expl: "アカウントを無効化する方法を学びます。",
        path: "/settings/deactivate",
        icon: "crackedHeart",
      },
    ],
  },
  SecurityAndAccountAccessPage: {
    pageTitle: "セキュリティとアカウントアクセス",
    description:
      "アカウントのセキュリティを管理し、接続されたアプリを含むアカウントの利用を追跡します。",
    branchList: [
      {
        title: "セキュリティ",
        expl: "アカウントのセキュリティ設定を管理します。",
        path: "/settings/security",
        icon: "lock",
      },
      {
        title: "アプリとセッション",
        expl: "アカウントと接続されたアプリへのログイン情報を確認します。",
        path: "/settings/apps_and_sessions",
        icon: "apps",
      },
      {
        title: "接続されたアカウント",
        expl: "PlayGroundログイン用に接続されたGoogle、Naver、またはKakaoアカウントを管理します。",
        path: "/settings/connected_accounts",
        icon: "twoWay",
      },
      {
        title: "代理アクセス",
        expl: "共有アカウントを管理します。",
        path: "/settings/delegate",
        icon: "delegate",
      },
    ],
  },
  PrivacyAndSafetyPage: {
    pageTitle: "プライバシーと安全",
    description: "PlayGroundで表示および共有される情報を管理します。",
    branchList: [
      {
        title: "オーディエンス、メディア、タグ付け",
        expl: "Xで他の人に公開する情報を管理します。",
        path: "/settings/audience_and_tagging",
        icon: "users",
      },
      {
        title: "自分の投稿",
        expl: "投稿に関連する情報を管理します。",
        path: "/settings/my_tweets",
        icon: "penLine",
      },
      {
        title: "表示コンテンツ",
        expl: "トピックや興味に基づいてPlayGroundに表示される情報を決定します。",
        path: "/settings/content_you_see",
        icon: "content",
      },
      {
        title: "ミュートとブロック",
        expl: "ミュートまたはブロックしたアカウント、単語、通知を管理します。",
        path: "/settings/mute_and_block",
        icon: "mute",
      },
      {
        title: "メッセージ",
        expl: "自分に直接メッセージを送れる対象を管理します。",
        path: "/settings/messages",
        icon: "message",
      },
      {
        title: "アカウント検索と連絡先",
        expl: "アカウント検索設定を制御し、インポートされた連絡先を管理します。",
        path: "/settings/contacts",
        icon: "contact",
      },
      {
        title: "広告の設定",
        expl: "PlayGroundでの広告設定を管理します。",
        path: "/settings/ads_preferences",
        icon: "ads",
      },
      {
        title: "位置情報",
        expl: "PlayGroundで環境をカスタマイズするために使用される位置情報を管理します。",
        path: "/settings/location_information",
        icon: "pin",
      },
    ],
  },
  NotificationsPage: {
    pageTitle: "通知",
    description:
      "アクティビティ、興味、おすすめに関する通知の種類を選択します。",
    branchList: [
      {
        title: "フィルター",
        expl: "確認したい通知と確認したくない通知を選択します。",
        path: "/settings/notifications/filters",
        icon: "filter",
      },
      {
        title: "設定",
        expl: "通知の種類ごとに設定を選択します。",
        path: "/settings/notifications/preferences",
        icon: "preferences",
      },
    ],
  },
  AccessibilityAndDisplayAndLanguagesPage: {
    pageTitle: "アクセシビリティ、表示、言語",
    description: "PlayGroundのコンテンツ表示方法を管理します。",
    branchList: [
      {
        title: "アクセシビリティ",
        expl: "色のコントラストや動作制限などの設定を管理します。この設定は、このブラウザ上のすべてのPlayGroundアカウントに適用されます。",
        path: "/settings/accessibility",
        icon: "eyeoff",
      },
      {
        title: "表示",
        expl: "フォントサイズ、色、背景を管理します。この設定は、このブラウザ上のすべてのPlayGroundアカウントに適用されます。",
        path: "/settings/display",
        icon: "pen",
      },
      {
        title: "言語",
        expl: "ユーザー体験をカスタマイズするために使用される言語を管理します。",
        path: "/settings/languages",
        icon: "map",
      },
      {
        title: "データ使用量",
        expl: "PlayGroundがこのデバイスで使用するネットワークデータを制限します。",
        path: "/settings/data",
        icon: "barChart",
      },
      {
        title: "キーボードショートカット",
        path: "/i/keyboard_shortcuts",
        icon: "shortcut",
      },
    ],
  },

  AppsAndSessionsPage: {
    pageTitle: "アプリとセッション",
    description: "アカウントと接続されたアプリへのログイン情報を確認します。",
    branchList: [
      {
        title: "接続されたアプリ",
        path: "/settings/connected_apps",
      },
      {
        title: "セッション",
        path: "/settings/sessions",
      },
      {
        title: "アカウントアクセス履歴",
        path: "/settings/login_history",
      },
      {
        title: "ログイン中のデバイスとアプリ",
        path: "/settings/devices",
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
        path: "/settings/blocked/all",
      },
      {
        title: "ミュートしたアカウント",
        path: "/settings/muted/all",
      },
      {
        title: "ミュートした単語",
        path: "/settings/muted_keywords",
      },
      {
        title: "ミュート状態の通知",
        path: "/settings/notifications/advanced_filters",
      },
    ],
  },
  NotificationPreferencePage: {
    pageTitle: "設定",
    description: "通知の種類ごとに設定を選択します。",
    branchList: [
      {
        title: "プッシュ通知",
        path: "/settings/push_notifications",
      },
      {
        title: "メール通知",
        path: "/settings/email_notifications",
      },
    ],
  },
  SecurityPage: {
    pageTitle: "セキュリティ",
    description: "アカウントのセキュリティを管理します。",
    list: [
      {
        title: "2段階認証",
        type: "card",
        comp: {
          title: "2段階認証",
          path: "/settings/account/login_verification",
        },
        description:
          "PlayGroundのパスワードに加えて、もう1つの認証方法を要求することで、アカウントを不正アクセスから保護します。SMS、認証アプリ、またはセキュリティキーから選択できます。",
      },
      {
        title: "ID認証",
        type: "card",
        comp: {
          title: "ID認証",
          path: "/settings/account/id_verification",
        },
        description:
          "アカウントの真正性を確認するために、承認済みのID形式をアップロードしてください。提供された情報は本人確認のためにのみ使用され、安全に処理されます。",
      },
      {
        title: "パスワードリセット",
        type: "checkbox",
        comp: {
          text: "パスワードリセット保護",
          reducer: setBackgroundTheme,
          initialValue: false,
        },
        description:
          "追加の保護手段として、PlayGroundのパスワードをリセットするには、メールアドレスまたは電話番号を確認する必要があります。",
      },
    ],
  },
  AccountInfoPage: {
    pageTitle: "アカウント情報",
    branchList: (user: UserType & SettingsType) => [
      // 사용자 아이디
      {
        title: "ユーザーID",
        path: "/settings/screen_name",
        expl: `@${user.userId}`,
      },
      // 휴대폰
      {
        title: "携帯電話",
        path: "/settings/phone",
      },
      // 이메일
      {
        title: "メール",
        path: "/settings/email",
        expl: user.email,
      },
      // 인증 여부
      {
        title: "認証状況",
        path: "",
        expl: user.isAuthenticated ? "認証済み" : "未認証",
      },
      // 비공개 게시물
      {
        title: "非公開投稿",
        path: "/settings/audience_and_tagging",
        expl: user.isVisible ? "はい" : "いいえ",
      },
      // 계정 생성
      {
        title: "アカウント作成",
        path: "",
        expl: user.regDate.toLocaleString(),
      },
      // 국가
      {
        title: "国",
        path: "/settings/country",
        expl: countryNamesJap[
          user.language
            .split("-")[1]
            .toLowerCase() as keyof typeof countryNamesJap
        ],
      },
      // 언어
      {
        title: "言語",
        path: "/settings/language",
        expl: getLangName(user.language)?.text,
      },
      // 성별
      {
        title: "性別",
        path: "/settings/gender",
        expl: translateGender(user.gender),
      },
      // 생년월일
      {
        title: "生年月日",
        path: "",
        expl: convertBirthToLocalString(user.birth),
      },
      // 연령
      {
        title: "年齢",
        path: "age",
        expl: calculateAge(user.birth),
      },
      // 자동화
      {
        title: "自動化",
        path: "automation",
        expl: "自動化アカウントを管理します。",
      },
    ],
  },
  DeactivatePage: {
    pageTitle: "アカウントの無効化",
    section1: {
      title: "アカウントが無効になります。",
      description:
        "PlayGroundアカウントの無効化プロセスを開始します。表示名、@ユーザー名、公開プロフィールは、PlayGround.com、iOS用PlayGround、Android用PlayGroundに表示されなくなります。",
    },
    section2: {
      title: "その他知っておくべきこと",
      list: [
        "誤ってまたは意図せずにPlayGroundアカウントを無効化した場合、30日以内であれば復元可能です。",
        "一部のアカウント情報は、GoogleやBingなどの検索エンジンでまだアクセス可能である場合があります。",
        <>
          @ユーザー名を変更するためにアカウントを無効化する必要はありません。{" "}
          <HyperLink text="設定" path="/settings/password" out={false} />
          でユーザー名を更新してください。
        </>,
        <>
          現在の@ユーザー名やメールアドレスを他のPlayGroundアカウントで
          使用する場合は、このアカウントを無効化する前に{" "}
          <HyperLink
            text="変更"
            path="/settings/your_data/account"
            out={false}
          />
          してください。
        </>,
        "PlayGroundデータをダウンロードするには、アカウントを無効化する前にリクエストとダウンロードのプロセスを完了する必要があります。無効化されたアカウントにはデータダウンロードリンクを送信できません。",
      ],
    },
    deactivate: {
      text: "無効化",
    },
  },
};

export default pages;
