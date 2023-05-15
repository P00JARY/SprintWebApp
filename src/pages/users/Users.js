import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import UserModal from "./UserModal";
import { getUsers, userEdit } from "../../utils/api/api";


const Users = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [userList, setUserList] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
  };

  const handleOpen = () => setOpen(true);

  const handleEdit = (id) => {
    setEditUser(userList.find((item) => item.userRid === id))
    setOpen(true);
    setIsEdit(true);
  };

  const handleSave = (user) => {
    console.log(isEdit);
    console.log(user)
    if(isEdit){
      userEdit(user)
      .then((res) => {
        setUserList(res.data);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      })
    }
  };

  const getUserList = () => {
    getUsers()
      .then((res) => {
        setUserList(res.data)
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <Layout title="Users">
      <Button
        sx={{
          height: "64px",
          borderRadius: "50%",
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
        onClick={handleOpen}
        variant="contained"
        aria-label="edit"
      >
        <AddIcon />
      </Button>
      <UserModal
        open={open}
        onClose={handleClose}
        user={editUser}
        isEdit={isEdit} 
        handleSave={(user) => handleSave(user)}
        />
      {/* <ProjectModal open={open} onClose={handleClose} isEdit={isEdit} /> */}
      {/* <div className="col m-3 d-flex flex-row justify-content-between">
        <div className="search-input-btn d-flex flex-row justify-content-between border-0 rounded bg-accent px-3 col-md-4">
          <div className="my-auto">
            <SearchIcon />
          </div>
          <input
            type="text"
            className="form-control custom-form-control border-0 bg-transparent fs-large-regular "
            placeholder="Search by Order"
          />
        </div>
        <div className="col-md-4 justify-content-evenly d-flex">
          <Button variant="outlined">
            <FilterAltOutlinedIcon />
          </Button>
          <Pagination count={10} siblingCount={0} defaultPage={1} />
        </div>
      </div> */}
      <div className="container-fluid align-self-center bg-accent vh-100 p-0">
        <div className="col-md-12 p-3 table-container">
          {userList.length > 0 ? (
            <table
              className="table table-striped table-borderless w-100"
              id="order-table"
            >
              <thead>
                <tr className="fs-normal-semibold text-center">
                  <th scope="col">
                    <p className="m-0">Actions</p>
                  </th>
                  <th scope="col">
                    <p className="m-0">Status</p>
                  </th>
               
                  <th scope="col">
                    <p className="m-0">Full Name</p>
                  </th>
                  <th scope="col">
                    <p className="m-0">Mobile</p>
                  </th>
                  <th scope="col">
                    <p className="m-0">Email</p>
                  </th>
                  <th scope="col">
                    <p className="m-0">Signed Up Via</p>
                  </th>
                  <th scope="col">
                    <p className="m-0">Already Invested?</p>
                  </th>
                </tr>
              </thead>

              <tbody className="bg-table-blue">{
                userList.map((item) => {
                  return (
                    <tr className="fs-normal-medium text-center"
                      key={item.userRid}
                    >
                      <td className="p-0">
                        <div className="d-flex">
                          <IconButton onClick={()=>handleEdit(item.userRid)} aria-label="edit">
                            <EditIcon className="text-blue" />
                          </IconButton>
                          <IconButton aria-label="delete">
                            <DeleteOutlineIcon className="text-danger" />
                          </IconButton>
                        </div>
                      </td>
                      <td className="py-auto">
                        <Button
                          variant="contained"
                          className="styling-none w-50 blue-accent text-blue fs-small-semibold"
                        >
                          {item.status === 1 ? 'Active' : 'InActive'}
                        </Button>
                      </td>
                      <td className="pt-3">{item.fullName}</td>
                      <td className="pt-3">{item.mobile}</td>
                      <td className="pt-3">{item.email}</td>
                      <td className="pt-3">{item.signedUpVia}</td>
                      <td className="pt-3">{item.alreadyInvested === true ? 'Yes' : 'No'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (<p>No Data..</p>)}

          {/* <tr className="fs-normal-medium text-center">
                <td className="p-0">
                  <div className="d-flex justify-content-center">
                    <IconButton aria-label="edit">
                      <EditIcon className="text-blue" />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <DeleteOutlineIcon className="text-danger" />
                    </IconButton>
                  </div>
                </td>
                <td className="py-auto">
                  <Button
                    variant="contained"
                    className="styling-none w-50 blue-accent text-blue fs-small-semibold"
                  >
                    Open
                  </Button>
                </td>
                <td className="pt-3">2841782712</td>
                <td className="pt-3">Project One</td>
                <td className="pt-3">56</td>
                <td className="pt-3">79,25,952</td>
                <td className="pt-3">2</td>
                <td className="pt-3">Pre-Seed</td>
              </tr>
              <tr className="fs-normal-medium text-center">
                <td className="p-0">
                  <div className="d-flex justify-content-center">
                    <IconButton aria-label="edit">
                      <EditIcon className="text-blue" />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <DeleteOutlineIcon className="text-danger" />
                    </IconButton>
                  </div>
                </td>
                <td className="py-auto">
                  <Button
                    variant="contained"
                    className="styling-none w-50 blue-accent text-blue fs-small-semibold"
                  >
                    Open
                  </Button>
                </td>
                <td className="pt-3">2841782712</td>
                <td className="pt-3">Project One</td>
                <td className="pt-3">56</td>
                <td className="pt-3">79,25,952</td>
                <td className="pt-3">2</td>
                <td className="pt-3">Pre-Seed</td>
              </tr> */}
        </div>
      </div>
    </Layout>
  );
};

export default Users;
