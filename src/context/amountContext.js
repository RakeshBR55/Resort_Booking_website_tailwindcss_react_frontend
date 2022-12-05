import { createContext,useState } from "react";

export const  amountContext = createContext();

export const  AmountState = ({children})=>{
    
    const [amount, setAmount] = useState(0)
    let roomInfo = [
        {
            roomType:1,
            roomCounts:0,
            roomCost:800
        },
        {
            roomType:2,
            roomCounts:0,
            roomCost:900
        },
        {
            roomType:3,
            roomCounts:0,
            roomCost:1200
        }
    ]
    return (
        <amountContext.Provider value={{amount,roomInfo,setAmount}}>
            {children}
        </amountContext.Provider>
    )
} 