import ICONS from "@/icons";

type ReplyOptionIconProps = {
  option: string;
};

const ReplyOptionIcon = ({ option }: ReplyOptionIconProps) => {
  // 지역에 따른 아이콘 변경도 염두해 둘 것
  const Icon =
    option === "all"
      ? ICONS.replyOptions.all.asia
      : ICONS.replyOptions.other[
          option as keyof typeof ICONS.replyOptions.other
        ];

  return <Icon />;
};

export default ReplyOptionIcon;
