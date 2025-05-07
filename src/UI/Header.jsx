import { Link } from "react-router-dom";
import Username from "../features/user/Username";
function Header() {
  return (
    <header className="px flex items-center justify-between px-4 py-3 uppercase sm:px-6">
      <Link className="tracking-widest text-white text-2xl" to="/">
        Ethio Supply Chain
      </Link>
      <div className="flex gap-24">
        <Link className="text-white text-xl " to="/about">
          About Us
        </Link>
        <Link className="text-white text-xl" to="/contact">
          Contact Us
        </Link>
        <Username />
      </div>
    </header>
  );
}

export default Header;
