import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import styles from "./Sip.module.css";
import { uploadImage } from "../../utils/api/api";
import { BASE_URL } from "../../utils/constants/constants";

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

const SipModal = ({ open, onClose, isEdit, handleSave, sip }) => {
  const [sipForm, setSipForm] = useState(sip);

  const addImage = (e) => {

    // sending the mage to get the url

    uploadImage(e.target.files[0])
      .then((res) => {
        console.log(res.data);

        // adding the url to the form

        setSipForm({
          ...sipForm,
          imageUrl: res.data.path,
        });

      })
      .catch((error) => {
        console.log(error);
      })
  };

  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(sipForm);
    setSipForm({
      ...sipForm,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    console.log(sipForm, isEdit);
    if (isEdit) {
      setSipForm(sip);
    } else {
      setSipForm({});
    }
  }, [sip]);

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
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
            name="title"
            label="SIP Title"
            helperText="SIP Title"
            variant="outlined"
            defaultValue={sip ? sip.title : ""}
            fullWidth
            onChange={handleChange}
          />
          <TextField
            sx={{ flex: 1 }}
            id="outlined-basic"
            name="invAmtOptions"
            label="Investment Amount"
            helperText="Investment Amount"
            variant="outlined"
            defaultValue={sip ? sip.invAmtOptions : ""}
            fullWidth
            onChange={handleChange}
          />
          <TextField
            sx={{ flex: 1 }}
            id="outlined-basic"
            name="targetAmount"
            label="Target Amount"
            defaultValue={sip ? sip.targetAmount : ""}
            helperText="Target Amount"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        </Stack>
        <TextareaAutosize
          minRows={3}
          defaultValue={sip ? sip.description : ""}
          name="description"
          onChange={handleChange}
          placeholder="Promotion Details"
          style={{ width: "100%" }}
        />
        <Stack direction="row">
          <label
            htmlFor="input-file"
            className={styles.customFileUpload}
            variant="outlined"
          >
            <CloudUploadIcon htmlFor="input-file" /> Upload Image
          </label>
          <input
            id="input-file"
            type="file"
            onClick={(e) => {
              e.target.value = null;
            }}
            onChange={(e) => {
              addImage(e);
            }}
          />
          {sipForm?.imageUrl ? (
            <div className={styles.imageContainer}>
              <img className={styles.image} src={`${BASE_URL}/${sipForm.imageUrl}`} />
            </div>
          ) : null}
        </Stack>

        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleSave(sipForm)}
          >
            Save Changes
          </Button>
          <Button variant="contained" color="error" onClick={onClose}>
            Cancel
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default SipModal;
