import styles from "./HyperLink.module.css";
import { Link } from "react-router-dom";

interface HyperLinkProps {
  text: string;
  path: string;
  out?: boolean;
  className?: string;
  color?: string;
}

const HyperLink = ({
  text,
  path,
  className,
  out = true,
  color,
}: HyperLinkProps) => {
  return out ? (
    <a
      href={path}
      className={`${styles.hyperlink} ${className}`}
      style={{ color: color }}
    >
      {text}
    </a>
  ) : (
    <Link
      to={path}
      className={`${styles.hyperlink} ${className}`}
      style={{ color: color }}
    >
      {text}
    </Link>
  );
};

export default HyperLink;
