import { GlobalStateContext } from "./GlobalStateContext";
import {useState} from "react"

const GlobalState = (props) => {
    const [data, setData] = useState({})
    
    return (
        <GlobalStateContext.Provider value={{data, setData}}>
        {props.children}
        </GlobalStateContext.Provider>

    )
}
 export default GlobalState
