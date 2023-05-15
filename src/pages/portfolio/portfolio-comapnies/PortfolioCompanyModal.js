import { Chip, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useState } from "react";
import { Autocomplete } from "@mui/material";
import styles from "../../projects/Project.module.css";
import { getCoInvestors, getDataDictionaryValues, uploadImage } from "../../../utils/api/api";
import { BASE_URL, DD_TYPE_PROJECT_DOMAIN, DD_TYPE_STAGE_OF_COMPANY, DD_TYPE_INVESTMENT_TYPE, DD_TYPE_INV_ROUND_TYPE } from "../../../utils/constants/constants";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";



const PortfolioCompanyModal = ({ open, onClose, isEdit, company, handleSave }) => {

    const [companyForm, setCompanyForm] = useState(null);
    const [stageOfCompanyList, setStageOfCompanyList] = useState([]);
    const [typeOfInvList, setTypeOfInvList] = useState([]);
    const [domainList, setDomainList] = useState([]);
    const [invRoundList, setInvRoundList] = useState([]);
    const [coInvestorsList, setCoInvestorsList] = useState([]);


    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 1200,
        maxHeight: '80vh',
        bgcolor: "background.paper",
        boxShadow: 24,
        overflow: "auto",
        padding: '0px 20px',
    };

    const handleChange = (e) => {
        console.log(e);
        setCompanyForm({
            ...companyForm,
            [e.target.name]: e.target.value
        })
    }

    const addImage = (e) => {

        uploadImage(e.target.files[0])
            .then((res) => {
                console.log(res.data);

                setCompanyForm({
                    ...companyForm,
                    logoUrl: res.data.path,
                });

            })
            .catch((error) => {
                console.log(error);
            })
    };

    const getCoInvestorsList = () => {
        getCoInvestors()
            .then((res) => {
                setCoInvestorsList(res.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }

    const handleDeleteCoInvestor = (index) => {

        const invList = companyForm.coInvestors

        invList.splice(index, 1)

        setCompanyForm({
            ...companyForm,
            coInvestors: invList
        })

    }

    const handleAddCoInvestor = (inv) => {

        if (inv === null) {
            return
        }


        if (typeof inv === "string") {
            return
        }

        let invList = []

        if (companyForm.coInvestors) {
            invList = companyForm.coInvestors
        }

        if (inv === invList.find((item) => item === inv)) {
            console.log("duplicate");
            return
        }




        invList.push(inv);

        console.log(inv, invList);

        setCompanyForm({
            ...companyForm,
            coInvestors: [...invList]
        })

    }

    const handleAutoComplete = (value, type) => {

        if (Object.keys(companyForm).length === 0) {
            return
        }


        if (type === DD_TYPE_PROJECT_DOMAIN) {
            const ddData = domainList.find((item) =>
                item.ddValue === value
            )

            if (ddData) {
                setCompanyForm({
                    ...companyForm,
                    "sectorIndex": ddData.ddIndex
                })
            } else {
                setCompanyForm({
                    ...companyForm,
                    "sector": value,
                    "sectorIndex": null
                })
            }

        }


        if (type === DD_TYPE_STAGE_OF_COMPANY) {
            const ddData = stageOfCompanyList.find((item) =>
                item.ddValue === value
            )

            if (ddData) {
                setCompanyForm({
                    ...companyForm,
                    "compStatusIndex": ddData.ddIndex
                })
            } else {
                setCompanyForm({
                    ...companyForm,
                    "compStatus": value,
                    "compStatusIndex": null
                })
            }

        }

        if (type === DD_TYPE_INV_ROUND_TYPE) {
            const ddData = invRoundList.find((item) =>
                item.ddValue === value
            )

            if (ddData) {
                setCompanyForm({
                    ...companyForm,
                    "invRoundIndex": ddData.ddIndex
                })
            } else {
                setCompanyForm({
                    ...companyForm,
                    "invRound": value,
                    "invRoundIndex": null
                })
            }

        }
    }

    const getDataDictionary = () => {
        getDataDictionaryValues()
            .then((res) => {

                const invTypes = res.data.filter((item) =>
                    item.ddType === DD_TYPE_INVESTMENT_TYPE
                )

                const domains = res.data.filter((item) =>
                    item.ddType === DD_TYPE_PROJECT_DOMAIN
                )

                const stages = res.data.filter((item) =>
                    item.ddType === DD_TYPE_STAGE_OF_COMPANY
                )

                const rounds = res.data.filter((item) =>
                    item.ddType === DD_TYPE_INV_ROUND_TYPE
                )

                setTypeOfInvList(invTypes)
                setDomainList(domains)
                setStageOfCompanyList(stages)
                setInvRoundList(rounds)

            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {

        if (isEdit) {

            if (typeof company.coInvestors === "string") {
                company.coInvestors = JSON.parse(company.coInvestors)
            }

            if (typeof company.coInvestors === "string") {
                company.coInvestors = JSON.parse(company.coInvestors)
            }

            setCompanyForm(company)
        } else {
            setCompanyForm({})
        }

        getDataDictionary()
        getCoInvestorsList()

    }, [company])

    const openExlporer = () => {
        document.getElementById('input-image').click()
    }

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className="modal-header">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {isEdit ? 'Edit Company' : 'Add Company'}
                    </Typography>
                </div>

                <Stack sx={{ marginBottom: "1rem", marginTop: '2rem' }} direction="row" spacing={2}>
                    <TextField
                        sx={{ flex: 1 }}
                        id="outlined-basic"
                        name="title"
                        label="Company"
                        variant="outlined"
                        defaultValue={company ? company.title : ""}
                        fullWidth
                        onChange={(e) => handleChange(e)}
                    />
                    <TextField
                        sx={{ flex: 1 }}
                        id="outlined-basic"
                        name="website"
                        label="Website"
                        variant="outlined"
                        defaultValue={company ? company.website : ""}
                        fullWidth
                        onChange={(e) => handleChange(e)}
                    />


                </Stack>
                <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>

                    <Autocomplete
                        freeSolo
                        name="Sector"
                        sx={{ flex: 1 }}
                        defaultValue={domainList && company ? domainList.find((item) => item.ddIndex === company.sectorIndex) : ""}
                        onInputChange={(_event, newInputValue) => {
                            handleAutoComplete(newInputValue, DD_TYPE_PROJECT_DOMAIN);
                        }}
                        options={domainList}
                        getOptionLabel={(option) => option.ddValue}
                        renderInput={(params) =>
                            <TextField {...params}
                                label="Sector" />}
                    />
                    <Autocomplete
                        freeSolo
                        name="Round"
                        sx={{ flex: 1 }}
                        defaultValue={invRoundList && company ? invRoundList.find((item) => item.ddIndex === company.invRoundIndex) : ""}
                        onInputChange={(_event, newInputValue) => {
                            handleAutoComplete(newInputValue, DD_TYPE_INV_ROUND_TYPE);
                        }}
                        options={invRoundList}
                        getOptionLabel={(option) => option.ddValue}
                        renderInput={(params) =>
                            <TextField {...params}
                                label="Round" />}
                    />
                    <Autocomplete
                        freeSolo
                        name="status"
                        sx={{ flex: 1 }}
                        defaultValue={stageOfCompanyList && company ? stageOfCompanyList.find((item) => item.ddIndex === company.compStatusIndex) : ""}
                        onInputChange={(_event, newInputValue) => {
                            handleAutoComplete(newInputValue, DD_TYPE_STAGE_OF_COMPANY);
                        }}
                        options={stageOfCompanyList}
                        getOptionLabel={(option) => option.ddValue}
                        renderInput={(params) =>
                            <TextField {...params}
                                label="status" />}
                    />
                </Stack>
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <TextField
                        rows="4"
                        multiline
                        variant="outlined"
                        className="form-control"
                        name="description"
                        label="Description"
                        onChange={(e) => handleChange(e)}
                        defaultValue={companyForm ? companyForm.description : ""}
                        aria-label="With textarea" />
                </Stack>

                <p className="section-label mt-4 mb-0">
                    Co Investors
                </p>
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Autocomplete
                        freeSolo
                        onChange={(_event, value) => {
                            handleAddCoInvestor(value)
                        }}
                        label="Search"
                        sx={{ flex: 1 }}
                        options={coInvestorsList}
                        getOptionLabel={(option) => option.fullName}
                        renderInput={(params) =>
                            <TextField {...params}
                                label="Search CoInvestors" />}
                    />
                </Stack>
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    {
                        companyForm?.coInvestors?.map((item, index) => {
                            return (
                                // console.log(item)
                                <Chip label={item.fullName} key={index} onDelete={() => handleDeleteCoInvestor(item)} />
                            )
                        })
                    }
                </Stack>
                <p className="section-label mt-4 mb-0">
                    Logo
                </p>
                <Stack direction="row" sx={{ mt: 2 }}>
                    <input
                        className="d-none"
                        id="input-image"
                        type="file"
                        onClick={(e) => {
                            e.target.value = null;
                        }}
                        onChange={(e) => {
                            addImage(e);
                        }}
                    />
                    <img className="img-preview" onClick={() => openExlporer()} src={companyForm?.logoUrl ? `${BASE_URL}/${companyForm.logoUrl}` : '/no-image.jpg'} />

                </Stack>

                <div className="row mx-0 justify-content-end w-100 mt-3 modal-footer bg-white py-4">
                    <button className="btn w-fit px-4 me-1" onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className="btn btn-primary w-fit px-4"
                        type="submit"
                        onClick={() => handleSave(companyForm)}
                    >
                        Save
                    </button>
                </div>
            </Box>

        </Modal>
    );
}

export default PortfolioCompanyModal;