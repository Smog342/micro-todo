import { HomeOutlined } from "@ant-design/icons"
import TaskComponent from "./TaskComponent"
import TaskCreator from "./TaskCreator"
import {Task, Context} from "../Context"
import { useContext } from "react"

function TasksListComponent(){

    const {tasks} = useContext(Context);

    return(
        <div className="pl-40 overflow-auto h-full">
            <div className="flex text-blue-600">
                <HomeOutlined className="text-3xl mr-2"></HomeOutlined>
                <p className="text-2xl">Задачи</p>
            </div>
            <TaskCreator></TaskCreator>
            {tasks.map((task : Task) => (<TaskComponent id={task.id} text={task.text} date={task.date} important={task.important} finished={task.finished} board={task.board} key={task.id}></TaskComponent>))}
        </div>
    )

}

export default TasksListComponent