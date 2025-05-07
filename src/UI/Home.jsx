import { useSelector } from "react-redux";
import bg from "../../public/bg.jpg";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { Link } from "react-router-dom";
import Header from "./Header";
function Home() {
  const username = useSelector((store) => store.user.username);
  return (
    <div className="mt-24">
      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-white mb-10 tracking-tight font-normal">
          Welcome to Ethio Supply Chain.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-white text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Empowering Ethiopian Producers, Delivering Quality to You
        </Link>
      </div>
      <div className="my-10 px-4 text-center sm:my-16">
        {!username && <CreateUser />}
        {username && (
          <Button to="/menu" type="primary">
            Continue Ordering, {username}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
