import { useLanguageMode } from "@shared/@common/model/hooks";
import { getInterests } from "@shared/@common/model/selectors";
import { Text } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { useSelector } from "react-redux";

const InterestsPage = () => {
  const interests = useSelector(getInterests);
  const { pageTitle, description } = useLanguageMode([
    "pages",
    "InterestsPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Text text={description} type="description" />}
      bottomContent={
        <>
          {interests.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </>
      }
    />
  );
};

export default InterestsPage;
