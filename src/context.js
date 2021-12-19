import React,{useContext,createContext} from 'react'

import { Warehouse } from './components/warehouse';

const initialState={
    secondWarehouse:[]
}
const GlobalContext = createContext();
export const ContextProvider=({children})=>{
//     const [state, dispatch] = useReducer(reducer, initialState);
//    const changeWarehouse=()=>{
//        dispatch({type:CHANGE_WAREHOUSE})
//    }
   return(
       <GlobalContext.Provider
       value=
           {Warehouse}
       >
           {children}
       </GlobalContext.Provider>
   )
}
export const useGlobalContext=()=>{
    return useContext(GlobalContext)
}