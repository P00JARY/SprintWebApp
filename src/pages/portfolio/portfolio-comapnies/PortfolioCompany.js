import Layout from "../../../components/layout/Layout";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import Pagination from "@mui/material/Pagination";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { IconButton, Modal } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { editPortfolioCompany, getPortfolioCompanies, savePortfolioCompany } from "../../../utils/api/api";
import PortfolioCompanyModal from "./PortfolioCompanyModal";
import PortfolioCompDeleteModal from "./PortfolioCompDeleteModal";


const PortfolioCompany = () => {
    const [open, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [companyList, setCompanyList] = useState([]);
    const [editCompany, setEditCompany] = useState(null);
    const [openDelete, setOpenDelete] = useState(false);


    const handleOpen = () => {
        setOpen(true);
        setEditCompany(null);
    };

    const handleEdit = (id) => {
        setEditCompany(companyList.find((item) => item.compRid === id));
        setOpen(true);
        setIsEdit(true);
    };

    const handleDelete = (id) => {
        setEditCompany(companyList.find((item) => item.compRid === id));
        setOpenDelete(true)
        setIsEdit(true)
    };

    const handleClose = () => {
        setOpen(false);
        setOpenDelete(false)
        setIsEdit(false);
        setEditCompany(null);
    };

    const getCompanies = () => {
        getPortfolioCompanies()
            .then((res) => {
                setCompanyList(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleSave = (company) => {
        if (isEdit) {
            editPortfolioCompany(company)
                .then((res) => {
                    console.log(res);
                    setCompanyList(
                        res.data
                    )
                    handleClose()
                })
                .catch((e) => {
                    console.log(e)
                })
        } else {
            savePortfolioCompany(company)
                .then((res) => {
                    setCompanyList(
                        res.data
                    )
                    handleClose()

                })
                .catch((e) => {
                    console.log(e);
                })
        }
    }

    useEffect(() => {
        getCompanies()
    }, [])

    return (
        <Layout title="Portfolio Companies">
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
            <PortfolioCompanyModal
                open={open}
                onClose={handleClose}
                isEdit={isEdit}
                company={editCompany}
                handleSave={(company) => handleSave(company)}
            />
            <PortfolioCompDeleteModal
            open={openDelete}
            onClose={handleClose}
            isEdit={isEdit}
            company={editCompany}
            handleSave={(company) => handleSave(company)}
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
                                    <p className="m-0">Company Name</p>
                                </th>
                                <th scope="col">
                                    <p className="m-0">Sector</p>
                                </th>
                                <th scope="col">
                                    <p className="m-0">Investment Round</p>
                                </th>
                            </tr>
                        </thead>
                        {
                            companyList ? (
                                <tbody className="bg-table-blue">
                                    {companyList.map((item, index) => {
                                        return (
                                            <tr
                                                className="fs-normal-medium text-center"
                                                key={index}
                                            >
                                                <td className="p-0">
                                                    <div className="d-flex">
                                                        <IconButton
                                                            onClick={() => handleEdit(item.compRid)}
                                                            aria-label="edit"
                                                        >
                                                            <EditIcon className="text-blue" />
                                                        </IconButton>
                                                        <IconButton aria-label="delete"
                                                            onClick={() => { handleDelete(item.compRid) }}
                                                        >
                                                            <DeleteOutlineIcon className="text-danger" />
                                                        </IconButton>
                                                    </div>
                                                </td>
                                                <td className="pt-3">{item.title}</td>
                                                <td className="pt-3">{item.sector}</td>
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
}

export default PortfolioCompany;