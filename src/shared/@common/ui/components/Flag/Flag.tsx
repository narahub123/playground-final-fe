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
      role="img"
      className="flag"
      src={flag}
      style={{ aspectRatio: "4/3", width: `${width}px` }}
      alt={`${flagAlt}의 국기 이미지`} // 대체 텍스트
      aria-hidden="true" // 의미 없는 콘턴츠임
      aria-label={`${flagAlt}의 국기`} // 이미지 설명을 명시적으로 지정
    />
  );
};

export default Flag;
