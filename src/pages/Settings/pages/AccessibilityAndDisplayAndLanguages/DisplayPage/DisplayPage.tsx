import { useLanguageMode } from "@shared/@common/model/hooks";
import styles from "./DisplayPage.module.css";
import { MainLayout } from "@shared/pages/layout";
import { Icon, Text } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";
import {
  getBgTheme,
  getColorTheme,
  getFontSize,
} from "@shared/@common/model/selectors";
import { useAppDispatch } from "@app/store";
import {
  setBackgroundTheme,
  setColorTheme,
  setFontSize,
} from "@shared/@common/model/slices/settingsSlice";
import { useEffect } from "react";
import { colorThemeArr } from "@shared/@common/data";

const DisplayPage = () => {
  const dispatch = useAppDispatch();
  const fontSize = useSelector(getFontSize);
  const bgTheme = useSelector(getBgTheme);
  const colorTheme = useSelector(getColorTheme);
  const { pageTitle, description, heading1, heading2, heading3, list } =
    useLanguageMode(["pages", "DisplayPage"]);

  useEffect(() => {
    document.documentElement.dataset.theme =
      bgTheme === "darker" || bgTheme === "dark" ? "dark" : bgTheme;
    // dark와 darker 모드를 구분할 것
  }, [bgTheme]);

  useEffect(() => {
    document.documentElement.dataset.colorTheme = colorTheme;
  }, [colorTheme]);

  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Text text={description} type="description" />}
      bottomContent={
        <>
          <div></div>
          {/* 글꼴 크기 */}
          <div className={`${styles.section}`}>
            <Text text={heading1} type="heading" />
            <div className={styles[`font-size`]}>
              <span className={styles.xs}>Aa</span>
              <span className={styles.graph}>
                <div className={styles.line}>
                  <div
                    className={`${styles.part} ${
                      fontSize === "s" ||
                      fontSize === "b" ||
                      fontSize === "l" ||
                      fontSize === "xl"
                        ? styles.active
                        : ""
                    }`}
                    onClick={() => dispatch(setFontSize("xs"))}
                  />
                  <div
                    className={`${styles.part} ${
                      fontSize === "s" ||
                      fontSize === "b" ||
                      fontSize === "l" ||
                      fontSize === "xl"
                        ? styles.active
                        : ""
                    }`}
                    onClick={() => dispatch(setFontSize("s"))}
                  />
                  <div
                    className={`${styles.part} ${
                      fontSize === "b" || fontSize === "l" || fontSize === "xl"
                        ? styles.active
                        : ""
                    }`}
                    onClick={() => dispatch(setFontSize("s"))}
                  />
                  <div
                    className={`${styles.part} ${
                      fontSize === "b" || fontSize === "l" || fontSize === "xl"
                        ? styles.active
                        : ""
                    }`}
                    onClick={() => dispatch(setFontSize("b"))}
                  />
                  <div
                    className={`${styles.part} ${
                      fontSize === "l" || fontSize === "xl" ? styles.active : ""
                    }`}
                    onClick={() => dispatch(setFontSize("b"))}
                  />
                  <div
                    className={`${styles.part} ${
                      fontSize === "l" || fontSize === "xl" ? styles.active : ""
                    }`}
                    onClick={() => dispatch(setFontSize("l"))}
                  />
                  <div
                    className={`${styles.part} ${
                      fontSize === "xl" ? styles.active : ""
                    }`}
                    onClick={() => dispatch(setFontSize("l"))}
                  />
                  <div
                    className={`${styles.part} ${
                      fontSize === "xl" ? styles.active : ""
                    }`}
                    onClick={() => dispatch(setFontSize("xl"))}
                  />
                </div>
                <div className={styles[`circle-container`]}>
                  <div
                    className={`${styles.circle} ${
                      fontSize === "xs" ? styles.selected : ""
                    } ${
                      fontSize === "xs" ||
                      fontSize === "s" ||
                      fontSize === "b" ||
                      fontSize === "l" ||
                      fontSize === "xl"
                        ? styles.active
                        : ""
                    }`}
                    onClick={() => dispatch(setFontSize("xs"))}
                  />
                  <div
                    className={`${styles.circle} ${
                      fontSize === "s" ? styles.selected : ""
                    } ${
                      fontSize === "s" ||
                      fontSize === "b" ||
                      fontSize === "l" ||
                      fontSize === "xl"
                        ? styles.active
                        : ""
                    }`}
                    onClick={() => dispatch(setFontSize("s"))}
                  />
                  <div
                    className={`${styles.circle} ${
                      fontSize === "b" ? styles.selected : ""
                    } ${
                      fontSize === "b" || fontSize === "l" || fontSize === "xl"
                        ? styles.active
                        : ""
                    }`}
                    onClick={() => dispatch(setFontSize("b"))}
                  />
                  <div
                    className={`${styles.circle} ${
                      fontSize === "l" ? styles.selected : ""
                    } ${
                      fontSize === "l" || fontSize === "xl" ? styles.active : ""
                    }`}
                    onClick={() => dispatch(setFontSize("l"))}
                  />
                  <div
                    className={`${styles.circle} ${
                      fontSize === "xl" ? styles.selected : ""
                    } ${fontSize === "xl" ? styles.active : ""}`}
                    onClick={() => dispatch(setFontSize("xl"))}
                  />
                </div>
              </span>
              <span className={styles.xl}>Aa</span>
            </div>
          </div>
          <div className={`${styles.section}`}>
            <Text text={heading2} type="heading" />
            <ul className={styles[`color-list`]}>
              {colorThemeArr.map((item) => (
                <li
                  key={item.color}
                  className={styles[`color-circle`]}
                  style={{ backgroundColor: item.color }}
                  onClick={() => dispatch(setColorTheme(item.color))}
                >
                  {item.color === colorTheme && (
                    <Icon iconName="check" iconTitle="" color="white" />
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* 배경 */}
          <div className={`${styles.section}`}>
            <Text text={heading3} type="heading" />
            <ul className={styles.list}>
              {(list as { text: string; value: string }[]).map(
                (item, index) => (
                  <li
                    key={index}
                    className={`${styles.bgItem} ${
                      item.value === "light"
                        ? styles.light
                        : item.value === "dark"
                        ? styles.dark
                        : styles.darker
                    }`}
                    onClick={() => {
                      dispatch(setBackgroundTheme(item.value));
                    }}
                  >
                    <span>
                      <Icon iconName="roundedCheckbox" iconTitle="" />
                    </span>
                    <span>{item.text}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </>
      }
    />
  );
};

export default DisplayPage;
