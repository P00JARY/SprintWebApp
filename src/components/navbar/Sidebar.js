import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FileCpyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SideBar = () => {
  const location = useLocation();
  // console.log(location.pathname)
  return (
    <div
      id="sidebarContainer"
      className="h-100 col-md-2 col-3 sidebar-container bg-primary "
      style={{ position: "fixed", overflowY: "scroll" }}
    >
      <img className="px-5 py-4 logo" src="/logo.png" alt="Logo" />
      <div className="sidenav-group mt-3 d-flex align-items-start">
        <div className="nav flex-column nav-pills ms-3 w-100">
          {/* <Link
            to={{ pathname: "/" }}
            className={
              "nav-link sidenav-item fs-x-large-regular text-white text-center " +
              (location.pathname === "/"
                ? "active text-dark fs-x-large-semibold"
                : "fs-x-large-regular")
            }
            type="button"
            role="tab"
            aria-selected="true"
          >
            <div className="d-flex flex-row h-100 my-auto ">
              <DashboardCustomizeOutlinedIcon />
              <p className="sidenav-item-text my-auto  ms-2">Dashboard</p>
            </div>
          </Link> */}
            <Link
              to={{ pathname: "/portfolio" }}
              className={
                "nav-link sidenav-item text-white fs-x-large-regular text-center " +
                (location.pathname === "/portfolio"
                  ? "active text-dark fs-x-large-semibold"
                  : "fs-x-large-regular")
              }
              type="button"
              role="tab"
              aria-selected="false"
            >
              <div className="d-flex flex-row h-100 my-auto">
                <StoreOutlinedIcon />
                <span className="sidenav-item-text  ms-2">Portfolio</span>
              </div>
            </Link>

            <Link
              to={{ pathname: "/opportunity" }}
              className={
                "nav-link sidenav-item text-white fs-x-large-regular text-center " +
                (location.pathname === "/opportunity"
                  ? "active text-dark fs-x-large-semibold"
                  : "fs-x-large-regular")
              }
              type="button"
              role="tab"
              aria-selected="false"
            >
              <div className="d-flex flex-row h-100 my-auto">
                <StoreOutlinedIcon />
                <span className="sidenav-item-text  ms-2">Opportunity</span>
              </div>
            </Link>
            {/* <Link
            to={{ pathname: "/sip" }}
            className={
              "nav-link sidenav-item text-white fs-x-large-regular  text-center " +
              (location.pathname === "/sip"
                ? "active text-dark fs-x-large-semibold"
                : "fs-x-large-regular")
            }
            type="button"
            role="tab"
            aria-selected="false"
          >
            <div className="d-flex flex-row h-100 my-auto  ">
              <FileCpyOutlinedIcon />
              <span className="sidenav-item-text  ms-2">SIPs</span>
            </div>
          </Link> */}
            <Link
              to={{ pathname: "/company" }}
              className={
                "nav-link sidenav-item text-white fs-x-large-regular  text-center " +
                (location.pathname === "/company"
                  ? "active text-dark fs-x-large-semibold"
                  : "fs-x-large-regular")
              }
              type="button"
              role="tab"
              aria-selected="false"
            >
              <div className="d-flex flex-row h-100 my-auto  ">
                <StoreIcon />
                <span className="sidenav-item-text  ms-2">Company</span>
              </div>
            </Link>
            {/* <Link
            to={{ pathname: "/investor" }}
            className={
              "nav-link sidenav-item text-white fs-x-large-regular  text-center " +
              (location.pathname === "/investor"
                ? "active text-dark fs-x-large-semibold"
                : "fs-x-large-regular")
            }
            type="button"
            role="tab"
            aria-selected="false"
          >
            <div className="d-flex flex-row h-100 my-auto  ">
              <PeopleAltIcon />
              <span className="sidenav-item-text  ms-2">Investors</span>
            </div>
          </Link> */}
            {/* <Link
            to={{ pathname: "/user" }}
            className={
              "nav-link sidenav-item text-white fs-x-large-regular  text-center " +
              (location.pathname === "/user"
                ? "active text-dark fs-x-large-semibold"
                : "fs-x-large-regular")
            }
            type="button"
            role="tab"
            aria-selected="false"
          >
            <div className="d-flex flex-row h-100 my-auto  ">
              <PersonIcon />
              <span className="sidenav-item-text  ms-2">Users</span>
            </div>
          </Link> */}
            <Link
              to={{ pathname: "/queries" }}
              className={
                "nav-link sidenav-item text-white fs-x-large-regular  text-center " +
                (location.pathname === "/queries"
                  ? "active text-dark fs-x-large-semibold"
                  : "fs-x-large-regular")
              }
              type="button"
              role="tab"
              aria-selected="false"
            >
              <div className="d-flex flex-row h-100 my-auto  ">
                <PersonIcon />
                <span className="sidenav-item-text  ms-2">Queries</span>
              </div>
            </Link>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
