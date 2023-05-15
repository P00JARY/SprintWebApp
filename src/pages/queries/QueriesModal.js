import React from "react";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Switch } from "@mui/material";

const QueriesModal = ({ open, onClose, query }) => {

  const handleChange = (e) => {
    console.log(e);
  }

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

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box className="mt-3" sx={style}>
        <Stack sx={{ marginBottom: "1rem", marginTop: '2rem' }} direction="row" spacing={2}>
          Name : {query?.name}
        </Stack>
        <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
          Email : {query?.email}
        </Stack>
        <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
          Phone : {query?.phone}
        </Stack>
        <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
          Interested In : {query?.interestedIn}
        </Stack>
        <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
          Messsage : {query?.message}
        </Stack>
        {
          query?.projTitle? 
          <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
            Project  : {query?.projTitle}
          </Stack> : <></>
        }
        {/* <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
          <div>Status:</div>
          <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
            <Switch label="Status" />
            {`resolved`}
          </Stack>
        </Stack> */}

        {/* <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
          <div className="input-group">
          <textarea
                rows="4"
                className="form-control"
                name="dueDilligence"
                onChange={(e) => handleChange(e)}
                aria-label="With textarea">
              </textarea>
          </div>
        </Stack> */}
        <div className="row mx-0 justify-content-end w-100 mt-3 modal-footer bg-white py-4">

          <button
            className="btn btn-primary w-fit px-4"
            type="submit"
            onClick={() => onClose()}
          >
            Close
          </button>
        </div>
      </Box>
    </Modal>

  );
}

export default QueriesModal;