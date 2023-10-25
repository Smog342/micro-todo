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

    const [boards, setBoards] = useState<string[]>([]);

    const [currentBoard, setCurrentBoard] = useState('');

    return(
        <Context.Provider value={{tasks, setTasks, boards, setBoards, currentBoard, setCurrentBoard}}>
            {children}
        </Context.Provider>
    );
 
}
