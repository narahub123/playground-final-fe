interface ImageProps {
  src: string;
  borderRadius?: number;
  unit?: string;
}

const Image = ({ src, borderRadius = 15, unit = "px" }: ImageProps) => {
  return (
    <figure className="container" style={{ width: "100%" }}>
      <img
        src={src}
        alt="이미지"
        className="image"
        style={{ borderRadius: `${borderRadius}${unit}`, width: "100%" }}
      />
    </figure>
  );
};

export default Image;
