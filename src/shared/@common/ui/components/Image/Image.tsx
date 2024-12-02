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
  canFocus?: boolean;
  func?: (value: any) => any;
  value?: any;
  role?: string;
}

const Image = ({
  src,
  borderRadius = 15,
  unit = "px",
  canFocus = true,
  func,
  value,
  role = "link",
}: ImageProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const bgTheme = useSelector(getBgTheme);
  const lang = useSelector(getLanguage);
  const { imgAlt } = getLangObjValue(lang, ["image"]);

  const container = role === "link" ? Link : "figure";

  const child = (
    <img
      src={src}
      alt={imgAlt}
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
  );

  return React.createElement(container, null, child);
};

export default Image;
