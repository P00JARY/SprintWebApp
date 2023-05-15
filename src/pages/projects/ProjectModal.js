import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import styles from "./Project.module.css";
import { Autocomplete, Chip, MenuItem, Snackbar, Switch } from "@mui/material";
import { getCoInvestors, getCompanies, getDataDictionaryValues, uploadFile, uploadImage } from "../../utils/api/api";
import { BASE_URL, DD_TYPE_PROJECT_DOMAIN, DD_TYPE_STAGE_OF_COMPANY, DD_TYPE_INVESTMENT_TYPE, DD_TYPE_INV_ROUND_TYPE, DD_TYPE_OPPORTUNITY_STATUS } from "../../utils/constants/constants";
import { RemoveCircle } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers";


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

const ProjectModal = ({ open, onClose, isEdit, project, handleSave }) => {
  const [projectForm, setProjectForm] = useState(null);
  const [companyList, setCompanyList] = useState([]);
  const [stageOfCompanyList, setStageOfCompanyList] = useState([]);
  const [typeOfInvList, setTypeOfInvList] = useState([]);
  const [domainList, setDomainList] = useState([]);
  const [invRoundList, setInvRoundList] = useState([]);
  const [coInvestorsList, setCoInvestorsList] = useState([]);
  const [oppStatusList, setOppStatusList] = useState([]);
  const [thesis, setThesis] = useState("");
  const [display, setDisplay] = useState(false)
  const [titleError, setTitleError] = useState(false);
  const [roundSizeError, setRoundSizeError] = useState(false);
  const [minAmountError, setMinAmountError] = useState(false);
  const [valuationError, setValuationError] = useState(false);
  const [domainError, setDomainError] = useState(false);
  const [typeOfInvError, setTypeOfInvError] = useState(false);
  const [stageOfCompError, setStageOfCompError] = useState(false);
  const [invRoundError, setInvRoundError] = useState(false);
  const [compError, setCompError] = useState(false);
  const [projectDescError, setProjectDescError] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const [oppStatusError,setOppStatusError] = useState(false)


  const handleChange = (event) => {

    clearError()

    if (event.target.name === "displaySequence") {
      setProjectForm({
        ...projectForm,
        [event.target.name]: Number(event.target.value),
      });
      return
    }

    setProjectForm({
      ...projectForm,
      [event.target.name]: event.target.value,
    });
  };


  const clearError = () => {
    setProjectDescError(false)
    setTitleError(false)
    setMinAmountError(false)
    setRoundSizeError(false)
    setValuationError(false)
    setDomainError(false)
    setTypeOfInvError(false)
    setStageOfCompError(false)
    setInvRoundError(false)
    setCompError(false)
    setOppStatusError(false)
  }

  const onThesisUpdate = (e) => {

    setThesis(e.target.value)

    //TODO : handle ctrl + enter
  }

  const handleAutoComplete = (value, type) => {

    clearError()

    if (Object.keys(projectForm).length === 0 && isEdit) {
      return
    }


    if (type === DD_TYPE_PROJECT_DOMAIN) {
      const ddData = domainList.find((item) =>
        item.ddValue === value
      )

      if (ddData) {
        setProjectForm({
          ...projectForm,
          domain: null,
          domainIndex: ddData.ddIndex
        })
      } else {
        setProjectForm({
          ...projectForm,
          domain: value,
          domainIndex: null
        })
      }

    }

    if (type === DD_TYPE_INVESTMENT_TYPE) {
      console.log(value);
      const ddData = typeOfInvList.find((item) => {
        console.log(item);
        return item.ddValue === value
      }
      )

      if (ddData) {
        setProjectForm({
          ...projectForm,
          typeOfInv: null,
          typeOfInvIndex: ddData.ddIndex
        })
      } else {
        setProjectForm({
          ...projectForm,
          typeOfInv: value,
          typeOfInvIndex: null
        })
      }

    }

    if (type === DD_TYPE_STAGE_OF_COMPANY) {
      const ddData = stageOfCompanyList.find((item) =>
        item.ddValue === value
      )

      if (ddData) {
        setProjectForm({
          ...projectForm,
          stageOfCompany: null,
          stageOfCompanyIndex: ddData.ddIndex
        })
      } else {
        setProjectForm({
          ...projectForm,
          stageOfCompany: value,
          stageOfCompanyIndex: null
        })
      }

    }

    if (type === DD_TYPE_INV_ROUND_TYPE) {
      const ddData = invRoundList.find((item) =>
        item.ddValue === value
      )

      if (ddData) {
        setProjectForm({
          ...projectForm,
          invRound: null,
          invRoundIndex: ddData.ddIndex
        })
      } else {
        setProjectForm({
          ...projectForm,
          invRound: value,
          invRoundIndex: null
        })
      }

    }
  }

  const getCompanyList = () => {
    getCompanies()
      .then((res) => {
        setCompanyList(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const getDataDictionary = () => {
    getDataDictionaryValues()
      .then((res) => {

        const invTypes = res.data.filter((item) =>
          item.ddType === DD_TYPE_INVESTMENT_TYPE
        )

        const oppStatus = res.data.filter((item) => 
          item.ddType === DD_TYPE_OPPORTUNITY_STATUS
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

        // TODO : Adding empty to the list remove after propper fix

        setTypeOfInvList(invTypes)
        setDomainList(domains)
        setStageOfCompanyList(stages)
        setInvRoundList(rounds)
        setOppStatusList(oppStatus)

      })
      .catch((error) => {
        console.log(error);
      })
  }


  const getCoInvestorsList = () => {
    getCoInvestors()
      .then((res) => {
        setCoInvestorsList(res.data);
      })
      .catch((e) => {
        console.log(e);
      })
  }


  const addImage = (e) => {
    // sending the mage to get the url

    uploadImage(e.target.files[0])
      .then((res) => {
        console.log(res.data);
        // adding the url to the form
        setProjectForm({
          ...projectForm,
          bannerImgPath: res.data.path,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleThesisEdit = (e, index) => {

    if (e.target.value === "") {
      return
    }

    let thesisList = []

    if (projectForm.thesis) {
      thesisList = projectForm.thesis
    }

    thesisList[index] = e.target.value;

    setProjectForm({
      ...projectForm,
      thesis: [...thesisList],
    })

  }

  const handleAddThesis = () => {

    let thesisList = []

    if (thesis === "") {
      return
    }

    if (projectForm.thesis) {
      thesisList = projectForm.thesis
    }

    thesisList.push(thesis)

    console.log(thesisList);

    setProjectForm({
      ...projectForm,
      thesis: [...thesisList],
    })

    setThesis("");

  }



  const handleDocDelete = (index) => {

    console.log(Array.isArray(projectForm.projectFiles))

    const projectFiles = projectForm.projectFiles

    projectFiles.splice(index, 1)

    setProjectForm({
      ...projectForm,
      projectFiles: projectFiles
    })

  }

  const handleDeleteCoInvestor = (index) => {

    console.log("deleting");

    const invList = projectForm.coInvestors

    invList.splice(index, 1)

    setProjectForm({
      ...projectForm,
      coInvestors: invList
    })

  }

  const handleAddCoInvestor = (inv) => {

    console.log(inv);

    if (typeof inv === "string") {
      return
    }

    if (inv === null) {
      return
    }

    let invList = []

    if (projectForm.coInvestors) {
      invList = projectForm.coInvestors
    }

    if (inv === invList.find((item) => item === inv) || invList.find((item) => item === inv) === "undefined") {
      console.log("duplicate");
      return
    }

    invList.push(inv);

    console.log(inv, invList);

    setProjectForm({
      ...projectForm,
      coInvestors: [...invList]
    })

  }

  const addDocuments = (e) => {
    uploadFile(e.target.files[0])
      .then((res) => {

        let projectFileList = []

        if (projectForm.projectFiles) {
          projectFileList = projectForm.projectFiles;
        }

        console.log(res.data);

        projectFileList.push(res.data);

        setProjectForm({
          ...projectForm,
          projectFiles: [...projectFileList],
        });

      })
      .catch((e) => {
        console.log(e);
      })
  }

  const handleSwitch = (value) =>{

    if(value){
      setDisplay(true)
      setProjectForm({
        ...projectForm,
        displayOnOpportunities: true
      })
    } else{
      setDisplay(false)
      setProjectForm({
        ...projectForm,
        displayOnOpportunities: false
      })
    }

  }

  const showSanckBar = () => {
    setOpenSnackBar(true)
    return null
  }

  const onSubmit = () => {

    let hasError = false;

    if (projectForm.projTitle === "" || typeof projectForm.projTitle === "undefined") {
      setTitleError(true)
      hasError = true
    }

    if (projectForm.compRid === "" || typeof projectForm.compRid === "undefined") {
      setCompError(true)
      hasError = true
    }

    if (projectForm.shortDesc === "" ||  typeof projectForm.shortDesc === "undefined") {
      setProjectDescError(true)
      hasError = true
    }

    if (projectForm.roundSize === "" ||  typeof projectForm.roundSize === "undefined") {
      setRoundSizeError(true)
      hasError = true
    }

    if (projectForm.minAmount === "" ||  typeof projectForm.minAmount === "undefined") {
      setMinAmountError(true)
      hasError = true
    }

    if (projectForm.valuation === "" ||  typeof projectForm.valuation === "undefined") {
      setValuationError(true)
      hasError = true
    }

    if (typeof projectForm.domainIndex === "undefined" &&  typeof projectForm.domain === "undefined" || projectForm.domain === "" && projectForm.domainIndex === null) {
      setDomainError(true)
      hasError = true
    }

    if (typeof projectForm.typeOfInvIndex === "undefined" &&  typeof projectForm.typeOfInv === "undefined" || projectForm.typeOfInv === "" && projectForm.typeOfInvIndex === null) {
      setTypeOfInvError(true)
      hasError = true
    }

    if (typeof projectForm.stageOfCompanyIndex === "undefined" &&  typeof projectForm.stageOfCompany === "undefined" || projectForm.stageOfCompany === "" && projectForm.stageOfCompanyIndex === null) {
      setStageOfCompError(true)
      hasError = true
    }

    if (typeof projectForm.invRound === "undefined" &&  typeof projectForm.invRoundIndex === "undefined" || projectForm.invRound === "" && projectForm.invRoundIndex === null) {
      setInvRoundError(true)
      hasError = true
    }

    if(typeof projectForm.oppStatusIndex === "undefined"){
      setOppStatusError(true)
      hasError = true
    }

    if (hasError) {
      return showSanckBar()
    }

    console.log(projectForm);

    handleSave(projectForm)
    setProjectForm({})

  }

  useEffect(() => {
    if (isEdit) {

      if (typeof project.projectFiles === "string") {
        project.projectFiles = JSON.parse(project.projectFiles)
      }
      if (typeof project.projectFiles === "string") {
        project.projectFiles = JSON.parse(project.projectFiles)
      }
      if (typeof project.thesis === "string") {
        project.thesis = JSON.parse(project.thesis)
      }
      if (typeof project.thesis === "string") {
        project.thesis = JSON.parse(project.thesis)
      }

      if (typeof project.coInvestors === "string") {
        project.coInvestors = JSON.parse(project.coInvestors)
      }
      if (typeof project.coInvestors === "string") {
        project.coInvestors = JSON.parse(project.coInvestors)
      }

      setProjectForm(project);
    } else {
      setProjectForm({});
    }
    getCompanyList()
    getDataDictionary()
    getCoInvestorsList()
  }, [project]);

  useEffect(() => {
    console.log("me", projectForm);
  }, [projectForm])

  const openExlporer = () => {
    document.getElementById('input-image').click()
  }

  const openDocExplorer = () => {
    document.getElementById('input-file').click()
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Snackbar
        open={openSnackBar}
        onClose={() => {
          setOpenSnackBar(false)
        }}
        autoHideDuration={6000}
        message="Please Fill In the required Fields" />
      <Modal
        className="overflow-scroll"
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="mt-5" sx={style}>
          <div className="modal-header">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {isEdit ? 'Edit Project' : 'Add Project'}
            </Typography>
          </div>

          <Stack sx={{ marginBottom: "1rem", marginTop: '2rem' }} direction="row" spacing={2}>
            <TextField
              sx={{ flex: 1 }}
              id="outlined-basic"
              name="projTitle"
              error={titleError}
              defaultValue={project ? project.projTitle : ""}
              label="Opportunity Title"
              variant="outlined"
              fullWidth
              helperText={titleError === true? "Not a Valid title" : ""}
              onChange={(e) => handleChange(e)}
            />
             <TextField
              sx={{ flex: 1 }}
              select
              defaultValue={project ? project.oppStatusIndex : ""}
              label="Opportunity Status"
              error={oppStatusError}
              name="oppStatusIndex"
              helperText={oppStatusError ? "This field is Required" : ""}
              onChange={(e) => handleChange(e)}
            >
              {oppStatusList.map((item, index) => {
                return (<MenuItem value={item.ddIndex} key={index}>{item.ddValue}</MenuItem>)
              })}

            </TextField>
          </Stack>
          <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
            <TextField
              sx={{ flex: 1 }}
              id="outlined-basic"
              name="roundSize"
              type="number"
              helperText={roundSizeError ? "Not a Valid Amount" : ""}
              error={roundSizeError}
              label="Round Size"
              variant="outlined"
              defaultValue={project ? project.roundSizeError : ""}
              fullWidth
              onChange={(e) => handleChange(e)}
            />
            <TextField
              sx={{ flex: 1 }}
              id="outlined-basic"
              name="minAmount"
              type="number"
              helperText={minAmountError ? "Not a Valid Amount" : ""}
              error={minAmountError}
              label="Minimum Amount"
              variant="outlined"
              defaultValue={project ? project.minAmount : ""}
              fullWidth
              onChange={(e) => handleChange(e)}
            />
            <TextField
              sx={{ flex: 1 }}
              id="outlined-basic"
              name="valuation"
              helperText={valuationError ? "This field is Required" : ""}
              type="number"
              error={valuationError}
              label="Valuation"
              variant="outlined"
              defaultValue={project ? project.valuation : ""}
              fullWidth
              onChange={(e) => handleChange(e)}
            />
          </Stack>
          <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>

            <Autocomplete
              freeSolo
              name="domainIndex"
              sx={{ flex: 1 }}
              defaultValue={ domainList?.find((item) => item.ddIndex === project?.domainIndex)}
              onInputChange={(_event, newInputValue) => {
                handleAutoComplete(newInputValue, DD_TYPE_PROJECT_DOMAIN);
              }}
              options={domainList}
              getOptionLabel={(option) => option.ddValue}
              renderInput={(params) =>
                <TextField {...params}
                error={domainError}
                helperText={domainError ? "This field is Required" : ""}

                  label="Domain" />}
            />
            <Autocomplete
              freeSolo
              name="typeOfInvIndex"
              sx={{ flex: 1 }}
              defaultValue={typeOfInvList?.find((item) => item.ddIndex === project?.typeOfInvIndex)}
              onInputChange={(_event, newInputValue) => {
                handleAutoComplete(newInputValue, DD_TYPE_INVESTMENT_TYPE);
              }}
              options={typeOfInvList}
              getOptionLabel={(option) => option.ddValue}
              renderInput={(params) =>
                <TextField {...params}
                error={typeOfInvError}
                helperText={typeOfInvError ? "This field is Required" : ""}

                  label="Type of Investment" />}
            />
            <Autocomplete
              freeSolo
              name="stageOfCompanyIndex"
              label="Stage of Company"
              sx={{ flex: 1 }}
              defaultValue={stageOfCompanyList?.find((item) => item.ddIndex === project?.stageOfCompanyIndex)}
              onInputChange={(_event, newInputValue) => {
                handleAutoComplete(newInputValue, DD_TYPE_STAGE_OF_COMPANY);
              }}
              options={stageOfCompanyList}
              getOptionLabel={(option) => option.ddValue}
              renderInput={(params) =>
                <TextField {...params}
                helperText={stageOfCompError ? "This field is Required" : ""}
                error={stageOfCompError}

                  label="Stage of Company" />}
            />
          </Stack>
          <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
            <Autocomplete
              freeSolo
              name="invRoundIndex"
              label="Current Investment Round"
              sx={{ flex: 1 }}
              defaultValue={invRoundList?.find((item) => item.ddIndex === project?.invRoundIndex)}
              onInputChange={(_event, newInputValue) => {
                handleAutoComplete(newInputValue, DD_TYPE_INV_ROUND_TYPE);
              }}
              options={invRoundList}
              getOptionLabel={(option) => option.ddValue}
              renderInput={(params) =>
                <TextField {...params}
                error={invRoundError}
                helperText={invRoundError ? "This field is Required" : ""}
                  label="Investment Round" />}
            />
            <TextField
              sx={{ flex: 1 }}
              select
              defaultValue={project ? project.compRid : ""}
              label="Company"
              error={compError}
              name="compRid"
              helperText={compError ? "This field is Required" : ""}
              onChange={(e) => handleChange(e)}
            >
              {companyList.map((item, index) => {
                return (<MenuItem value={item.compRid} key={index}>{item.title}</MenuItem>)
              })}

            </TextField>
          </Stack>
          <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
            <TextField
              rows="4"
              multiline
              error={projectDescError}
              helperText={projectDescError ? "Please Enter Opportunity Description" : ""}
              className="form-control"
              name="shortDesc"
              label="Opportunity Description"
              onChange={(e) => handleChange(e)}
              defaultValue={project ? project.shortDesc : ""}
              aria-label="With textarea" />
          </Stack>
          <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
            <TextField
              rows="4"
              multiline
              className="form-control"
              name="offerDetails"
              label="Offer Details"
              onChange={(e) => handleChange(e)}
              defaultValue={project ? project.offerDetails : ""}
              aria-label="With textarea" />
          </Stack>
          <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
            <TextField
              rows="4"
              multiline
              label="Past Rounds"
              className="form-control"
              name="pastRounds"
              onChange={(e) => handleChange(e)}
              defaultValue={project ? project.pastRounds : ""}
              aria-label="With textarea" />
          </Stack>
          <Stack sx={{ marginBottom: "1rem" }} direction="row" spacing={2}>
            <TextField
              rows="4"
              multiline
              label="Due Dilligence"
              defaultValue={project ? project.dueDilligence : ""}
              className="form-control"
              name="dueDilligence"
              onChange={(e) => handleChange(e)}
              aria-label="With textarea" />
          </Stack>

          <p className="section-label mt-4 mb-2">
            Sprint Thesis
          </p>

          <div className="row mx-0 align-items-end">
            <div className="col ps-0">
              <TextField
                rows="2"
                multiline
                className="form-control"
                name="roundOffer"
                value={thesis}
                onChange={(e) => onThesisUpdate(e)}
                aria-label="With textarea" />
            </div>
            <button className="btn btn-primary w-fit" onClick={() => handleAddThesis()}>
              Add
            </button>
          </div>

          {projectForm?.thesis?.map((item, index) => {
            return (
              <Stack key={index} direction="row" spacing={2} sx={{ mt: 2, flex: 1 }}>
                <div className="input-group">
                  <textarea
                    rows="2"
                    className="form-control"
                    name="roundOffer"
                    onChange={(e) => handleThesisEdit(e)}
                    defaultValue={item}
                    aria-label="With textarea">
                  </textarea>
                </div>
              </Stack>
            )
          })

          }


          <p className="section-label mt-4 mb-2">
            Co Investors
          </p>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Autocomplete
              freeSolo
              label="Search"
              sx={{ flex: 1 }}
              onChange={(_event, newInputValue) => {
                handleAddCoInvestor(newInputValue)
              }}
              options={coInvestorsList}
              getOptionLabel={(option) => option.fullName}
              renderInput={(params) =>
                <TextField {...params}
                  label="Search CoInvestors" />}
            />
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            {
              projectForm?.coInvestors?.map((item, index) => {
                return (
                  <Chip key={index} label={item.fullName} onDelete={() => handleDeleteCoInvestor(item)} />
                )
              })
            }
          </Stack>

          <p className="section-label mt-4 mb-2">
            Display in Opportunities
          </p>
          <Stack className="project-modal" direction="row" spacing={3} sx={{ mt: 2 }}>
            <div className="form-check form-switch">
              <Switch
                sx={{ flex: 0.33 }}
                Checked={projectForm?.displayOnOpportunities}
                onChange={(e) => { handleSwitch(e.target.checked) }} />
              <label className="form-check-label">Display in Opportunities</label>
            </div>
            {
              display ? (
                <TextField
                  label="Sequence"
                  type="number"
                  name="displaySequence"
                  onChange={(e) => handleChange(e)}
                  defaultValue={projectForm?.displaySequence ? projectForm.displaySequence : ""}
                  sx={{ flex: 0.11 }}
                />
              ) : <></>
            }

          </Stack>

          <p className="section-label mt-4 mb-1">
            Project Image
          </p>

          <input
            id="input-image"
            type="file"
            onClick={(e) => {
              e.target.value = null;
            }}
            onChange={(e) => {
              addImage(e);
            }}
          />
          <Stack direction="row">
            <img className="img-preview" onClick={() => openExlporer()} src={projectForm?.bannerImgPath ? `${BASE_URL}/${projectForm?.bannerImgPath}` : '/no-image.jpg'} />
          </Stack>

          <p className="section-label mt-4 mb-1">
            Project Documents
          </p>

          <Stack direction="row">
            <input
              className="d-none"
              id="input-file"
              type="file"
              onClick={(e) => {
                console.log(e);
                e.target.value = null;
              }}
              onChange={(e) => {
                addDocuments(e);
              }}
            />
          </Stack>
          <Stack direction="row">
            {projectForm?.projectFiles?.map((item, index) => {
              return (
                <Stack direction="column" key={index}>
                  <Stack direction="row" className={styles.docContainer}>
                    <img
                      className={styles.doc}
                      src={"./pdf.png"}
                      alt="document"
                    />
                    <RemoveCircle
                      sx={{ color: "red", top: 0, zIndex: 3 }}
                      onClick={
                        () => {
                          handleDocDelete(index)
                        }
                      }
                    />
                  </Stack>
                  <div className={styles.docText}>{item.actualFileName}</div>
                </Stack>
              )
            })}
            <div className="add-project-doc" onClick={() => openDocExplorer()} >
              +
            </div>
          </Stack>

          <div className="row mx-0 justify-content-end w-100 mt-3 modal-footer bg-white py-4">
            <button className="btn w-fit px-4 me-1" onClick={onClose}>
              Cancel
            </button>
            <button
              className="btn btn-primary w-fit px-4"
              type="submit"
              onClick={() => onSubmit()}
            >
              Save
            </button>
          </div>
        </Box>
      </Modal>
    </LocalizationProvider>
  );
};

export default ProjectModal;
