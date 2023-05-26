import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setMode, setLogout } from "./state";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const NavBar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  // console.log(isMenuToggled);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // const user = useSelector((state) => state.user);

  // const fullName = `${user.firsName} ${user.lastName}`;

  return (
    <>
      <div className="nav w-full px-[3%] md:px-[10%] py-4 bg-white flex justify-between align shadow-lg">
        <div className="left flex justify-center items-center gap-6">
          <div className="logo">
            <h1 className="text-primary font-bold text-3xl">Socialme</h1>
          </div>
          <div className="hidden md:flex justify-between items-center bg-gray-200 gap-4 rounded-lg px-3">
            <input
              type="text"
              class="p-2 bg-gray-200 w-full focus:outline-none border-none"
              placeholder="Search..."
            />
            <AiOutlineSearch size={25} />
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center px-4 gap-8">
          <div className="icons flex justify-center items-center gap-6 cursor-pointer">
            <BsFillSunFill size={25} />
            <RiMessage2Fill size={25} />
            <IoIosNotifications size={25} />
            <BiHelpCircle size={25} />
          </div>
          <div className="menu w-full bg-gray-200 p-2 px-4 rounded-lg">
            <select className="focus:outline-none bg-transparent border-none">
              <option value="Fullname">Akachukwu</option>
              <option value="Fullname">FullName</option>
            </select>
          </div>
        </div>

        {/* Mobile view */}
        <div className="flex flex-col md:hidden justify-center items-center px-4 gap-8 relative ">
          {isMenuToggled ? (
            <AiOutlineClose
              size={25}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            />
          ) : (
            <HiOutlineBars3BottomRight
              size={25}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            />
          )}
          <div
            className={`justify-center items-center bg-white absolute top-12 ${
              isMenuToggled ? "-right-4" : "-right-[1000px]"
            }  py-6 px-8 shadow-lg ease-in-out duration-200 transition-all`}
          >
            <div className="icons flex flex-col justify-center items-center gap-6 cursor-pointer">
              <BsFillSunFill size={25} />
              <RiMessage2Fill size={25} />
              <IoIosNotifications size={25} />
              <BiHelpCircle size={25} />
            </div>
            <div className="menu w-full ">
              <select className="focus:outline-none border-none p-2">
                <option value="Fullname">Akachukwu</option>
                <option value="Fullname">FullName</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
