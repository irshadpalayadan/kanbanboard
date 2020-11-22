import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  titleRoot: {
    margin: 0,
    padding: "16px",
  },
  closeButton: {
    position: 'absolute',
    right: "8px",
    top: "8px",
  },
}));


const CustomDialog = ({open, title, handleClose, children, okBtnTitle, okBtnAction, cancelBtnTitle}) => {
  const classes = useStyles();

  return (
      <Dialog onClose={handleClose} open={open}>
        <MuiDialogTitle disableTypography className={classes.titleRoot}>
          <Typography variant="h6">{title}</Typography>
            <IconButton className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
            {children}
        </MuiDialogContent>
        <MuiDialogActions>
            {   cancelBtnTitle &&
                <Button autoFocus onClick={handleClose}>
                    {cancelBtnTitle}
                </Button>
            }
            {   okBtnTitle &&
                <Button autoFocus onClick={okBtnAction}>
                    {okBtnTitle}
                </Button>
            }
        </MuiDialogActions>
      </Dialog>
  );
}


export default CustomDialog;
