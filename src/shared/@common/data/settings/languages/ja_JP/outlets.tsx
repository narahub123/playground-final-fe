import { HyperLink } from "@shared/@common/ui/components";

const outlets = {
  TopicsOutlet: {
    description1:
      "フォローしているトピックは、投稿、イベント、広告をパーソナライズし、プロフィールにフォローしているトピックを公開表示するために使用されます。",
    heading: "おすすめのトピック",
    expl: "このトピックに関連する人気投稿をホームタイムラインで直接見ることができます。",
    hyperlink: "その他のトピック",
    description2: (
      <>
        フォローしているトピックがここに表示されます。PGが推奨するすべてのトピックを確認するには、
        <HyperLink text="自分のPGデータ" path="/settings/your_data" />
        をご確認ください。
        また、トピックフォローについてさらに詳しく知ることもできます。
      </>
    ),
  },
};

export default outlets;
