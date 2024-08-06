import React from "react";
import {
  BsGrid,
  BsFillHouseDoorFill,
  BsReception3,
  BsJournalCheck,
  BsPeopleFill,
  BsListCheck,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const sidebarItems = [
  {
    icon: <BsFillHouseDoorFill className="icon" />,
    link: "/",
    key: "item-1",
  },
  {
    icon: <BsReception3 className="icon" />,
    link: "/",
    key: "item-1",
  },
  {
    icon: <BsJournalCheck className="icon" />,
    link: "/",
    key: "item-1",
  },
  {
    icon: <BsPeopleFill className="icon" />,
    link: "/",
    key: "item-1",
  },
  {
    icon: <BsListCheck className="icon" />,
    link: "/",
    key: "item-1",
  },
];

function Sidebar() {
  return (
    <>
      <aside id="sidebar">
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <BsGrid className="icon_header" />
          </div>
        </div>

        <ul className="sidebar-list">
          {sidebarItems.map((item, index) => {
            return (
              <li key={"item-" + index} className="sidebar-list-item">
                <Link to={item.link}>{item.icon}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
