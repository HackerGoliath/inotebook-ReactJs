import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name": "Deepak",
        "class": "5b"
    }
    const [state, setState] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Haulat",
                "class": "10A"
            })
        }, 1000);
    }
    return (
        // state,update is same as : state:state update:update
        <noteContext.Provider value={{ state, update }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;