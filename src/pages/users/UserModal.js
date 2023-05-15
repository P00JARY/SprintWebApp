import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Switch } from "@mui/material";
import Container from '@mui/material/Container';




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

const UserModal = ({ open, onClose, isEdit, user, handleSave }) => {

    const [userForm, setUserForm] = useState(user);


    const handleChange = (event) => {
        // console.log(event);

        if (event.target.name === "alreadyInvested") {
            console.log(event.target.checked);
            setUserForm({
                ...userForm,
                [event.target.name]: event.target.checked,
            });
        } else {
            setUserForm({
                ...userForm,
                [event.target.name]: event.target.value,
            });
        }


    };

    useEffect(() => {
        if (isEdit) {
            setUserForm(user);
            //   console.log(userForm, isEdit);

        } else {
            setUserForm({});
        }
    }, [user]);

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
                            label="User Fullname"
                            helperText="User Fullname"
                            variant="outlined"
                            defaultValue={user ? user.fullName : ""}
                            fullWidth
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            sx={{ flex: 1 }}
                            id="outlined-basic"
                            name="mobile"
                            label="Mobile"
                            helperText="Mobile Number"
                            variant="outlined"
                            defaultValue={user ? user.mobile : ""}
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
                            defaultValue={user ? user.email : ""}
                            fullWidth
                            onChange={(e) => handleChange(e)}
                        />
                    </Stack>
                    <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
                        <TextField
                            sx={{ flex: 1 }}
                            id="outlined-basic"
                            name="signedUpVia"
                            label="Signed Up Via"
                            helperText="Signed Up Via"
                            variant="outlined"
                            defaultValue={user ? user.signedUpVia : ""}
                            fullWidth
                            onChange={(e) => handleChange(e)}
                        />
                        <Container
                            sx={{ flex: 1 }}
                        >
                            <label>Already invested</label>
                            <Switch
                                onChange={(e) => handleChange(e)}
                                label="hi"
                                defaultChecked={user ? user.alreadyInvested : false}
                                name="alreadyInvested"
                            />
                            <label>{userForm? userForm.alreadyInvested === true? 'YES' : 'NO' : 'NO'}</label>
                        </Container>
                    </Stack>
                    <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                        <Button variant="contained" color="success" onClick={() => handleSave(userForm)}>
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

export default UserModal;