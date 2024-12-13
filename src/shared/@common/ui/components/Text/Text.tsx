import styles from "./Text.module.css";
import { ReactNode } from "react";

interface TextProps {
  text: string | ReactNode;
  type?: "text" | "heading" | "description"; //
  style?: string; // 스타일 추가
  bold?: boolean;
}

const Text = ({ text, type = "text", style, bold }: TextProps) => {
  const Elem = type === "heading" ? "h3" : "p";

  const className =
    type === "heading"
      ? styles.heading
      : type === "description"
      ? styles.description
      : styles.text;

  return (
    <Elem
      className={`${className} ${style}`}
      style={{
        fontWeight: bold || type === "heading" ? "bold" : "normal",
      }}
    >
      {text}
    </Elem>
  );
};

export default Text;
