import axios from "axios";
import User from "../userLayout/userCardLayout";

const Users = ({ users }) => {
  return (
    <div>
      <User user={users} />
    </div>
  );
};
export default Users;
export async function getServerSideProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = await response.data;
  return {
    props: {
      users: data,
    },
  };
}
