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
import { companyEdit, getCompanies } from "../../utils/api/api";
import CompanyModal from "./CompanyModal";
import CompanyDeleteModal from "./CompanyDeleteModal";

const Company = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [companyList, setCompanyList] = useState([]);
  const [editCompany, setEditCompany] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);



  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
    setOpenDelete(false);
    setEditCompany(null);
  };

  const handleAdd = () => {
    setOpen(true);
    setIsEdit(false);
    setEditCompany(null);
  };

  const handleEdit = (id) => {
    setEditCompany(companyList.find((item) => item.compRid === id))
    setOpen(true);
    setIsEdit(true);
  };

  const handleDelete = (id) => {
    setEditCompany(companyList.find((item) => item.compRid === id));
    setOpenDelete(true)
    setIsEdit(true)
  };

  const handleSave = (company) => {
    console.log(isEdit);
    console.log(company)
    if (isEdit) {
      companyEdit(company)
        .then((res) => {
          setCompanyList(res.data)
          handleClose()
        })
        .catch((error) => {
          console.log(error);
        })
    }
  };

  const getCompanyList = () => {

    getCompanies()
      .then((res) => {
        setCompanyList(res.data);
      }).catch((error) => {
        console.log(error);
      })


  }


  useEffect(() => {
    getCompanyList()
  }, [])

  return (
    <Layout title="Company">
      <Button
        sx={{
          height: "64px",
          borderRadius: "50%",
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
        onClick={handleAdd}
        variant="contained"
        aria-label="edit"
      >
        <AddIcon />
      </Button>
      <CompanyModal
        open={open}
        onClose={handleClose}
        company={editCompany}
        isEdit={isEdit}
        handleSave={(company) => handleSave(company)} />
      <CompanyDeleteModal
        open={openDelete}
        onClose={handleClose}
        company={editCompany}
        handleSave={(company) => handleSave(company)}
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
          {companyList.length > 0 ? (
            <table
              className="table table-striped table-borderless w-100"
              id="order-table"
            >
              <thead>
                <tr className="fs-normal-semibold text-center">
                  <th scope="col">
                    <p className="m-0">Actions</p>
                  </th>
                  {/* <th scope="col">
                  <p className="m-0">Status</p>
                </th> */}
                  {/* <th scope="col">
                  <p className="m-0">Company ID</p>
                </th> */}
                  <th scope="col">
                    <p className="m-0">Company Title</p>
                  </th>
                </tr>
              </thead>

              <tbody className="bg-table-blue">{
                companyList.map((item) => {

                  return (
                    <tr className="fs-normal-medium text-center"
                      key={item.compRid}
                    >
                      <td className="p-0">
                        <div className="d-flex">
                          <IconButton onClick={() => handleEdit(item.compRid)} aria-label="edit">
                            <EditIcon className="text-blue" />
                          </IconButton>
                          <IconButton aria-label="delete"
                            onClick={() => { handleDelete(item.compRid) }}
                          >
                            <DeleteOutlineIcon className="text-danger" />
                          </IconButton>
                        </div>
                      </td>
                      {/* <td className="py-auto">
                  <Button
                    variant="contained"
                    className="styling-none w-50 blue-accent text-blue fs-small-semibold"
                  >
                    {item.status === 1 ? 'Open' : 'Closed'}
                  </Button>
                </td> */}
                      {/* <td className="pt-3">{item.compRid}</td> */}
                      <td className="pt-3">{item.title}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (<p>No Data..</p>)}
        </div>
      </div>
    </Layout>
  );
};

export default Company;
