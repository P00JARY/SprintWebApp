import React, { useEffect,useState } from "react";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1200,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const InvestorModal = ({ open, onClose, isEdit, investor, handleSave }) => {

    const [investorForm, setInvestorForm] = useState(investor);


    const handleChange = (event) => {
        console.log(event.target.name);
        // console.log(investorForm);
        setInvestorForm({
            ...investorForm,
            [event.target.name]: event.target.value,
        });
    };

    // const handleSave =() =>{

    // }

    useEffect(() => {
        // console.log(investorForm, isEdit);
        if (isEdit) {
          setInvestorForm(investor);
        } else {
          setInvestorForm({});
        }
      }, [investor]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    {isEdit ? (
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Edit
                        </Typography>
                    ) : (
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Add
                        </Typography>
                    )}
                    <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
                        <TextField
                            sx={{ flex: 1 }}
                            id="outlined-basic"
                            name="fullName"
                            label="Investor Fullname"
                            helperText="Investor Fullname"
                            variant="outlined"
                            defaultValue={investor ? investor.fullName : ""}
                            fullWidth
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            sx={{ flex: 1 }}
                            id="outlined-basic"
                            name="mobile"
                            label="mobile"
                            helperText="Phone Number"
                            variant="outlined"
                            defaultValue={investor ? investor.mobile : ""}
                            fullWidth
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            sx={{ flex: 1 }}
                            id="outlined-basic"
                            name="email"
                            label="Email"
                            helperText="Email Address"
                            variant="outlined"
                            defaultValue={investor ? investor.email : ""}
                            fullWidth
                            onChange={(e) => handleChange(e)}
                        />
                    </Stack>
                    <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
                        <TextField
                            sx={{ flex: 1 }}
                            id="outlined-basic"
                            name="pan"
                            label="Pan"
                            helperText="Pan"
                            variant="outlined"
                            defaultValue={investor ? investor.pan : ""}
                            fullWidth
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            sx={{ flex: 1 }}
                            id="outlined-basic"
                            name="panName"
                            label="Pan Name"
                            helperText="Pan Name"
                            variant="outlined"
                            defaultValue={investor ? investor.panName : ""}
                            fullWidth
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            sx={{ flex: 1 }}
                            id="outlined-basic"
                            name="panDob"
                            label="Pan DOB"
                            helperText="Pan DOB"
                            variant="outlined"
                            defaultValue={investor ? investor.panDob : ""}
                            fullWidth
                            onChange={(e) => handleChange(e)}
                        />

                    </Stack>
                    <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                        <Button variant="contained" color="success" onClick={() => handleSave(investorForm)}>
                            Save Changes
                        </Button>
                        <Button variant="contained" color="error" onClick={onClose}>
                            Cancel
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </LocalizationProvider>
    );
}

export default InvestorModal;