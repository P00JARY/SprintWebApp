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
import ProjectModal from "./ProjectModal";
import { getProjects, projectEdit, saveProjects } from "../../utils/api/api";
import dayjs from "dayjs";
import { toLocalePriceNoDecimal } from "../../utils/StringUtil";
import ProjectDeleteModal from "./ProjectDeleteModal";
import styles from "./Project.module.css";


const Projects = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [editProject, setEditProject] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setOpenDelete(false)
    setIsEdit(false);
    setEditProject(null);
  };

  const handleOpen = () => {
    setOpen(true);
    setEditProject(null);
  };

  const handleEdit = (id) => {
    setEditProject(projectList.find((item) => item.projRid === id));
    setOpen(true);
    setIsEdit(true);
  };

  const handleDelete = (id) =>{
    setEditProject(projectList.find((item) => item.projRid === id));
    setIsEdit(true)
    setOpenDelete(true)
  }

  const getProjectList = () => {
    getProjects()
      .then((res) => {
        setProjectList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(isEdit);
  },[isEdit])

  const handleSave = (project) => {

    console.log(isEdit);
    console.log(project);
    if (isEdit) {
      projectEdit(project)
        .then((res) => {
          setProjectList(res.data);
          handleClose();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      saveProjects(project)
        .then((res) => {
          setProjectList(res.data);
          handleClose();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // POST REQUEST HERE.  *TODO*
  };

  useEffect(() => {
    getProjectList();
  }, []);

  return (
    <Layout title="Projects">
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
      <ProjectModal
        open={open}
        onClose={handleClose}
        isEdit={isEdit}
        project={editProject}
        handleSave={(project) => handleSave(project)}
      />
      <ProjectDeleteModal
      open={openDelete}
      onClose={handleClose}
      project={editProject}
      handleSave={(project) => handleSave(project)}
      />
      {/* <div className="col m-3 d-flex flex-row justify-content-between">
        <div className="search-input-btn d-flex flex-row justify-content-between border-0 rounded bg-accent px-3 col-md-4">
          <div className="my-auto">
            <SearchIcon />
          </div>
          <input
            type="text"
            className="form-control custom-form-control border-0 bg-transparent fs-large-regular "
            placeholder="Search"
          />
        </div>
        <div className="col-md-4 justify-content-evenly d-flex"> */}
          {/* <Button variant="outlined">
            <FilterAltOutlinedIcon />
          </Button> */}
          {/* <Pagination count={10} siblingCount={0} defaultPage={1} /> */}
        {/* </div>
      </div> */}
      <div className="container-fluid align-self-center bg-accent p-0">
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
                {/* <th scope="col">
                  <p className="m-0">Status</p>
                </th> */}
                {/* <th scope="col">
                  <p className="m-0">Project ID</p>
                </th> */}
                <th scope="col">
                  <p className="m-0">Opportunity Title</p>
                </th>
                <th scope="col" className="pe-5">
                  <p className="m-0 text-end">Requested Amount</p>
                </th>
                <th scope="col">
                  <p className="m-0">Funding Duration</p>
                </th>
                <th scope="col">
                  <p className="m-0">Domain</p>
                </th>
                <th scope="col">
                  <p className="m-0">Investment Round</p>
                </th>
              </tr>
            </thead>

            {projectList ? (
              <tbody className="bg-table-blue">
                {projectList.map((item) => {
                  return (
                    <tr
                      className="fs-normal-medium text-center"
                      key={item.projRid}
                    >
                      <td className="p-0">
                        <div className="d-flex">
                          <IconButton
                            onClick={() => handleEdit(item.projRid)}
                            aria-label="edit"
                          >
                            <EditIcon className="text-blue" />
                          </IconButton>
                          <IconButton aria-label="delete"
                          onClick={() => {handleDelete(item.projRid)}}
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
                          Open
                        </Button>
                      </td> */}
                      {/* <td className="pt-3">{item.projRid}</td> */}
                      <td className="pt-3">{item.projTitle}</td>
                      <td className="pt-3 text-end pe-5">{toLocalePriceNoDecimal(item.reqAmount)}</td>
                      <td className="pt-3">{`${dayjs(item.fundingStartDate).format('DD/MM/YY')} - ${dayjs(item.fundingEndDate).format('DD/MM/YY')}`}</td>
                      <td className="pt-3">{item.domain}</td>
                      <td className="pt-3">{item.invRound}</td>
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

export default Projects;
