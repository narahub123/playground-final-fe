import { useSelector } from "react-redux";
import ToggleButton from "../ToggleButton/ToggleButton";
import { getBgTheme } from "@shared/@common/model/selectors";
import { setBackgroundTheme } from "@shared/@common/model/slices/settingsSlice";
import { useEffect } from "react";

type BGToggleButtonProps = {
  setLastClick: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};

const BGToggleButton = ({ setLastClick }: BGToggleButtonProps) => {
  const bgTheme = useSelector(getBgTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = bgTheme;
  }, [bgTheme]);

  return (
    <div className="bgtogglebutton">
      <ToggleButton
        isOnCond={bgTheme === "dark" ? true : false}
        reducer={setBackgroundTheme(bgTheme === "dark" ? "light" : "dark")}
        iconName={bgTheme === "dark" ? "light" : "dark"}
        iconTitle={bgTheme === "dark" ? "라이트 모드" : "다크 모드"}
        buttonColor={bgTheme === "dark" ? "rgb(100, 149, 237)" : "white"}
        iconColor={bgTheme === "dark" ? "white" : "rgb(100, 149, 237)"}
        setLastClick={setLastClick}
      />
    </div>
  );
};

export default BGToggleButton;
