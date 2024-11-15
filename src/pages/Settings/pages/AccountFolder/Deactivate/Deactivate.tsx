import Header from "@pages/Bookmarks/components/Header/Header";
import styles from "./Deactivate.module.css";
import Constant from "@constants/index";
import { userData } from "@data/example";
import Image from "@pages/Explore/components/Image/Image";

const Deactivate = () => {
  const { name, id, image } = userData;
  const {
    title,
    heading1,
    description,
    heading2,
    descriptionArr,
    deactivateButton,
  } = Constant.settings.account.deactivate;
  return (
    <div className={styles.deactivate}>
      <Header title={title} />
      <main className={styles.main}>
        <section className={styles.userContainer}>
          <span>
            <Image url={image} />
          </span>
          <span>
            <p className={styles.name}>{name}</p>
            <p className={styles.id}>@{id}</p>
          </span>
        </section>
        <section>
          <h3>{heading1}</h3>
          <p>{description}</p>
          <h3>{heading2}</h3>
          <ul>
            {descriptionArr.map((item, index) => (
              <li key={index} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
        </section>
        <div className={styles.btnContainer}>
          <button className={styles.button}>{deactivateButton}</button>
        </div>
      </main>
    </div>
  );
};

export default Deactivate;
