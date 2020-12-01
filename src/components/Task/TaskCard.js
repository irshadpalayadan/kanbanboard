import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MoreActionMenu from "../common/MoreActionMenu";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: "calc(100% -32px)",
      height: "200px",
      borderRadius: "16px",
      margin: "0px 20px 20px 0px",
      backgroundColor: theme.palette.kanban.lightBlue
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      width: "300px"
    },
    titleRoot: {display: "flex", flexDirection: "row"},
    title: {
      flexGrow: 1,
      fontSize: "20px",
      lineHeight: "24px",
      maxHeight: "48px",
      fontWeight: 600,
      display: "-webkit-box",
      "-webkit-line-clamp": 2,
      "-webkit-box-orient": "vertical",
      overflow: "hidden"
    },
    icon: {
      padding: "0px 3px 0px 5px",
      alignSelf: "start"
    }
  }));



const TaskCard = ({data}) => {
    const classes = useStyles();
    const menuItem = [{title: "Edit", action: null},{title: "Delete", action: null}]

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <div className={classes.titleRoot}>
                    <Typography className={classes.title}>
                    {data.title}
                    </Typography>
                    <MoreActionMenu parentId={data.id} iconCss={classes.icon} items={menuItem}/>
                </div>
                <Typography className={classes.title}>
                {data.desc}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TaskCard;