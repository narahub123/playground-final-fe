import { flags } from "@shared/@common/assets";
import { countryNames } from "@shared/@common/data";

type FlagProps = {
  countryCode: string; // 국가 코드
  width?: number; // 이미지 크기
};

const Flag = ({ countryCode, width = 20 }: FlagProps) => {
  // 국기 이미지: countryCode가 없는 경우 un 깃발이 보이도록 함
  const flag = flags[countryCode as keyof typeof flags] || flags[`un`];

  // 국가 이름
  const flagAlt =
    countryNames[countryCode as keyof typeof countryNames] ||
    "잘못된 국가 코드 입력";

  return (
    <img
      role="img"
      className="flag"
      src={flag}
      style={{ aspectRatio: "4/3", width: `${width}px` }}
      alt={`${flagAlt}의 국기 이미지`} // 대체 텍스트
      aria-hidden="true" // 의미 없는 콘턴츠임
      aria-label={`${flagAlt}의 국기`} // 이미지 설명을 명시적으로 지정
      onError={(e) =>
        (e.currentTarget.src = "/src/shared/@common/asset/un.svg")
      } // 이미지 로딩에 실패한 경우
    />
  );
};

export default Flag;
