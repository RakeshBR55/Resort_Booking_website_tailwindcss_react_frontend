import { createContext,useState } from "react";

export const  amountContext = createContext();

export const  AmountState = ({children})=>{
    
    const [amount, setAmount] = useState(0)
    let roomInfo = {
        1:{
            selectedRoom:0,
            roomCost:800
        },
        2:{
            selectedRoom:0,
            roomCost:900
        },
        3:{
            selectedRoom:0,
            roomCost:1200
        }
    }
    return (
        <amountContext.Provider value={{amount,roomInfo,setAmount}}>
            {children}
        </amountContext.Provider>
    )
} 