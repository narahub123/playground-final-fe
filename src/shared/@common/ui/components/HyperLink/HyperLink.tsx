import styles from "./HyperLink.module.css";
import { Link } from "react-router-dom";

interface HyperLinkProps {
  text: string;
  path?: string;
  out?: boolean;
  className?: string;
  setter?: React.Dispatch<React.SetStateAction<any>>;
}

const HyperLink = ({
  text,
  path,
  className,
  out = true,
  setter,
}: HyperLinkProps) => {
  const handleClick = () => {
    if (!setter) return;
    setter(text);
  };
  return path ? (
    out ? (
      <a href={path} className={`${styles.hyperlink} ${className}`}>
        {text}
      </a>
    ) : (
      <Link to={path} className={`${styles.hyperlink} ${className}`}>
        {text}
      </Link>
    )
  ) : (
    <button
      role="button"
      tabIndex={0}
      className={`${styles.hyperlink} ${className}`}
      onClick={setter ? () => handleClick() : undefined}
    >
      {text}
    </button>
  );
};

export default HyperLink;
