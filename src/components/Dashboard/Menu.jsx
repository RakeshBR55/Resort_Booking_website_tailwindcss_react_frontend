
import sideBarContext from "../../context/sideBarContext";
import React, { useContext } from "react";

const Menu = () => {
  const menu = useContext(sideBarContext);
  
  return (
    <>
      <div className="flex justify-between w-full">
        <a href="#">LOGO</a>
        <button onClick={() => menu.toggleMenu()}>Menu</button>
        <p className="text-blue-500">{menu.showMenu}</p>
      </div>
    </>
  );
};

export default Menu;
