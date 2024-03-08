import NewListModal from "./Modal/NewListModal";
import Link from "next/link";
import { useDataContext } from "@/context/data/DataContext";
const NavBar = () => {
  const {dataActions} = useDataContext()
  const toggleModal = () => {
    setShowModal(!showModal);
  };
 


  return (
    <>
    <nav className="w-full  bg-neutral-100 border  border-b-neutral-300/50">


    <div
      className="max-w-[1534px]    mx-auto
      flex flex-col justify-center font-roboto text-lg font-light items-center px-8 
      md:justify-between  md:flex-row md:h-[55px] md:flex-wrap"
      >
      <Link href="/">
      <h3 
      className="font-script text-8xl mb-8 md:text-4xl md:m-0 text-[#333] font-bold">
          
          HomePage
          
      </h3>
          </Link>

  
        
        <NewListModal />
      
       </div>
      </nav>
      </>
  );
};

export default NavBar;
