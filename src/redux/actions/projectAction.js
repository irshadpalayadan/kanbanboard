import {
    CREATE_NEW_PROJECT,
    DELETE_PROJECT,
    UPDATE_PROJECT
  } from "../actionTypes/ProjectActionType";
  
  const createNewProject = (newBill) => {
    const id = "PR".concat(new Date().valueOf());
    return {
      type: CREATE_NEW_BILL,
      payload: { ...newBill, id }
    };
  };
  
  const deleteProjectById = (billId) => {

  };
  const updateProject = (bill) => {

  };
  
  export { createNewProject, deleteProjectById, updateProject };
  