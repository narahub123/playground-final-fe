import { getMutedKeywords } from "@shared/@common/model/selectors";
import styles from "./MutedKeywordsPage.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Icon, Text } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MutedKeywordsPage = () => {
  const navigate = useNavigate();
  const mutedKeywords = useSelector(getMutedKeywords);
  const { pageTitle, empty } = useLanguageMode(["pages", "MutedKeywordsPage"]);

  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      extra={
        <Icon
          iconName="plus"
          iconTitle="추가"
          handleClick={() => navigate("/settings/add_muted_keyword")}
        />
      }
      topContent={<></>}
      bottomContent={
        <>
          {mutedKeywords.length === 0 ? (
            <div className={styles.empty}>
              <Text
                text={empty.heading}
                style={styles.heading}
                type="heading"
              />
              <Text text={empty.expl} />
            </div>
          ) : (
            mutedKeywords.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))
          )}
        </>
      }
    />
  );
};

export default MutedKeywordsPage;
