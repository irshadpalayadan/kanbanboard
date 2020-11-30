import {
    CREATE_NEW_COLUMN,
    DELETE_COLUMN,
    UPDATE_COLUMN,
    INIT_SELECTED_COLUMN,
    CLEAR_SELECTED_COLUMN
  } from "../actionTypes/taskColumnActionType";
  
  const createNewColumn = ( newColumn) => {
    const id = "CL".concat(new Date().valueOf());
    return {
      type: CREATE_NEW_COLUMN,
      payload: { ...newColumn, id }
    };
  };
  
  const deleteTaskColumnById = (columnId) => {
    return {
      type: DELETE_COLUMN,
      payload: { id:columnId }
    };
  };

  const updateColumn = ( columnData) => {
    return {
      type: UPDATE_COLUMN,
      payload: { ...columnData }
    };
  };

  const initSelectedColumn = ( projectId ) => {
    return {
        type: INIT_SELECTED_COLUMN,
        payload: { projectId }
      };
  }
  
  const clearSelectedColumn = ( ) => {
    return {
        type: CLEAR_SELECTED_COLUMN
      };
  }
  
  export { createNewColumn, deleteTaskColumnById, updateColumn, initSelectedColumn, clearSelectedColumn };
  