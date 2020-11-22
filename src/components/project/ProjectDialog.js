import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "../common/CustomDialog";
import TextField from '@material-ui/core/TextField';
import Snackbar from "@material-ui/core/Snackbar";
import { createNewProject, updateProject } from "../../redux/actions/projectAction";
import { useDispatch } from "react-redux";


const useStyles = makeStyles((theme) => ({
    contentRoot: {
      padding: "30px 0px",
      width: "500px",
      display: "flex",
      flexDirection: "column"
    },
    snackbar: { whiteSpace: "pre-wrap" }
  }));

const ProjectDialog = ({show, closeHandler, data}) => {
    const classes = useStyles();
    const dispatcher  = useDispatch();
    const [snackOpen, setSnackOpen] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const snackClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setSnackOpen(false);
        setErrMsg("");
    };

    useEffect(() => {
        if(show === false) {
            setDesc("");
            setTitle("")
        } else if(data !== null) {
            setDesc(data.description);
            setTitle(data.title)
        }
    }, [show])

    const validateAndProceed = () => {
        let tempErrorMeg = "";
        if (title === "")
          tempErrorMeg = tempErrorMeg.concat("please provide title \n");
        if (desc === "")
            tempErrorMeg = tempErrorMeg.concat("please provide description \n");
        if (tempErrorMeg.length > 0) {
            setErrMsg(tempErrorMeg);
            setSnackOpen(true);
        } else {
            if(data === null) {
               dispatcher(createNewProject({title: title, description: desc}))
            } else {
                dispatcher(updateProject({title: title, description: desc, id: data.id}))
            }
            closeHandler();
        }
    }

    return <>
            <Dialog
                open={show} 
                handleClose={closeHandler}
                title={data === null ? "CREATE NEW PROJECT" : "UPDATE PROJECT: "}
                okBtnTitle={data === null ? "CREATE" : "UPDATE"}
                okBtnAction={validateAndProceed}
                cancelBtnTitle="CANCEL"
            >
                <div className={classes.contentRoot}>
                    <TextField 
                        label="Project Title" 
                        value={title} 
                        onChange={e=>setTitle(e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        label="Description"
                        style={{marginTop: "40px"}}
                        value={desc}
                        onChange={e=>setDesc(e.target.value)}
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                </div>
            </Dialog>
            <Snackbar
                className={classes.snackbar}
                open={snackOpen}
                autoHideDuration={2000}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                onClose={snackClose}
                message={errMsg}
            />
        </>
}

export default ProjectDialog;