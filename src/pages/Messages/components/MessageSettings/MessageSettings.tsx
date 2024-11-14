import Header from "@pages/Bookmarks/components/Header/Header";
import styles from "./MessageSettings.module.css";
import Constant from "@constants/index";
import SettingCard from "../SettingCard/SettingCard";
import { useState } from "react";

const MessageSettings = () => {
  const [defaultValue, setDefaultValue] = useState(
    Constant.messages.settings.allowMessage
  );
  const allowMessageList = [
    {
      type: "none",
      name: "받지 않음",
    },
    {
      type: "verified",
      name: "인증된 사용자",
    },
    {
      type: "all",
      name: "모든 사람",
    },
  ];
  return (
    <div className={styles.settings}>
      <Header title={Constant.messages.title} />
      <main className={styles.main}>
        <section className={styles.section}>
          <p>다음 사용ㅇ자의 채팅 요청 허용</p>
          <p>내가 팔로우 하는 사용자가 보낸 채팅는 항상 받을 수 있습니다.</p>
          <ul className={styles.container}>
            {allowMessageList.map((item) => (
              <SettingCard
                key={item.type}
                text={item.name}
                checked={"circleChecked"}
                unchecked={"circleEmpty"}
                setting={defaultValue}
                setDefaultValue={setDefaultValue}
                value={item.type}
              />
            ))}
          </ul>
        </section>
        <section className={styles.section}>
          <SettingCard
            text="저질스러운 쪽지 필터링하기"
            checked="squareChecked"
            unchecked="squareEmpty"
            setting={Constant.messages.settings.filtering}
          />

          <p>
            스팸 또는 저질스러운 내용이 포함된 것으로 파악되는 쪽지 요청을
            숨깁니다. 이러한 요청은 쪽지 요청함의 하단에 있는 별도의 받은
            쪽지함으로 전송됩니다. 원하는 경우 여전히 확인할 수 있습니다
          </p>
        </section>
        <section>
          <SettingCard
            text="읽음 표시 보기"
            checked="squareChecked"
            unchecked="squareEmpty"
            setting={Constant.messages.settings.readIndicator}
          />

          <p>
            쪽지를 주고 받는 사람들이 내가 메시지를 확인했을 때를 알 수 있도록
            허용합니다. 읽음 표시는 쪽지 요청에 나타나지 않습니다.{" "}
          </p>
        </section>
      </main>
    </div>
  );
};

export default MessageSettings;
