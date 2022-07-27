import Link from "next/link";
import styles from "../styles/Home.module.css";
import userIcon from "../public/user.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Welcome to Users Blog</h2>
      <div className={styles.img}>
        <Image src={userIcon} alt="" className={styles.image} />
      </div>
      <div className={styles.para}>
        <p>
          Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer tincidunt fringilla hendrerit. Aliquam venenatis, arcu at
          aliquet bibendum, justo orci consectetur elit, et tincidunt nulla nisi
          eget leo. Nunc elementum accumsan magna non scelerisque. Maecenas sed
          euismod justo. Etiam felis leo, porttitor ut aliquam sed, lacinia ut
          neque. Integer eget accumsan tellus, imperdiet auctor diam. Ut leo ex,
          molestie a vulputate at, interdum mattis eros. Donec vel felis
          molestie, semper tellus id, pulvinar felis. Praesent interdum dolor
          mi, tristique porttitor justo accumsan non. Duis vitae metus accumsan,
          blandit elit a, viverra neque. Fusce metus erat, sagittis vel rhoncus
          quis, scelerisque ut metus. Mauris vulputate felis ultrices enim
          tristique, eget elementum lacus consectetur.
        </p>
      </div>
      <Link href="userlist/users">
        <a className={styles.link}>Go to users data section</a>
      </Link>
    </div>
  );
}
