import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import SipModal from "./SipModal";
import { getSip, sipEdit, saveSip } from "../../utils/api/api";

const Sip = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [sipList, setSipList] = useState([]);
  const [editSip, setEditSip] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
    setEditSip(null);
  };

  const handleAdd = () => {
    setOpen(true);
    setIsEdit(false);
    setEditSip(null);
  };

  const handleEdit = (id) => {
    setEditSip(sipList.find((item) => item.sipRid === id));
    setOpen(true);
    setIsEdit(true);
  };

  const getSipData = () => {
    getSip()
      .then((res) => {
        console.log(res.data);
        setSipList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getSipData();
  }, []);

  const handleSave = (sip) => {
    console.log(isEdit);
    console.log(sip);
    if (isEdit) {
      sipEdit(sip)
        .then((res) => {
          setSipList(res.data);
          handleClose();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      saveSip(sip)
        .then((res) => {
          setSipList(res.data);
          handleClose();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // TODO* POST REQUEST HERE
  };

  return (
    <Layout title="SIP">
      <SipModal
        open={open}
        onClose={handleClose}
        isEdit={isEdit}
        handleSave={(sip) => handleSave(sip)}
        sip={editSip}
      />
      <Button
        onClick={handleAdd}
        sx={{
          height: "64px",
          borderRadius: "50%",
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
        variant="contained"
        aria-label="edit"
      >
        <AddIcon className="text-blue" />
      </Button>
      <div className="col m-3 d-flex flex-row justify-content-between">
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
      </div>
      <div className="container-fluid align-self-center bg-accent vh-100 p-0">
        <div className="col-md-12 p-3 table-container">
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
                  <p className="m-0">SIP ID</p>
                </th>
                <th scope="col">
                  <p className="m-0">SIP Title</p>
                </th>
                <th scope="col">
                  <p className="m-0">Target Amount</p>
                </th>
              </tr>
            </thead>

            {sipList ? (
              <tbody className="bg-table-blue">
                {sipList.map((item, index) => {
                  return (
                    <tr
                      key={item.sipRid}
                      className="fs-normal-medium text-center"
                    >
                      <td className="p-0">
                        <div className="d-flex justify-content-center">
                          <IconButton
                            onClick={() => handleEdit(item.sipRid)}
                            aria-label="edit"
                          >
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
                          className="fs-small-semibold"
                        >
                          Open
                        </Button>
                      </td>
                      <td className="pt-3">{item.sipRid}</td>
                      <td className="pt-3">{item.title}</td>
                      <td className="pt-3">{item.targetAmount}</td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <p>No Data..</p>
            )}
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Sip;
