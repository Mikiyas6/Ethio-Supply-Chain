import { useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa";
function Username() {
  const username = useSelector((store) => store.user.username);
  if (!username) return;
  return (
    <div className="flex items-center gap-2">
      <FaRegUser className="text-white text-2xl" />
      <p className="text-xl text-white hidden  md:block">{username}</p>;
    </div>
  );
}

export default Username;
