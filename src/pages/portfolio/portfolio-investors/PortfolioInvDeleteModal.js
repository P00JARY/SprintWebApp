import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, IconButton, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { CloseOutlined } from "@mui/icons-material";
import { useState } from "react";
import { STATUS_INACTIVE } from "../../../utils/constants/constants";
import styles from "../../projects/Project.module.css"


const PortfolioInvDeleteModal = ({ open, onClose, investor, handleSave }) => {

    const[comfirmInvestor,setComfirmInvestor] = useState("")

    const style = {
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        maxHeight: '80vh',
        bgcolor: "background.paper",
        boxShadow: 24,
        overflow: "auto",
    };

    const handleDelete = () => {
        if(comfirmInvestor === investor.fullName){
            investor.status = STATUS_INACTIVE
        } else{
            return
        }

        console.log(investor);

        handleSave(investor)

    }


    return (
        <Modal
            className="overflow-scroll"
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="mt-5" sx={style}>
                <div className="d-flex justify-content-between p-2">
                    <div className="d-flex flex-row">
                        <DeleteOutlineIcon className="text-danger" />
                        <h5 className="mx-2">
                            Are you sure?
                        </h5>
                    </div>
                    <CloseOutlined
                    className={styles.mousePointer}
                    onClick={onClose}
                     />
                </div>
                <div className="bg-light p-3">
                    <div>
                        This action cannot be undone. This will permanently delete the Investor <b> {investor?.fullName} </b> after this
                    </div>
                    <div className="mt-3">
                        Please type <b> {investor?.fullName} </b> to confirm
                    </div>
                    <TextField
                        sx={{ flex: 1 }}
                        fullWidth
                        className="mt-4"
                        onChange={(e) => {
                            setComfirmInvestor(e.target.value)
                        }}
                        variant="outlined" />

                    <Button aria-label="delete"
                        className="bg-danger mt-3"
                        variant="contained"
                        fullWidth
                        onClick={() => handleDelete()}
                    >
                        <DeleteOutlineIcon className="text-light" />
                        Delete {investor?.fullName}
                    </Button>
                </div>
            </Box>
        </Modal>
    );
}

export default PortfolioInvDeleteModal;