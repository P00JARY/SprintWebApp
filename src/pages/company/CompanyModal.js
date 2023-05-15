import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styles from "../sip/Sip.module.css";
import { uploadImage } from "../../utils/api/api";
import { BASE_URL } from "../../utils/constants/constants";


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

const CompanyModal = ({ open, onClose, isEdit, company, handleSave }) => {

  const [companyForm, setCompanyForm] = useState(company)

  const handleChange = (event) => {
    // console.log(event);
    setCompanyForm({
      ...companyForm,
      [event.target.name]: event.target.value,
    });
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

  useEffect(() => {
    if (isEdit) {
      setCompanyForm(company);
    } else {
      setCompanyForm({});
    }
  }, [company]);

  const openExlporer = () => {
    document.getElementById('input-file').click()
  }

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <div className="modal-header">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {isEdit ? 'Edit Company' : 'Add Company'}
          </Typography>
        </div>
        <Stack sx={{ marginBottom: "1rem", marginTop: '1rem' }} direction="row" spacing={2}>
          <TextField
            sx={{ flex: 1 }}
            id="outlined-basic"
            name="title"
            label="Company Title"
            variant="outlined"
            defaultValue={company ? company.title : ""}
            fullWidth
            onChange={(e) => handleChange(e)}
          />
        </Stack>
        <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
          <TextField
            minRows={3}
            multiline
            defaultValue={company ? company.description : ""}
            name="description"
            onChange={handleChange}
            label="Company decription"
            placeholder="Company decription"
            style={{ width: "100%" }}
          />
        </Stack>
        <input
          className="d-none"
          id="input-file"
          type="file"
          onClick={(e) => {
            e.target.value = null;
          }}
          onChange={(e) => {
            addImage(e);
          }}
        />
        <p className="section-label mt-4 mb-0">
          Logo
        </p>
        <Stack direction="row" sx={{ mt: 2 }}>
          <img className="img-preview" onClick={() => openExlporer()} src={companyForm?.logoUrl ? `${BASE_URL}/${companyForm?.logoUrl}` : '/no-image.jpg'} />
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

export default CompanyModal;