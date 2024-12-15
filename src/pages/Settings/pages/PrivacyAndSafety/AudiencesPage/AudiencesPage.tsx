import { useLanguageMode } from "@shared/@common/model/hooks";
import { getAudiences } from "@shared/@common/model/selectors";
import { MainLayout } from "@shared/pages/layout";
import { useSelector } from "react-redux";

const AudiencesPage = () => {
  const audiences = useSelector(getAudiences);
  const { pageTitle } = useLanguageMode(["pages", "AudiencesPage"]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<></>}
      bottomContent={
        <>
          {audiences.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </>
      }
    />
  );
};

export default AudiencesPage;
