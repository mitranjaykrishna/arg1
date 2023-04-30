import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import CertificatesData from "./CertificatesData.json";
// import FacultyData from "./FacultyData";


const AppContext=React.createContext();

const initialState={
    certificates: [],
}

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    const getCertificates=()=>
    {
        return dispatch({
            type:"Certificates_UPDATE",
            payload:CertificatesData,
        });
    }

    useEffect(() => getCertificates(),[]);
    
    return (
        <AppContext.Provider value={{...state}}>
        {children}
        </AppContext.Provider>
    
    );
};


const useGlobalContext=()=>{
    return useContext(AppContext);
};
export { AppProvider, useGlobalContext} ;