import {createContext ,useState} from "react";

export const Context = createContext<any>("Context");

export type Task = {

    id: number,
    text: string,
    date: string,
    important: boolean,
    finished: boolean,
    board: string

}

export const ContextProvider = ({children} : any) => {

    const [tasks, setTasks] = useState<Task[]>([]);

    return(
        <Context.Provider value={{tasks, setTasks}}>
            {children}
        </Context.Provider>
    );
 
}
