import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { SidebarData } from "../constant/Constant";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { path } from '../constant/Constant';

interface SidebarItem {
  title: string;
  path: string;
  icon: JSX.Element;
  cName: string;
}

const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const location = useLocation();

  const showSidebar = () => {
    if (location.pathname !== path.newPage) {
      setSidebar(!sidebar);
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            {location.pathname !== path.newPage ? (
              <FaIcons.FaBars onClick={showSidebar} />
            ) : null}
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <p className="menu-bars">
                <AiIcons.AiOutlineClose />
              </p>
            </li>
            {SidebarData.map((item: SidebarItem, index: number) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
