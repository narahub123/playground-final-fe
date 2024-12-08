import styles from "./HyperLink.module.css";
import { Link } from "react-router-dom";

interface HyperLinkProps {
  text: string;
  path: string;
  out?: boolean;
  className?: string;
}

const HyperLink = ({ text, path, className, out = true }: HyperLinkProps) => {
  return out ? (
    <a href={path} className={`${styles.hyperlink} ${className}`}>
      {text}
    </a>
  ) : (
    <Link to={path} className={`${styles.hyperlink} ${className}`}>
      {text}
    </Link>
  );
};

export default HyperLink;
