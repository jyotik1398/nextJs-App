/* eslint-disable react-hooks/rules-of-hooks */
import UserProfile from "../components/Profile/viewUserProfile";
import useSWR from "swr";
import { useRouter } from "next/router";
import Loader from "../components/Loader/loader";
const UserProfilePage = () => {
  const router = useRouter();
  const userID = router.query.userID;
  const { user, isLoading } = profileUser(userID);
  return (
    <div>
      {!isLoading ? (
        <div>
          <UserProfile data={user} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default UserProfilePage;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function profileUser(id) {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
