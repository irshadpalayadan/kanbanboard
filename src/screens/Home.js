import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "../components/project/ProjectCard";
import CreateProjectCard from "../components/project/CreateProjectCard";
import ProjectDialog from "../components/project/ProjectDialog";
import { deleteProjectById } from "../redux/actions/projectAction";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
}));

const Home = () => {
  const classes = useStyles();
  const dispatcher  = useDispatch();
  const projects = useSelector(store => store.projectReducer.projects);
  const [showDialog, setShowDialog] = useState(false);
  const [editData, setEditData] = useState(null)

  const closeHandler = () => {
    setShowDialog(false);
    setEditData(null);
  } 

  const createProjectBtnHandler = () => {
    setEditData(null);
    setShowDialog(true);
  }

  const deleteProject = (id) => {
    dispatcher(deleteProjectById(id))
  }

  const editProject = (id) => {
    setEditData(projects[id]);
    setShowDialog(true);
  }

  return (
    <>
      <div className={classes.root}>
        {Object.values(projects).map( item => 
          <ProjectCard 
            data={item} 
            onEdit={editProject} 
            onDelete={deleteProject}/>
        )}
        <CreateProjectCard btnAction={createProjectBtnHandler}/>
      </div>
      <ProjectDialog show={showDialog} data={editData} closeHandler={closeHandler} />
    </>
  );
};

export default Home;
