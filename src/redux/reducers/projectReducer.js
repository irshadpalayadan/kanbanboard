import {
    CREATE_NEW_PROJECT,
    DELETE_PROJECT,
    UPDATE_PROJECT
  } from "../actionTypes/ProjectActionType";
  
  const initialState = {
    projects: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      default: {
        return state;
      }
    }
  }
  