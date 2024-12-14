import { useLanguageMode } from "@shared/@common/model/hooks";
import { getMutes } from "@shared/@common/model/selectors";
import { Text } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { useSelector } from "react-redux";

const MutedAllPage = () => {
  const mutes = useSelector(getMutes);
  const { pageTitle, description } = useLanguageMode(["pages", "MutedAllPage"]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Text text={description} type="description" />}
      bottomContent={
        <>
          {mutes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </>
      }
    />
  );
};

export default MutedAllPage;
