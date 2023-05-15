import React from "react";
import Button from "@mui/material/Button";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useHistory } from "react-router";

const Topbar = ({ title }) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <div className="p-3 bg-white border-bottom d-flex justify-content-between align-items-center">
      <p className="mb-0 ms-3 fs-x-large-semibold">{title}</p>
      <div className="col-md-2 d-flex justify-content-end">
        {/* <div className="col-md-6">
          <p className="fs-small-semibold text-blue mb-0">Admin</p>
          <p className="fs-small-regular text-grey mb-0">admin@gmail.com</p>
        </div> */}
        <Button
          onClick={handleLogout}
          className="fs-small-semibold"
          variant="outlined"
        >
          <LogoutOutlinedIcon fontSize="small" className="text-blue me-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
