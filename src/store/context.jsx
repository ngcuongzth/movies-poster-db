import React, { createContext, useReducer } from "react";
import api_key from './api_key';
import reducer,{ initState } from "./reducer";
import useAxios from "../customHooks/useAxios";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${api_key}`
const GlobalContext = createContext();

const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initState);
    return <GlobalContext.Provider value={{
        useAxios, state, dispatch, API_ENDPOINT
    }}>
        {children}
    </GlobalContext.Provider>
}


export {GlobalContext}
export default GlobalProvider;