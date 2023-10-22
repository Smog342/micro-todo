import { CoffeeOutlined } from "@ant-design/icons"
import Task from "./Task"
import TaskCreator from "./TaskCreator"

function MyDay(){

    return(
        <div className="pl-40">
            <div className=" flex text-blue-600">
                <CoffeeOutlined className="text-3xl mr-2"></CoffeeOutlined>
                <p className="text-2xl">Мой день</p>
            </div>
            <TaskCreator></TaskCreator>
            <Task id={0} text={"Aaa"} date={"11/10/20"} important={false} solved={false}></Task>
            <Task id={1} text={"Bbb"} date={"11/20/10"} important={false} solved={false}></Task>
            <Task id={2} text={"Ccc"} date={"10/20/11"} important={false} solved={false}></Task>
        </div>
    )

}

export default MyDay