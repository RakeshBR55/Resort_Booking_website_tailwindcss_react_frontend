import { createContext,useState,useReducer} from "react";

export const  AmountContext = createContext();

//Reducer function 
const roomReducer = (state,action)=>{
    let newState;
    let roomType;
    let roomCount;

    switch(action.type){
        case 'ADD_ROOM':
            newState = [...state]
            roomType = action.room['roomType']
            roomCount = action.room['count'] + 1
            newState = newState.map( ele => {
                return ele['roomType'] === roomType ? {...ele,roomsBooked:roomCount} : ele
               
            })
            break;

        case 'REMOVE_ROOM':
            newState = [...state]
            roomType = action.room['roomType'];
            roomCount = action.room['count'] - 1;
            newState = newState.map( ele => {
                return ele['roomType'] === roomType ? {...ele,roomsBooked:roomCount} : ele
            })
            break;
        default:
            return state
    }
    return newState;
}

export const  AmountState = ({children})=>{
     
    const [amount, setAmount] = useState(0)
    //intial state for the useReducer hook
    const initialRoomState = [
        {   roomType:'Single Room',
            roomsBooked:0,
            roomCost:800
        },
        {   roomType:'Double Room',
            roomsBooked:0,
            roomCost:900
        },
        {   roomType:'Luxury Room',
            roomsBooked:0,
            roomCost:1200
        }
    ]

    //use Reducer to set the intial state
    const [roomState, dispatch] = useReducer(roomReducer, initialRoomState)

    return (
        <AmountContext.Provider value={{amount,setAmount,roomState,dispatch}}>
            {children}
        </AmountContext.Provider>
    )
} 