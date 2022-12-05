import sideBarContext from "./sideBarContext";
import { useState  } from "react";
const SideBarSate = (props)=>{
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu =  ()=>{
        setShowMenu(!showMenu);
    }

    return (
        <sideBarContext.Provider value={{showMenu,toggleMenu}}>
            {props.children}
        </sideBarContext.Provider>
    )
}

export default SideBarSate;