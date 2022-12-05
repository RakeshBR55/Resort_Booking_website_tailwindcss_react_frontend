import { createContext } from "react";


export const authContext = createContext();

export const authState = ({children})=>{
    return(
        <authContext.Provider>
            {children}
        </authContext.Provider>
    )
}