type OverlayProp = {
  bgColor?: string;
};

const Overlay = ({ bgColor = "rgba(0, 0, 0, 0.5)" }: OverlayProp) => {
  return (
    <div
      className={"overlay"}
      style={{ backgroundColor: bgColor, width: "100%", height: "100%" }}
    />
  );
};

export default Overlay;
