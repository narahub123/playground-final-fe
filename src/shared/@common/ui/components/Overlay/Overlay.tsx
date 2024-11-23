type OverlayProp = {
  bgColor?: string;
};

// 입력된 색상의 유효성 검사
const isValidColor = (color: string): boolean => {
  const s = new Option().style;
  s.color = color;

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
