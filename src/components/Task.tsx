import { StarOutlined } from "@ant-design/icons"
import { Radio } from "antd"

type taskProps = {

    id: number,
    text: string,
    date: string,
    important: boolean,
    solved: boolean

}

function Task(taskProps: taskProps){

    return(
        <div className="w-full flex items-center space-between mb-2 shadow-md bg-white">
            <Radio></Radio>
            <p>{taskProps.text}</p>
            <StarOutlined className="text-xl mr-auto"></StarOutlined>
        </div>
    )

}

export default Task