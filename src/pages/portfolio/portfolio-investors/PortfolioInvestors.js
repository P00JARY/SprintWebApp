import PortfolioInvestorModal from "./PortfolioInvestorModal";
import Layout from "../../../components/layout/Layout";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import Pagination from "@mui/material/Pagination";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { editPortfolioInvestor, getPortfolioInvestors, savePortfolioInvestor } from "../../../utils/api/api";
import PortfolioInvDeleteModal from "./PortfolioInvDeleteModal";

const PortfolioInvestor = () => {

    const [open, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [investorList, setInvestorList] = useState([]);
    const [editInvestor, setEditInvestor] = useState(null);
    const [openDelete, setOpenDelete] = useState(false);


    const handleOpen = () => {
        setOpen(true);
        setEditInvestor(null);
    };

    const handleEdit = (id) => {
        setEditInvestor(investorList.find((item) => item.invRid === id));
        setOpen(true);
        setIsEdit(true);
    };

    const handleDelete = (id) => {
        setEditInvestor(investorList.find((item) => item.invRid === id));
        setOpenDelete(true)
        setIsEdit(true)
    };

    const getInvestors = () => {
        getPortfolioInvestors()
            .then((res) => {
                setInvestorList(res.data)
            })
            .catch((e) => {
                console.log(e);
            })
    }

    const handleSave = (investor) => {
        console.log(isEdit);
        console.log(investor);
        if (isEdit) {
            editPortfolioInvestor(investor)
                .then((res) => {
                    setInvestorList(res.data)
                })
                .catch((e) => {
                    console.log(e);
                })
        } else {
            savePortfolioInvestor(investor)
                .then((res) => {
                    setInvestorList(res.data)
                })
                .catch((e) => {
                    console.log(e);
                })
        }

        handleClose()
    }



    const handleClose = () => {
        setOpen(false);
        setOpenDelete(false)
        setIsEdit(false);
        setEditInvestor(null);
    };

    useEffect(() => {
        getInvestors()
    }, [])

    return (

        <Layout title="Co-Investors">
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
            <PortfolioInvestorModal
                open={open}
                onClose={handleClose}
                isEdit={isEdit}
                investor={editInvestor}
                handleSave={(investor) => handleSave(investor)}
            />
            <PortfolioInvDeleteModal
            open={openDelete}
            onClose={handleClose}
            investor={editInvestor}
            handleSave={(investor) => handleSave(investor)}
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
                                <th scope="col">
                                    <p className="m-0">Name</p>
                                </th>
                                <th scope="col">
                                    <p className="m-0">Designation</p>
                                </th>
                            </tr>
                        </thead>
                        {
                            investorList ? (
                                <tbody className="bg-table-blue">
                                    {investorList.map((item, index) => {
                                        return (
                                            <tr
                                                className="fs-normal-medium text-center"
                                                key={index}
                                            >
                                                <td className="p-0">
                                                    <div className="d-flex">
                                                        <IconButton
                                                            onClick={() => handleEdit(item.invRid)}
                                                            aria-label="edit"
                                                        >
                                                            <EditIcon className="text-blue" />
                                                        </IconButton>
                                                        <IconButton aria-label="delete"
                                                            onClick={() => { handleDelete(item.invRid) }}
                                                        >
                                                            <DeleteOutlineIcon className="text-danger" />
                                                        </IconButton>
                                                    </div>
                                                </td>
                                                <td className="pt-3">{item.fullName}</td>
                                                <td className="pt-3">{item.designation}</td>
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

export default PortfolioInvestor;