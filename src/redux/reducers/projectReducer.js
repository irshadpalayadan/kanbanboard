import {
    CREATE_NEW_PROJECT,
    DELETE_PROJECT,
    UPDATE_PROJECT
  } from "../actionTypes/ProjectActionType";
  
  const initialState = {
    projects: {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case CREATE_NEW_PROJECT : {
        return { ...state, projects: {...state.projects, [action.payload.id] : action.payload}}
      }
      case UPDATE_PROJECT : {
        return { ...state, projects: {...state.projects, [action.payload.id] : action.payload}}
      }
      case DELETE_PROJECT: {
        const tempProject = {...state.projects}
        delete tempProject[action.payload.id]
        return { ...state, projects: tempProject }
      }
      default: {
        return state;
      }
    }
  }
  