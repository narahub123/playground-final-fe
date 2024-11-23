type OverlayProp = {
  bgColor?: string;
};

// 입력된 색상의 유효성 검사
const isValidColor = (color: string): boolean => {
  // <option> 태그의 인스턴스를 생성하고 style 객체를 가져옴
  const s = new Option().style;
  // css의 color 속성에 입력된 color 삽입
  s.color = color;

  // 삽입된 color가 유효하지 않은 값이면 빈문자열로 설정됨
  return s.color !== "";
};

const Overlay = ({ bgColor = "rgba(0, 0, 0, 0.5)" }: OverlayProp) => {
  const validColor = isValidColor(bgColor) ? bgColor : "rgba(0, 0, 0, 0.5)";

  return (
    <div
      className={"overlay"}
      style={{ backgroundColor: validColor, width: "100%", height: "100%" }}
    />
  );
};

export default Overlay;
