import Link from "next/link";
const NavBar = () => {
  return (
    <div
      className="w-screen h-screen px-4 flex flex-col justify-between items-center font-josefin   bg-gray text-white
     text-xl font-semibold md:h-[55px] md:flex-row md:flex-wrap"
    >
      <Link href="/">
        <h3>HomePage</h3>
      </Link>
      <ul>
        <Link className="mx-2" href="/login">
          Login
        </Link>
        <Link className="mx-2" href="/signup">
          Signup
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
