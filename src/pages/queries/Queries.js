import Layout from "../../components/layout/Layout";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import Pagination from "@mui/material/Pagination";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { getQueries } from "../../utils/api/api";
import QueriesModal from "./QueriesModal";

const Queries = () => {

    const[queriesList,setQueriesList] = useState([]);
    const [open, setOpen] = useState(false);
    // const [isEdit, setIsEdit] = useState(false);
    const [editQuery, setEditQuery] = useState(null);

    const handleClose =() => {
        setOpen(false)
        setEditQuery(null)
    }

    const handleEdit = (id) => {
        console.log(id);
        setEditQuery(queriesList.find((item) => item.queryRid === id))
        setOpen(true);
        // setIsEdit(true);
      };

    const getQueriesList = () =>{
        getQueries()
        .then((res) => {
            setQueriesList(res.data )
        })
        .catch((e) => {
            console.log(e);
        })
    }

    useEffect(() =>{
        console.log(queriesList);
    },[queriesList])


    useEffect(() => {
        getQueriesList()
    },[])

    return (
        <Layout title="Portfolio Companies">
            {/* <Button
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
            </Button> */}
            <QueriesModal
             open={open}
             onClose={handleClose}
             query={editQuery}
            />
            
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
                                    <p className="m-0">id</p>
                                </th> */}
                                <th scope="col">
                                    <p className="m-0">Name</p>
                                </th>
                                <th scope="col">
                                    <p className="m-0">Email</p>
                                </th>
                                <th scope="col">
                                    <p className="m-0">Phone</p>
                                </th>
                                <th scope="col">
                                    <p className="m-0">Interested In</p>
                                </th>
                            </tr>
                        </thead>
                        {
                            queriesList ? (
                                <tbody className="bg-table-blue">
                                    {queriesList.map((item) => {
                                        return (
                                            <tr
                                                className="fs-normal-medium text-center"
                                                key={item.queryRid}
                                            >
                                                <td className="p-0">
                                                    <div className="d-flex">
                                                        <IconButton
                                                            onClick={() => handleEdit(item.queryRid)}
                                                            aria-label="edit"
                                                        >
                                                            <EditIcon className="text-blue" />
                                                        </IconButton>
                                                        {/* <IconButton aria-label="delete">
                                                            <DeleteOutlineIcon className="text-danger" />
                                                        </IconButton> */}
                                                    </div>
                                                </td>
                                                {/* <td className="pt-3">{item.contactRid}</td> */}
                                                <td className="pt-3">{item.name}</td>
                                                <td className="pt-3">{item.email}</td>
                                                <td className="pt-3">{item.phone}</td>
                                                <td className="pt-3">{item.interestedIn}</td>
                                             
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
}

export default Queries;