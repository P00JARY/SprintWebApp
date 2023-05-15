import React from "react";
import SideBar from "../navbar/Sidebar";
import Topbar from "../navbar/Topbar";

const Layout = ({ title, children }) => {
  return (
    <div className="container-fluid   bg-light-grey">
      <div className="row ">
        <div className="col-md-2 col-3 px-0 ">
          <SideBar />
        </div>

        <div className="col-md-10 content-body px-0 col-9">
          <Topbar title={title}></Topbar>

          <div className="p-0 flex-column">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
