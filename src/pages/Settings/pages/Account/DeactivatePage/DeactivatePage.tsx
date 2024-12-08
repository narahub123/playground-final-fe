import styles from "./Deactivate.module.css";
import {
  Description,
  HyperLink,
  ProfileContainer,
  Title,
} from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";

const DeactivatePage = () => {
  const list = [
    "실수로 또는 잘못하여 PlayGround 계정을 비활성화한 후에도 30일 이내에 복구할 수 있습니다.",
    "일부 계정 정보는 Google 또는 Bing과 같은 검색 엔진에서 아직 접근 가능할 수도 있습니다.",
    "@사용자 아이디를 변경하기 위해 계정을 비활성화할 필요는 없습니다. 설정에서 아이디를 수정하세요.",
    "현재 @사용자 아이디 또는 이메일 주소를 다른 PlayGround 계정에서 사용하려면 이 계정을 비활성화하기 전에 해당 항목을 변경하시기 바랍니다.",
    "내 PlayGround 데이터를 다운로드하려면 계정을 비활성화하기 전에 요청 및 다운로드 프로세스를 모두 완료해야 합니다. 비활성화된 계정으로는 데이터 다운로드 링크를 보낼 수 없습니다.",
  ];
  return (
    <MainLayout
      pageTitle="계정 비활성화"
      backward
      topContent={<ProfileContainer />}
      bottomContent={
        <>
          <div className={styles.section}>
            <Title text="계정이 비활성화됩니다." className={styles.title} />
            <Description
              text="PlayGround 계정 비활성화 과정을 시작합니다. 내 표시 이름, @사용자 아이디, 공개 프로필이 PlayGround.com, iOS용 PlayGround, Android용 PlayGround에 더 이상 표시되지 않습니다."
              className={styles.description}
            />
          </div>
          <div className={styles.section}>
            <Title
              text="그 밖에 내가 알아야 할 내용"
              className={styles.title}
            />
            <div>
              {list.map((item) => (
                <Description text={item} className={styles.item} />
              ))}
            </div>
          </div>
          <div className={styles.deactivate}>
            <HyperLink text="비활성화" path="confirm" out={false} />
          </div>
        </>
      }
    />
  );
};

export default DeactivatePage;
