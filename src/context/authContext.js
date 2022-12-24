import { createContext } from "react";
import {useJwt} from 'react-jwt';

export const authContext = createContext();

export const AuthState = ({children})=>{
    const token = localStorage.getItem('token');
    const { decodedToken, isExpired } = useJwt(token);
    return(
        <authContext.Provider value={{decodedToken,isExpired}}>
            {children}
        </authContext.Provider>
    )
}