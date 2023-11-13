import Link from "next/link";
import {useUiContext} from "../context/ui/UiContext"
const NavBar = () => {
  const { uiData } = useUiContext();

  return (
    <div
      style={{
        background:uiData.bgColor
      }}
      className="w-screen h-screen md:max-w-[1534px] mx-auto text-white  px-4 flex flex-col  justify-center md:justify-between items-center md:flex-row font-josefin  
        text-lg font-light md:h-[55px] md:flex-wrap"
    >
      <h3 className="font-script text-8xl mb-8 md:text-4xl md:m-0  ">
        <Link href="/">HomePage</Link>
      </h3>
      <ul>
        <Link className="mx-3 font-josefin tracking-wider" href="#">
          About
        </Link>
        <Link className="mx-3 font-josefin tracking-wider" href="/videos">
          Videos
        </Link>
        <Link className="mx-3 font-josefin tracking-wider" href="/news">
        News
        </Link>

      </ul>
    </div>
      );
};

export default NavBar;
