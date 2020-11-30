import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { initSelectedColumn, clearSelectedColumn, deleteTaskColumnById } from "../redux/actions/taskColumnAction";
import CreateCard from "../components/common/CreateCard";
import TaskCard from "../components/TaskColumn/TaskCard";
import TaskColumnDialog from "../components/TaskColumn/TaskColumnDialog";


const useStyles = makeStyles((theme) => ({
    root: {
      padding: "20px",
      display: "flex",
      flexDirection: "row",
      overflow: "scroll"
    }
}));

const TaskBoard = ({match}) => {

    const projectId = match.params.projectId || "";
    const classes = useStyles();
    const dispatcher  = useDispatch();
    const taskColumns = useSelector(store => store.taskColumnReducer.selectedColumn);
    const [showDialog, setShowDialog] = useState(false);
    const [editData, setEditData] = useState(null)

    const closeHandler = () => {
        setShowDialog(false);
        setEditData(null);
    } 

    const createTaskColumnBtnHandler = () => {
        setEditData(null);
        setShowDialog(true);
    }

    const deleteTaskColumn = (id) => {
        dispatcher(deleteTaskColumnById(id))
    }

    const editTaskColumn = (id) => {
        setEditData(taskColumns[id]);
        setShowDialog(true);
    }

    useEffect(() => {
        dispatcher(initSelectedColumn(projectId));
        return () => dispatcher(clearSelectedColumn());
    }, [])

    return  <>
                <div className={classes.root}>
                    {Object.values(taskColumns).map( item => 
                        <TaskCard 
                            data={item} 
                            onEdit={editTaskColumn} 
                            onDelete={deleteTaskColumn}
                        />
                    )}
                    <CreateCard btnAction={createTaskColumnBtnHandler} btnTitle="New Column"/>
                </div>
                <TaskColumnDialog 
                    show={showDialog} 
                    data={editData} 
                    projectId={projectId}
                    closeHandler={closeHandler} 
                />
            </>
}

export default TaskBoard;