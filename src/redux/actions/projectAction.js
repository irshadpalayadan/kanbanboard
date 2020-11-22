import {
    CREATE_NEW_PROJECT,
    DELETE_PROJECT,
    UPDATE_PROJECT
  } from "../actionTypes/ProjectActionType";
  
  const createNewProject = ( newProject) => {
    const id = "PR".concat(new Date().valueOf());
    return {
      type: CREATE_NEW_PROJECT,
      payload: { ...newProject, id }
    };
  };
  
  const deleteProjectById = (projrctId) => {
    return {
      type: DELETE_PROJECT,
      payload: { id: projrctId }
    };
  };

  const updateProject = (projectData) => {
    return {
      type: UPDATE_PROJECT,
      payload: { ...projectData }
    };
  };
  
  export { createNewProject, deleteProjectById, updateProject };
  