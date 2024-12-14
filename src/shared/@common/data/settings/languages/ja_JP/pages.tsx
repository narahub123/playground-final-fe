import { countryNamesJap } from "@shared/@common/data/countries";
import regExp from "@shared/@common/data/regExp";
import {
  getAddImgExpl,
  getAddLocationInfo,
  getAllowBehavioralAds,
  getAllowLocationAds,
  getAllowMessages,
  getAutoplay,
  getColorContrast,
  getDataSaver,
  getDisplaySensitiveMedia,
  getFindByEmail,
  getFindByPhone,
  getHideMessages,
  getIsPrivate,
  getProtectVideo,
  getQualityFilter,
  getReduceMotion,
  getShowRead,
  getTagSensitiveMedia,
  getMuteNotFollowing,
  getMuteNotFollower,
  getMuteNewAccount,
  getMuteDefaultProfile,
  getMuteEmailAuthenticated,
  getMutePhoneAuthenticated,
  getTwoFactorAuthentication,
  getHideLabel,
  getAllowTaggingWhom,
} from "@shared/@common/model/selectors";
import {
  setAddImgExpl,
  setAddLocationInfo,
  setAllowBehavioralAds,
  setAllowLocationAds,
  setAllowMessages,
  setAutoplay,
  setBackgroundTheme,
  setColorContrast,
  setDataSaver,
  setDisplaySensitiveMedia,
  setFindByEmail,
  setFindByPhone,
  setHideMessages,
  setIsPrivate,
  setProtectVideo,
  setQualityFilter,
  setReduceMotion,
  setShowRead,
  setTagSensitiveMedia,
  setMuteNotFollowing,
  setMuteNotFollower,
  setMuteNewAccount,
  setMuteDefaultProfile,
  setMuteEmailAuthenticated,
  setMutePhoneAuthenticated,
  setTwoFactorAuthentication,
  setHideLabel,
  setAllowTaggingWhom,
} from "@shared/@common/model/slices/settingsSlice";
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
        path: "/settings/your_posts",
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
        path: "/settings/languages",
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
        path: "/settings/your_data/age",
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
  AudienceAndTaggingPage: {
    pageTitle: "オーディエンス、メディア、タグ付け",
    description: "PlayGroundで他の人と共有する情報を管理します。",
    list: [
      {
        title: "",
        type: "checkbox",
        selector: getIsPrivate,
        comp: {
          text: "投稿を非公開に設定",
          reducer: setIsPrivate,
        },
        description:
          "選択すると、フォローしている人だけが自分の投稿やアカウント情報を閲覧できます。",
      },
      {
        title: "",
        type: "checkbox",
        selector: getProtectVideo,
        comp: {
          text: "動画を保護",
          reducer: setProtectVideo,
        },
        description:
          "この設定を有効にすると、投稿内の動画をデフォルトでダウンロードできなくなります。この設定は今後の投稿に適用され、過去の投稿には適用されません。",
      },
      {
        title: "",
        type: "card",
        comp: {
          title: "写真のタグ付け",
          path: "/settings/tagging",
          expl: "誰でも自分をタグ付けすることを許可",
        },
        description: "",
      },
    ],
  },
  YourPostsPage: {
    pageTitle: "自分の投稿",
    description: "投稿に関連する情報を管理します。",
    list: [
      {
        type: "checkbox",
        selector: getTagSensitiveMedia,
        comp: {
          text: "投稿するメディアを潜在的にセンシティブなコンテンツとしてマークする",
          reducer: setTagSensitiveMedia,
        },
        description:
          "有効にすると、投稿する写真や動画は、センシティブなコンテンツを見たくない人にセンシティブとして表示されます。",
      },
      {
        type: "card",
        comp: {
          title: "投稿に位置情報を追加する",
          path: "/settings/location",
        },
      },
    ],
  },
  ContentYouSeePage: {
    pageTitle: "表示されるコンテンツ",
    description:
      "トピックや関心事などのユーザーの好みに基づいて、PlayGroundに表示される情報を決定します。",
    checkboxItem: {
      type: "checkbox",
      selector: getDisplaySensitiveMedia,
      comp: {
        text: "センシティブな内容を含む可能性のあるメディアを表示する",
        reducer: setDisplaySensitiveMedia,
      },
    },

    branchList: (user: UserType) => [
      {
        title: "トピック",
        path: `/${user.userId}/topics`,
      },
      {
        title: "関心事",
        path: `/settings/your_data/your_interests`,
      },
      {
        title: "探索設定",
        path: `/settings/explore`,
      },
      {
        title: "検索設定",
        path: `/settings/search`,
      },
    ],
  },
  MessageSettingPage: {
    pageTitle: "メッセージ",
    list: [
      {
        text: "次のユーザーからのメッセージリクエストを許可",
        detail:
          "フォローしているユーザーから送信されたメッセージは常に受信できます。",
        type: "checkboxlist",
        selector: getAllowMessages,
        comp: [
          {
            text: "受信しない",
            reducer: setAllowMessages,
            value: "none",
          },
          {
            text: "認証済みユーザー",
            reducer: setAllowMessages,
            value: "authenticated",
          },
          {
            text: "すべてのユーザー",
            reducer: setAllowMessages,
            value: "all",
          },
        ],
      },
      {
        title: "",
        type: "checkbox",
        selector: getHideMessages,
        comp: {
          text: "低品質なメッセージをフィルタリングする",
          reducer: setHideMessages,
        },
        description:
          "スパムや低品質な内容が含まれていると判断されたメッセージリクエストを非表示にします。これらのリクエストは、メッセージリクエストリストの下部にある別の受信箱に送られます。必要に応じて確認することができます。",
        top: true,
        disabled: true,
      },
      {
        title: "",
        type: "checkbox",
        selector: getShowRead,
        comp: {
          text: "既読通知を表示",
          reducer: setShowRead,
        },
        description:
          "メッセージをやり取りする人が、あなたがメッセージを確認したときに通知されるようにします。既読通知はメッセージリクエストには表示されません。",
        top: true,
      },
    ],
  },
  ContactsPage: {
    pageTitle: "アカウント検索と連絡先",
    description:
      "アカウント検索設定を制御し、インポートした連絡先を管理します。",
    list: [
      {
        title: "検索可能性",
        detail:
          "あなたのメールアドレスや電話番号を知っている人がPGであなたを見つけて連絡できるかを決定します。",
        type: "checkbox",
        selector: getFindByEmail,
        comp: {
          text: "メールアドレスを知っている人がPGで私を見つけることを許可する",
          reducer: setFindByEmail,
        },
        description:
          "メールアドレスを知っている人がPGであなたを見つけて連絡できるようにします。",
      },
      {
        type: "checkbox",
        selector: getFindByPhone,
        comp: {
          text: "電話番号を知っている人がPGで私を見つけることを許可する",
          reducer: setFindByPhone,
        },
        description:
          "電話番号を知っている人がPGであなたを見つけて連絡できるようにします。",
      },
      {
        title: "連絡先",
        detail: "モバイルデバイスからインポートした連絡先を管理します。",
        type: "card",
        comp: {
          title: "連絡先の管理",
          path: "/settings/contacts_dashboard",
        },
        top: true,
      },
    ],
  },
  AdsPreferencesPage: {
    pageTitle: "広告設定",
    description: "PlayGroundで広告設定を管理します。",
    checkbox: {
      type: "checkbox",
      selector: getAllowBehavioralAds,
      comp: {
        text: "パーソナライズ広告",
        reducer: setAllowBehavioralAds,
      },
      description:
        "PlayGroundでのアクティビティに基づいた広告が常に表示されます。この設定を有効にすると、PlayGround内外でPlayGround広告主の広告をカスタマイズするために、PlayGroundのアクティビティとパートナーが提供するその他のオンラインアクティビティや情報を組み合わせることができます。",
    },
    branchList: [
      {
        title: "興味関心",
        path: "/settings/your_twitter_data/twitter_interests",
      },
      {
        title: "広告主リスト",
        path: "/settings/your_twitter_data/audiences",
      },
    ],
  },
  LocationInfoPage: {
    pageTitle: "位置情報",
    description:
      "PlayGroundでの体験をパーソナライズするために使用される位置情報を管理します。",
    checkbox: {
      type: "checkbox",
      selector: getAllowLocationAds,
      comp: {
        text: "訪問した場所を基にパーソナライズ",
        reducer: setAllowLocationAds,
      },
      description:
        "PlayGroundは、登録した場所や現在の場所などの情報を使用して、常にパーソナライズされたコンテンツを提供します。この設定を有効にすると、訪問した場所に基づいてパーソナライズされたコンテンツを提供することができます。",
    },
    branchList: [
      {
        title: "訪問した場所",
        path: "/settings/your_twitter_data/locations",
      },
      {
        title: "投稿に位置情報を追加",
        path: "/settings/location",
      },
      {
        title: "探索設定",
        path: "/settings/location",
      },
    ],
  },
  NotificationFilterPage: {
    pageTitle: "フィルター",
    description: "表示したい通知と表示したくない通知を選択してください。",
    list: [
      {
        type: "checkbox",
        selector: getQualityFilter,
        comp: {
          text: "品質フィルター",
          reducer: setQualityFilter,
        },
        description:
          "選択すると、重複や自動投稿などのコンテンツがフィルタリングされます。フォロー中または最近やり取りしたアカウントの通知には適用されません。",
      },
      {
        type: "card",
        comp: {
          title: "ミュート通知",
          path: "/settings/notifications/advanced_filters",
        },
      },
    ],
  },
  AccessibilityPage: {
    pageTitle: "アクセシビリティ",
    description:
      "色のコントラストや動作制限など、PlayGroundのユーザーエクスペリエンスを管理します。これらの設定は、このブラウザ上のすべてのPlayGroundアカウントに適用されます。",
    list: [
      {
        title: "視覚サポート",
        type: "checkbox",
        selector: getColorContrast,
        comp: {
          text: "色のコントラストを高める",
          reducer: setColorContrast,
        },
        description:
          "テキストと背景色のコントラストを高め、読みやすさを向上させます。",
      },
      {
        title: "動作",
        type: "checkbox",
        selector: getReduceMotion,
        comp: {
          text: "動作を減らす",
          reducer: setReduceMotion,
        },
        description: "ライブ参加人数を含むアプリ内アニメーションを減らします。",
      },
      {
        type: "card",
        comp: {
          title: "自動再生",
          expl: "セルラーデータまたはWi-Fi使用時",
          path: "/settings/autoplay",
        },
      },
      {
        title: "メディア",
        type: "checkbox",
        selector: getAddImgExpl,
        comp: {
          text: "画像説明通知を受け取る",
          reducer: setAddImgExpl,
        },
        description:
          "投稿を送信する前に画像説明を追加するよう通知を受け取ります。",
      },
    ],
  },
  LanguagesPage: {
    pageTitle: "言語",
    description:
      "ユーザー体験をカスタマイズする際に使用される言語を管理します。",
    list: [
      {
        title: "表示言語",
        detail:
          "PGの見出し、ボタン、その他のテキストに使用する主要言語を選択します。",
        type: "card",
        comp: {
          title: "表示言語",
          expl: "韓国語",
          path: "/settings/language",
        },
      },
      {
        title: "追加言語を選択",
        detail: "PGで表示したいコンテンツの追加言語を選択します。",
        type: "card",
        comp: {
          title: "追加言語",
          path: "/i/flow/language_selector",
        },
      },
      {
        title: "認識された言語",
        detail:
          "フォローしているアカウントや反応を示した投稿など、あなたのアクティビティに基づいてPGが推測した言語を管理します。",
        type: "card",
        comp: {
          title: "認識された言語",
          path: "/settings/your_twitter_data/language",
        },
      },
    ],
  },
  DataPage: {
    pageTitle: "データ使用量",
    description:
      "PGは、このデバイスでネットワークデータの使用方法を制限します。",
    list: [
      {
        type: "checkbox",
        selector: getDataSaver,
        comp: {
          text: "データセーバー",
          reducer: setDataSaver,
        },
        description:
          "このオプションを選択すると、PGのネットワークデータ使用量が削減されます。",
      },
      {
        type: "card",
        comp: {
          title: "自動再生",
          expl: "モバイルデータまたはWi-Fi使用時",
          path: "/settings/autoplay",
        },
      },
    ],
  },
  AutoplayPage: {
    pageTitle: "自動再生",
    item: {
      text: "自動再生",
      detail:
        "このデバイスで動画やGIFを自動再生するかどうかを選択してください。",
      type: "checkboxlist",
      selector: getAutoplay,
      comp: [
        {
          text: "モバイルデータまたはWi-Fi使用時",
          reducer: setAutoplay,
          value: "on",
        },
        {
          text: "使用しない",
          reducer: setAutoplay,
          value: "off",
        },
      ],
    },
  },
  LocationPage: {
    pageTitle: "投稿に位置情報を追加",
    description: "有効にすると、投稿に位置情報を添付できます。",
    item: {
      type: "checkbox",
      selector: getAddLocationInfo,
      comp: {
        text: "投稿に位置情報を追加",
        reducer: setAddLocationInfo,
      },
    },
    hyperlink: "投稿に追加されたすべての位置情報を削除します。",
  },
  NotificationAdvancedFilters: {
    pageTitle: "ミュートされた通知",
    list: [
      {
        title: "次のアカウントからの通知をミュート:",
        type: "checkbox",
        selector: getMuteNotFollowing,
        comp: {
          text: "自分がフォローしていないアカウント",
          reducer: setMuteNotFollowing,
        },
      },
      {
        type: "checkbox",
        selector: getMuteNotFollower,
        comp: {
          text: "自分をフォローしていないアカウント",
          reducer: setMuteNotFollower,
        },
      },
      {
        type: "checkbox",
        selector: getMuteNewAccount,
        comp: {
          text: "新しいアカウント",
          reducer: setMuteNewAccount,
        },
      },
      {
        type: "checkbox",
        selector: getMuteDefaultProfile,
        comp: {
          text: "デフォルトのプロフィール画像を使用しているアカウント",
          reducer: setMuteDefaultProfile,
        },
      },
      {
        type: "checkbox",
        selector: getMuteEmailAuthenticated,
        comp: {
          text: "メールを認証していないアカウント",
          reducer: setMuteEmailAuthenticated,
        },
      },
      {
        type: "checkbox",
        selector: getMutePhoneAuthenticated,
        comp: {
          text: "電話番号を認証していないアカウント",
          reducer: setMutePhoneAuthenticated,
        },
        description:
          "このフィルターは、フォローしている人からの通知には影響しません。",
      },
    ],
  },
  LoginVerficationPage: {
    pageTitle: "二段階認証",
    list: [
      {
        title: "二段階認証",
        type: "checkbox",
        selector: getTwoFactorAuthentication,
        comp: {
          text: "SMS",
          reducer: setTwoFactorAuthentication,
          value: "sms",
        },
        description:
          "PGにログインする際に認証コードが含まれたSMSメッセージが携帯電話に届きます。",
        top: true,
      },
      {
        type: "checkbox",
        selector: getTwoFactorAuthentication,
        comp: {
          text: "認証アプリ",
          reducer: setTwoFactorAuthentication,
          value: "app",
        },
        description:
          "モバイル認証アプリを使用してPGにログインするたびに認証コードを受け取ります。",
        top: true,
      },
      {
        type: "checkbox",
        selector: getTwoFactorAuthentication,
        comp: {
          text: "セキュリティキー",
          reducer: setTwoFactorAuthentication,
          value: "key",
        },
        description:
          "PGにログインする際に、コンピューターに入力するか、モバイルデバイスと同期するセキュリティキーを使用します。サポートされているモバイルデバイスまたはウェブブラウザーを使用する必要があります。",
        top: true,
      },
    ],
  },
  IdVerficationPage: {
    pageTitle: "ID認証",
    description:
      "IDを認証してアカウントをなりすましから保護し、プロフィールにID認証ラベルを表示します。",
    list: [
      {
        type: "checkbox",
        selector: getHideLabel,
        comp: {
          text: "ID認証ラベルを非表示にする",
          reducer: setHideLabel,
        },
        description:
          "プロフィールページで青いチェックマークをタップされた際に、ID認証ラベルが表示されないようにします。",
        disabled: true,
      },
      {
        type: "link",
        comp: {
          text: "ヘルプセンター",
          path: "https://help.x.com/ko/rules-and-policies/verification-policy",
        },
      },
    ],
  },
  GenderPage: {
    pageTitle: "性別",
    description:
      "性別を指定していない場合、アカウントのプロフィールや活動に基づいて推測される場合があります。この情報は公開されません。",
    list: [
      {
        type: "checkbox",
        comp: {
          text: "女性",
          value: "f",
        },
      },
      {
        type: "checkbox",
        comp: {
          text: "男性",
          value: "m",
        },
      },
    ],
    item: {
      type: "checkbox",
      comp: {
        text: "新しい性別を追加",
        value: false,
      },
    },
    input: {
      fieldTitle: "性別",
    },
    button: {
      text: "保存",
    },
  },
  ScreenNamePage: {
    pageTitle: "ユーザー名の変更",
    input: {
      fieldTitle: "ユーザーID",
      validation: regExp.userId.default,
    },
    title: "おすすめ",
    button: {
      text: "保存",
    },
    validations: [
      {
        regExp: regExp.userId.countError,
        msg: "ユーザーIDは4文字以上15文字以内でなければなりません。",
      },
      {
        regExp: regExp.userId.typeError,
        msg: "ユーザーIDには英大文字と小文字、数字のみを使用できます。",
      },
      {
        regExp: regExp.userId.numberError,
        msg: "ユーザーIDには少なくとも1文字の英大文字または小文字が必要です。",
      },
    ],
  },
  PhonePage: {
    pageTitle: "電話番号の変更",
    addPhone: "電話番号を追加",
  },
  EmailPage: {
    pageTitle: "メールアドレスの変更",
    input: {
      fieldTitle: "現在のメールアドレス",
    },
  },
  LanguagePage: {
    pageTitle: "表示言語の変更",
    description:
      "このアカウントで使用するPGの見出し、ボタン、その他のテキストのデフォルト言語を選択してください。タイムラインに表示されるコンテンツの言語は変更されません。",
  },
  AgePage: {
    pageTitle: "年齢",
    description: "Twitterが推定したあなたの年齢層です。",
    info: "情報が間違っていますか？ 情報を公開することなくプロフィールに誕生日を追加できます。",
  },
  PasswordPage: {
    pageTitle: "パスワードの変更",
    fieldTitle1: "現在のパスワード",
    hyperlink: "パスワードをお忘れですか？",
    fieldTitle2: "新しいパスワード",
    fieldTitle3: "パスワードの確認",
    validation: regExp.password.default,
    validations: [
      {
        regExp: regExp.password.countError,
        msg: "パスワードは8文字以上20文字以内である必要があります。",
      },
      {
        regExp: regExp.password.typeError,
        msg: "パスワードには少なくとも1つの大文字、1つの特殊文字、1つの数字が含まれている必要があります。",
      },
    ],
    button: {
      text: "保存",
    },
  },
  DownloadDataPage: {
    pageTitle: "データアーカイブをダウンロードする",
    description: "アカウントに保存されている情報の種類についての洞察を得る。",
    expl1:
      "アカウント情報、アカウント履歴、アプリとデバイス、アカウントアクティビティ、関心と広告データ記録が含まれるZIPファイルをリクエストできます。データアーカイブがダウンロード可能になると、アプリ内通知が表示されます。",
    expl2:
      "データアーカイブの準備が整いました。デスクトップブラウザでダウンロードして閲覧できます。このデータは数日後に期限切れとなるため、それまでにダウンロードをお忘れなく。",
    button: {
      text: "データをダウンロードする",
    },
  },
  ConnectedAppsPage: {
    pageTitle: "接続されたアプリ",
    description:
      "これはアカウントに接続されているアプリです。これらのアプリがアクセスする情報を表示し、アクセスを取り消すことができます。",
  },
  SessionsPage: {
    pageTitle: "セッション",
    description:
      "セッションは、現在または過去にPGアカウントを使用しているデバイスを指します。これらのセッションはアカウントにログインしています。各セッションからログアウトすることができます。",
    heading1: "現在のアクティブセッション",
    expl1: "このデバイスはこのPGアカウントにログインしており、現在使用中です。",
    heading2: "他のセッションからログアウト",
    expl2:
      "このアカウントはこのデバイスにログインしていますが、現在使用中ではありません。",
    expl3:
      "ログアウトすると、他の4つのアクティブPGセッションが終了します。現在のアクティブセッションには影響しません。",
    hyperlink: "他のすべてのセッションからログアウト",
  },
  LoginHistoryPage: {
    pageTitle: "アカウントアクセス履歴",
    description: (
      <>
        アプリで不審な活動が検出された場合は、{" "}
        <HyperLink text="接続されたアプリ" path="/settings/connected_app" />
        からアクセスをブロックしてください。
        IPベースの位置情報は実際の位置と異なる場合があります。
      </>
    ),
    heading1: "パスワードを確認してください。",
    expl1: "続行するにはパスワードを入力してください。",
    fieldTitle: "パスワード",
    hyperlink: "パスワードを忘れましたか？",
    button: {
      text: "確認",
    },
  },
  DevicesPage: {
    pageTitle: "ログインしたデバイスとアプリ",
    heading1: "携帯電話",
    expl1:
      "PGがあなたのユーザー体験をカスタマイズするために使用するブラウザ、デバイス、情報が含まれます。また、Xにログインする際に使用したことのないデバイスやブラウザ、PGアカウントにリンクされたメールアドレスや電話番号も含まれます。",
  },
  ConnectedAccountsPage: {
    pageTitle: "接続されたアカウント",
    description:
      "PGアカウントへのログインにリンクされたソーシャルアカウントです。ここでアクセスを無効にできます。",
  },
  DelegatePage: {
    pageTitle: "委任",
    description: "役割を委任した人々とアカウントを共有します。",
    text: "他のユーザーが自分のアカウントに私を招待することができます。",
    expl: "この設定を有効にすると、他の人があなたを招待して自分のアカウントを共有することができます。",
    heading: "私の委任されたアカウント",
    list: [
      {
        type: "card",
        comp: {
          title: "私に委任されたアカウント",
          path: "groups",
        },
      },
      {
        type: "card",
        comp: {
          title: "私が役割を委任したメンバー",
          path: "members",
        },
      },
    ],
  },
  DelegateGroupsPage: {
    pageTitle: "私に委任されたアカウント",
    description:
      "このコミュニティのメンバーとして、メッセージを送信したり、投稿したり、リストを作成および閲覧することができます。また、管理者はアカウントの参加者を招待または削除したり、投稿のアナリティクスを確認することもできます。",
    empty: "私に委任されたアカウントはありません。",
  },
  DelegateMembersPage: {
    pageTitle: "委任されたメンバー",
    description:
      "他のユーザーを招待して、自分の代わりにアカウントの役割を管理できるようにします。メンバーはメッセージを送信したり、投稿したり、リストを作成および閲覧することができます。",
    hyperlink: "メンバーを招待する",
    empty: "まだメンバーが追加されていません。",
  },
  TaggingPage: {
    pageTitle: "写真のタグ付け",
    text: "写真のタグ付け",
    expl: "他の人が自分を写真にタグ付けすることを許可し、タグ付けされるたびに通知を受け取ります。",
    item: {
      type: "checkboxlist",
      selector: getAllowTaggingWhom,
      comp: [
        {
          text: "誰でも自分をタグ付けできるように許可する",
          reducer: setAllowTaggingWhom,
          value: "all",
        },
        {
          text: "フォローしている人のみが自分をタグ付けできるように許可する",
          reducer: setAllowTaggingWhom,
          value: "followers",
        },
      ],
    },
  },
  TopicsPage: {
    pageTitle: "トピック",
    tabList: (userId: string) => {
      return [
        {
          text: "フォロー中",
          path: `/${userId}/topics/not_interested`,
          value: "",
        },
        {
          text: "興味なし",
          path: `/${userId}/topics/not_interested`,
          value: "not",
        },
      ];
    },
  },
  BlockedAllPage: {
    pageTitle: "ブロックしたアカウント",
    tabList: [
      {
        text: "すべて",
        path: "",
        value: "",
      },
      {
        text: "インポート済み",
        path: "/settings/blocked/imported",
        value: "imported",
      },
    ],
    description:
      "ユーザーをブロックすると、そのユーザーはあなたをフォローしたり、メッセージを送ったり、通知に表示されたりすることができなくなります。",
  },
  MutedAllPage: {
    pageTitle: "ミュートしたアカウント",
    description:
      "ミュートしたすべてのユーザーが表示されます。このリストから追加または削除できます。",
  },
  MutedKeywordsPage: {
    pageTitle: "ミュートしたキーワード",
    empty: {
      heading: "ミュートするキーワードを追加",
      expl: "キーワードをミュートすると、そのキーワードを含む投稿がホームタイムラインに表示されず、関連する通知も受信しなくなります。",
    },
  },
};

export default pages;
