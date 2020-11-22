import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import  Button  from "@material-ui/core/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "320px",
    height: "200px",
    borderRadius: "16px"
  },
  button: {
    height: "100%",
    width: "100%",
    margin: "auto",
    "&:hover": {
        backgroundColor: theme.palette.kanban.focus
    }
  }
}));

const CreateProjectCard = ({btnAction}) => {
  const classes = useStyles();

  return (
    <>
        <Card className={classes.root} elevation={3}>
            <Button
                variant="text"
                size="large"
                disableRipple={true}
                className={classes.button}
                onClick={btnAction}
                startIcon={<AddCircleOutlineIcon />}
            >
                Create New
            </Button>
        </Card>
    </>
  );
}


export default CreateProjectCard;