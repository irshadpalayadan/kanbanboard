import {
    CREATE_NEW_COLUMN,
    DELETE_COLUMN,
    UPDATE_COLUMN,
    INIT_SELECTED_COLUMN,
    CLEAR_SELECTED_COLUMN
} from "../actionTypes/taskColumnActionType";
  
  const initialState = {
    columns: {},
    selectedColumn: {}
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case CREATE_NEW_COLUMN : {
        return  {   ...state, 
                    columns: {...state.columns, [action.payload.id] : action.payload},
                    selectedColumn: {...state.selectedColumn, [action.payload.id] : action.payload}
                }
      }
      case UPDATE_COLUMN : {
        return  {   ...state, 
                    columns: {...state.columns, [action.payload.id] : action.payload},
                    selectedColumn: {...state.selectedColumn, [action.payload.id] : action.payload}
                }
      }
      case DELETE_COLUMN: {
        const tempColumn = {...state.columns}
        console.log(tempColumn)
        console.log(action.payload.id)
        delete tempColumn[action.payload.id]
        console.log(tempColumn)
        const tempSelectedColumn = {...state.selectedColumn}
        delete tempSelectedColumn[action.payload.id]
        return { ...state, columns: tempColumn, selectedColumn: tempSelectedColumn }
      }
      case INIT_SELECTED_COLUMN: {
        
        const tempColumn =  Object.values(state.columns)
                            .filter( item => item.projectId === action.payload.projectId)
                            .reduce((obj, item) => ({...obj, [item.id]: item}) , {})
        return  {   ...state, selectedColumn: tempColumn}
      }
      case CLEAR_SELECTED_COLUMN: {
        return  {   ...state, selectedColumn: {} }
      }
      default: {
        return state;
      }
    }
  }
  