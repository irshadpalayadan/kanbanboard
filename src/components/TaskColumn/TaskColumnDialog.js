import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomDialog from "../common/CustomDialog";
import TextField from '@material-ui/core/TextField';
import Snackbar from "@material-ui/core/Snackbar";
import { createNewColumn, updateColumn } from "../../redux/actions/taskColumnAction";
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

const TaskColumnDialog = ({show, closeHandler, data, projectId}) => {
    const classes = useStyles();
    const dispatcher  = useDispatch();
    const [snackOpen, setSnackOpen] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [title, setTitle] = useState("")

    const snackClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setSnackOpen(false);
        setErrMsg("");
    };

    useEffect(() => {
        if(show === false) {
            setTitle("")
        } else if(data !== null) {
            setTitle(data.title)
        }
    }, [show])

    const validateAndProceed = () => {
        let tempErrorMeg = "";
        if (title === "")
          tempErrorMeg = tempErrorMeg.concat("please provide title \n");
        if (tempErrorMeg.length > 0) {
            setErrMsg(tempErrorMeg);
            setSnackOpen(true);
        } else {
            if(data === null) {
               dispatcher(createNewColumn({title: title, projectId}))
            } else {
                dispatcher(updateColumn({title: title, id: data.id, projectId}))
            }
            closeHandler();
        }
    }

    return <>
            <CustomDialog
                open={show} 
                handleClose={closeHandler}
                title={data === null ? "CREATE NEW COLUMN" : "UPDATE COLUMN: "}
                okBtnTitle={data === null ? "CREATE" : "UPDATE"}
                okBtnAction={validateAndProceed}
                cancelBtnTitle="CANCEL"
            >
                <div className={classes.contentRoot}>
                    <TextField 
                        label="Coulmn Title" 
                        value={title} 
                        onChange={e=>setTitle(e.target.value)}
                        variant="outlined"
                    />
                </div>
            </CustomDialog>
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

export default TaskColumnDialog;