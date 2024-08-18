import React, {useReducer, useContext, createContext} from "react";

const OverContext = createContext();
const initialOverState = {
    overNumber: 0,
    overId: "",
    bolwerName: "",
    balls: [],
    inning: 1,
}
function overReducer(state, action) {
    switch(action.type){
        case 'bolwerName':
            return{
                ...state,
                bolwerName: action.payload,
            }
        case 'addBall':
            return{
                ...state,
                balls: [...state.balls, action.payload],
            }
        case 'inning':
            return{
                ...state,
                inning: action.payload,
            }
        case 'overIncrement':
            return{...state, overNumber:state.overNumber+1}
            
        default:
            return state;
    }
}

export function OverProvider({children}){
    const [state, dispatch] = useReducer(overReducer, initialOverState);
    return(
        <OverContext.Provider value={{state, dispatch}}>
            {children}
        </OverContext.Provider>
    )
}

export function useOverContext(){
    return useContext(OverContext);
}