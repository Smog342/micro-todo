import { StarFilled, StarOutlined } from "@ant-design/icons"
import { Button, Radio } from "antd"
import {Task, Context} from "../Context"
import { useContext, useState } from "react"

function TaskComponent(taskProps: Task){

    const {tasks, setTasks} = useContext(Context);
 
    const [isImportant, setIsImportant] = useState(taskProps.important);

    const [isFinished, setIsFinished] = useState(taskProps.finished);

    function handleStarClick(e: React.MouseEvent<HTMLElement>): void{

        setIsImportant(!isImportant);
        setTasks([...tasks.map((task: { id: number; important: boolean; }) => (task.id === taskProps.id ? {...task, important: !task.important} : {...task}))])

    }

    function handleRadioClick(e: React.MouseEvent<HTMLElement>): void{

        setIsFinished(!isFinished);
        setTasks([...tasks.map((task: { id: number; finished: boolean; }) => (task.id === taskProps.id ? {...task, finished: !task.finished} : {...task}))])

    }

    return(
        <div className="mb-2 shadow-md bg-white">
        <div className="flex justify-between items-center">
            <div className="flex">
                <Radio checked={isFinished} onClick={handleRadioClick}></Radio>
                <p className="break-words">{taskProps.text}</p>
            </div>
            <div>
                <Button type="text" onClick={handleStarClick}>
                    {isImportant? <StarFilled className="text-xl mr-auto"></StarFilled> : <StarOutlined className="text-xl mr-auto"></StarOutlined>}
                </Button>
            </div>
        </div>
        <p className="text-sm m-0">{taskProps.date}</p>
        </div>
    )

}

export default TaskComponent