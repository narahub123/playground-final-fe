import { HyperLink } from "@shared/@common/ui/components";

const outlets = {
  TopicsOutlet: {
    description1:
      "您追蹤的主題將用於個性化帖子、活動和廣告，並在您的個人檔案上公開顯示您追蹤的主題。",
    heading: "推薦主題",
    expl: "在主頁時間軸上直接查看與此主題相關的熱門帖子。",
    hyperlink: "更多主題",
    description2: (
      <>
        您追蹤的主題將顯示在這裡。要查看PG推薦的所有主題，請查看
        <HyperLink text="我的PG資料" path="/settings/your_data" />。
        您還可以了解更多關於追蹤主題的資訊。
      </>
    ),
  },
};

export default outlets;
