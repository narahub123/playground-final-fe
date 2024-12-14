import { MainLayout } from "@shared/pages/layout";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Tab } from "@shared/pages/ui";
import { useSelector } from "react-redux";
import { getUser } from "@shared/@common/model/selectors";
import { Outlet } from "react-router-dom";

const TopicsPage = () => {
  const user = useSelector(getUser);
  const { pageTitle, tabList } = useLanguageMode(["pages", "TopicsPage"]);

  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Tab list={tabList(user.userId)} />}
      bottomContent={<Outlet />}
    />
  );
};

export default TopicsPage;
