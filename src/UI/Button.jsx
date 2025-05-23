import { Link } from "react-router-dom";

function Button({ disabled, children, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-green-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-green-300 focus:bg-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "px-4 py-2.5 md:px-6 md:py-3.5 inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-black transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed focus:bg-stone-300 hover:text-stone-800 focus:text-stone-800 ",
  };
  if (to)
    return (
      <Link
        className="text-white inline-block rounded-full bg-green-600  font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-green-300 focus:bg-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4"
        to={to}
      >
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
