import { flags } from "@shared/@common/assets";
import { countryNames } from "@shared/@common/data";

type FlagProps = {
  countryCode: string; // 국가 코드
  width?: number; // 이미지 크기
};

const Flag = ({ countryCode, width = 20 }: FlagProps) => {
  // 국기 이미지
  const flag = flags[countryCode as keyof typeof flags];
  // 국가 이름
  const flagAlt = countryNames[countryCode as keyof typeof countryNames];

  return (
    <img
      className="flag"
      alt={`${flagAlt}의 국기 이미지`}
      src={flag}
      style={{ aspectRatio: "4/3", width: `${width}px` }}
    />
  );
};

export default Flag;
