import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../../projects/Project.module.css"
import { getDataDictionaryValues, uploadImage } from "../../../utils/api/api";
import { BASE_URL } from "../../../utils/constants/constants";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";



const PortfolioInvestorModal = ({ open, onClose, isEdit, investor, handleSave }) => {

    const [investorForm, setInvestorForm] = useState(null);
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
        setInvestorForm({
            ...investorForm,
            [e.target.name]: e.target.value
        })
    }

    const addImage = (e) => {

        uploadImage(e.target.files[0])
            .then((res) => {
                console.log(res.data);

                setInvestorForm({
                    ...investorForm,
                    imgUrl: res.data.path,
                });

            })
            .catch((error) => {
                console.log(error);
            })
    };

    const handleSubmit = () => {

        if (investorForm.fullName === null || investorForm.fullName === "" || investorForm.designation === null || investorForm.designation === "") {
            console.log("investor details is null");
            return
        }

        handleSave(investorForm)
    }

    useEffect(() => {

        if (isEdit) {
            setInvestorForm(investor)
            console.log(investor);
        } else {
            setInvestorForm({})
        }

    }, [investor])

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
                        {isEdit ? 'Edit Co Investor' : 'Add Co Investor'}
                    </Typography>
                </div>
                <Stack sx={{ marginBottom: "1rem", marginTop: "2rem" }} direction="row" spacing={2}>
                    <TextField
                        sx={{ flex: 1 }}
                        id="outlined-basic"
                        name="fullName"
                        label="Name"
                        required
                        variant="outlined"
                        defaultValue={investor ? investor.fullName : ""}
                        fullWidth
                        onChange={(e) => handleChange(e)}
                    />
                    <TextField
                        sx={{ flex: 1 }}
                        id="outlined-basic"
                        name="designation"
                        label="Designation"
                        required
                        variant="outlined"
                        defaultValue={investor ? investor.designation : ""}
                        fullWidth
                        onChange={(e) => handleChange(e)}
                    />
                </Stack>
                <p className="section-label mt-4 mb-0">
                    Profile 
                </p>
                <Stack direction="row" sx={{ mt: 2 }}>
                    <input
                        id="input-image"
                        className="d-none"
                        type="file"
                        onClick={(e) => {
                            e.target.value = null;
                        }}
                        onChange={(e) => {
                            addImage(e);
                        }}
                    />
                    <img className="img-preview" onClick={() => openExlporer()} src={investorForm?.imgUrl ? `${BASE_URL}/${investorForm?.imgUrl}` : '/no-image.jpg'} />
                </Stack>
                <div className="row mx-0 justify-content-end w-100 mt-3 modal-footer bg-white py-4">
                    <button className="btn w-fit px-4 me-1" onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className="btn btn-primary w-fit px-4"
                        type="submit"
                        onClick={() => handleSubmit()}
                    >
                        Save
                    </button>
                </div>
            </Box>

        </Modal>
    );
}

export default PortfolioInvestorModal;