import { StarOutlined } from "@ant-design/icons"
import TaskComponent from "./TaskComponent"
import TaskCreator from "./TaskCreator"
import {Task, Context} from "../Context"
import { useContext } from "react"

function ImportantComponent(){

    const {tasks} = useContext(Context);

    return(
        <div className="pl-40 overflow-auto h-full">
            <div className="flex text-blue-600">
                <StarOutlined className="text-3xl mr-2"></StarOutlined>
                <p className="text-2xl">Важно</p>
            </div>
            <TaskCreator></TaskCreator>
            {tasks.map((task : Task) => (task.important === true ? <TaskComponent id={task.id} text={task.text} date={task.date} important={task.important} finished={task.finished} board={task.board} key={task.id}></TaskComponent> : <></>))}
        </div>
    )

}

export default ImportantComponent