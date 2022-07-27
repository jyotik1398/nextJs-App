/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "../components/card/userCard";
import Search from "../components/search/search";
import styles from "./layout.module.css";
import axios from "axios";

export default function User({ user }) {
  const [searchItem, setSearchItem] = useState();
  const [filterData, setFilterData] = useState(null);

  const handleChange = (e) => {
    setSearchItem(e);
  };

  const handleClick = () => {
    setTimeout(() => useSearchUser(searchItem), 1000);
  };
  async function useSearchUser(name) {
    const searchedUser = await axios.get(
      `https://jsonplaceholder.typicode.com/users?name=${name}`
    );
    const searchData = await searchedUser.data;
    setFilterData(searchData);
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.heading}>List of users</p>
      <Search
        usersData={user}
        handleChange={(e) => handleChange(e)}
        handleClick={handleClick}
      />
      <div className={styles.cardContainer}>
        {filterData === null &&
          user.map((user, index) => {
            return (
              <Link
                href={{
                  pathname: "/userlist/profile",
                  query: { userID: user.id },
                }}
                key={`user-${index}`}
              >
                <a>
                  <div className={styles.cardWrapper} key={`user-${index}`}>
                    <Card data={user} />
                  </div>
                </a>
              </Link>
            );
          })}
        {filterData ? (
          <Link
            href={{
              pathname: "/userlist/profile",
              query: { userID: filterData[0]?.id },
            }}
          >
            <a>
              <div className={styles.cardWrapper}>
                <Card data={filterData[0]} />
              </div>
            </a>
          </Link>
        ) : (
          ""
        )}
      </div>
      <Link href="/">
        <a className={styles.backText}>Want to go back ?</a>
      </Link>
    </div>
  );
}
