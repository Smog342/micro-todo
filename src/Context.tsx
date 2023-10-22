import {createContext ,useState} from "react";

export const Context = createContext<any>("Context");

export const ContextProvider = ({children} : any) => {

    const [tasks, setTasks] = useState([]);

    return(
        <Context.Provider value={{tasks, setTasks}}>
            {children}
        </Context.Provider>
    );
 
}
