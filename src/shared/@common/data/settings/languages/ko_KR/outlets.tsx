import { HyperLink } from "@shared/@common/ui/components";

const outlets = {
  TopicsOutlet: {
    description1:
      "내가 팔로우하는 토픽은 게시물, 이벤트 및 광고를 맞춤 설정하고 프로필에 어떤 토픽을 팔로우하는지 공개적으로 표시하는 데 사용됩니다.",
    heading: "추천 토픽",
    expl: "이와 관련된 인기 게시물을 홈 타임라인에서 바로 볼 수 있습니다",
    hyperlink: "다른 토픽",
    description2: (
      <>
        내가 팔로우하는 토픽이 여기에 표시됩니다. PG에서 추천하는 모든 토픽을
        보려면 <HyperLink text="내 PG 데이터" path="/settings/your_data" />를
        확인하세요. 토픽 팔로우에 대한 자세한 정보를 알아볼 수도 있습니다.
      </>
    ),
  },
};

export default outlets;
