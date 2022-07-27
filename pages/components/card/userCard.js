import Image from "next/image";
import Link from "next/link";
import styles from "./userCard.module.css";
const Card = ({ data }) => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.img}>
        <Image
          src={`https://joeschmoe.io/api/v1/${data?.name}`}
          alt=""
          width="80px"
          height="80px"
          className={styles.image}
        />
      </div>
      <div className={styles.innerWrapper}>
        <div className={styles.id}>Data for user {data?.id}</div>
        <div className={styles.cname}>Company : {data?.company?.name}</div>
        <div className={styles.name}>Name : {data?.name}</div>
        <div className={styles.email}>Email : {data?.email}</div>
      </div>
    </div>
  );
};
export default Card;
