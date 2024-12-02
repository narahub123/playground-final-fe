import { useState } from "react";
import { bgThemes } from "@shared/@common/data";
import { useSelector } from "react-redux";
import { getBgTheme } from "@shared/@common/model/selectors";

interface ImageProps {
  src: string;
  borderRadius?: number;
  unit?: string;
  canFocus?: boolean;
  func?: (value: any) => any;
  value?: any;
}

const Image = ({
  src,
  borderRadius = 15,
  unit = "px",
  canFocus = true,
  func,
  value,
}: ImageProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const bgTheme = useSelector(getBgTheme);
  return (
    <figure className="container" style={{ width: "100%" }}>
      <img
        src={src}
        alt="이미지"
        className={"image"}
        style={{
          borderRadius: `${borderRadius}${unit}`,
          width: "100%",
          cursor: `${canFocus ? "pointer" : "default"}`,
          outline: `${
            isFocused
              ? bgThemes[bgTheme as keyof typeof bgThemes][`outlineImage`]
              : "0px"
          }`,
        }}
        tabIndex={canFocus ? 0 : -1}
        onFocus={canFocus ? () => setIsFocused(true) : undefined}
        onBlur={canFocus ? () => setIsFocused(false) : undefined}
        onClick={canFocus && func ? () => func(value) : undefined}
        onKeyDown={(e) => {
          if (!canFocus) return;
          e.stopPropagation();
          if (e.key === "Enter" && e.currentTarget.className === "image")
            func && func(value);
        }}
      />
    </figure>
  );
};

export default Image;
