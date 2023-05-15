import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useState } from "react";

import "../sass/Home.scss";


function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-light-purple rounded-4">
      <ul className="main-nav">
        <li className="push">
          <h3 className="text-color">Portfolio</h3>
        </li>
        <li
          className=" d-xl-none d-xxl-none text-light-color"
          onClick={() => {
            // onclick
          }}
        >
          <MenuIcon />
        </li>
        <li className="d-none d-xl-block d-xxl-block text-light-color">
          Open Opportunities
        </li>
        <li className="d-none d-xl-block d-xxl-block text-light-color">
          Funds Available 50,000
        </li>
        <li className="d-none d-xl-block d-xxl-block text-yellow">|</li>

        <li className="text-light-blue d-none d-xl-block d-xxl-block justify-content-center align-items-center">
          <ChatBubbleOutlineOutlinedIcon />
        </li>
        <li className="text-light-blue d-none d-xl-block d-xxl-block justify-content-center align-items-center">
          <CallIcon />
        </li>
        <li
          className="toggle-button text-light-blue d-none d-xl-block d-xxl-block justify-content-center align-items-center"
          onClick={handleClick}
        >
          <PermIdentityIcon />
        </li>
        {isOpen && <div className="box" onMouseLeave={handleClick}>
          <ul>
            <li className="text-light-color">My Profile</li><hr />
            <li className="text-light-color"> Setting</li><hr />
            <li className="text-light-color">Logout</li>
          </ul>
        </div>}

      </ul>
    </div>


  );
}

export default NavBar;
