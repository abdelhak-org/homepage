import Link from "next/link";
const NavBar = () => {
  return (
    <div
      className="w-screen h-screen md:max-w-[1534px]  px-4 flex flex-col  justify-center md:justify-between items-center md:flex-row font-josefin   bg-gray text-white
     text-xl font-semibold md:h-[55px] md:flex-wrap"
    >
      <Link href="/">
        <h3 className="font-script text-8xl text-yellow mb-8 md:text-4xl md:m-0  " >HomePage</h3>
      </Link>
      <ul>
        <Link className="mx-3 font-josefin tracking-wider" href="/login">
          Login
        </Link>
        <Link className="mx-3 font-josefin tracking-wider" href="/signup">
          Signup
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
