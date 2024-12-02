import React, { useState } from "react";
import { bgThemes } from "@shared/@common/data";
import { useSelector } from "react-redux";
import { getBgTheme, getLanguage } from "@shared/@common/model/selectors";
import { getLangObjValue } from "@shared/@common/utils";
import { Link } from "react-router-dom";

interface ImageProps {
  src: string;
  borderRadius?: number;
  unit?: string;
  role?: string;
  to?: string;
  func?: (value: any) => any;
  value?: any;
}

const Image = ({
  src,
  borderRadius = 15,
  unit = "px",
  role = "link", // 컨테이너의 역할
  to, // 컨테이너가 link인 경우 이동한 위치
}: ImageProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const bgTheme = useSelector(getBgTheme);
  const lang = useSelector(getLanguage);
  const { imgAlt } = getLangObjValue(lang, ["image"]);

  const isFocusable = role === "link";
  const container = isFocusable ? Link : "figure";

  const child = (
    <img
      src={src}
      alt={imgAlt}
      className={"image"}
      style={{
        borderRadius: `${borderRadius}${unit}`,
        width: "100%",
      }}
    />
  );

  return React.createElement(
    container,
    {
      to: to ? to : "",
      style: {
        borderRadius: `${borderRadius}${unit}`,
        outline: `${
          isFocused
            ? bgThemes[bgTheme as keyof typeof bgThemes][`outlineImage`]
            : "0px"
        }`,
      },
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false),
    },

    child
  );
};

export default Image;
