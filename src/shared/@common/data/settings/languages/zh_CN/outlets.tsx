import { HyperLink } from "@shared/@common/ui/components";

const outlets = {
  TopicsOutlet: {
    description1:
      "您关注的话题将用于个性化帖子、活动和广告，并在您的个人资料上公开显示您关注的话题。",
    heading: "推荐话题",
    expl: "在主页时间线上直接查看与此话题相关的热门帖子。",
    hyperlink: "更多话题",
    description2: (
      <>
        您关注的话题将显示在这里。要查看PG推荐的所有话题，请查看
        <HyperLink text="我的PG数据" path="/settings/your_data" />。
        您还可以了解更多关于关注话题的信息。
      </>
    ),
  },
};

export default outlets;
