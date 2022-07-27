import Image from "next/image";
import Link from "next/link";
import styles from "./profile.module.css";

const UserProfile = ({ data }) => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <h1 className={styles.heading}>Full User Profile</h1>
        <div className={styles.img}>
          <Image
            src={`https://joeschmoe.io/api/v1/${data?.name}`}
            alt=""
            width="100px"
            height="100px"
            className={styles.image}
          />
        </div>

        <span className={styles.value}>Id : {data?.id}</span>
        <span className={styles.value}>Name : {data?.name}</span>
        <span className={styles.value}>UserName : {data?.username}</span>
        <span className={styles.value}>Email : {data?.email}</span>
        <span className={styles.value}>Phone : {data?.phone}</span>
        <span className={styles.value}>City : {data?.address?.city}</span>
        <span className={styles.value}>Website : {data?.website}</span>
        <span className={styles.value}>
          Company Name : {data?.company?.name}
        </span>
        <Link href="/userlist/users">
          <a className={styles.back}>Back to User Cards</a>
        </Link>
      </div>
    </div>
  );
};
export default UserProfile;
