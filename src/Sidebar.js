import React from "react";
import {
  BsGrid,
  BsFillHouseDoorFill,
  BsReception3,
  BsJournalCheck,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <>
      <aside
        id="sidebar"
        className={openSidebarToggle ? "sidebar-responsive" : ""}
      >
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <BsGrid className="icon_header" />
          </div>
          {/* <span className="icon close_icon" onClick={OpenSidebar}>
            X
          </span> */}
        </div>

        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="">
              <BsFillHouseDoorFill className="icon" />
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsReception3 className="icon" />
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsJournalCheck className="icon" />
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsPeopleFill className="icon" />
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsListCheck className="icon" />
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
