

const reducer = (state,action)=>{

    if(action.type === "Certificates_UPDATE")
    {

        return {
            ...state,
            certificates: action.payload,

        }
    }
    return state;
};

export default reducer;