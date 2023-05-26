import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setMode, setLogout } from "./state";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state) => state.user);

  // const fullName = `${user.firsName} ${user.lastName}`;

  return (
    <>
      <h1 className="bg-red-900 text-orange-500">my names oh</h1>
    </>
  );
};

export default NavBar;
