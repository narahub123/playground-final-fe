import { getBlockedUsers } from "@shared/@common/model/selectors";
import { ProfileContainer } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";

const BlockedAllOutlet = () => {
  const blockedUsers = useSelector(getBlockedUsers);
  return (
    <>
      {blockedUsers.map((userId, index) => (
        <ProfileContainer key={index} item={userId} />
      ))}
    </>
  );
};

export default BlockedAllOutlet;
