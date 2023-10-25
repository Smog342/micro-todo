import { BellOutlined, CalculatorOutlined, CalendarOutlined, PlusOutlined, RetweetOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons/lib/components/Icon";
import { Button, DatePicker, Input } from "antd";
import { useContext, useState } from "react";
import {Task, Context} from "../Context";

function TaskCreator(){

    const {tasks, setTasks, currentBoard} = useContext(Context);

    const [datePickerAllowed, setDatePickerAllowed] = useState(false);

    const [date, setDate] = useState('');

    const [text, setText] = useState('');

    function handleClick(event: React.MouseEvent<HTMLElement>): void{
        setDatePickerAllowed(!datePickerAllowed);
    }

    function addTask(task: Task): void{

        setTasks([...tasks, task]);
        setText('');
    
    }

    return(
        <div className="pt-2 pb-2">
        <Input prefix={
            <Button type="text" onClick={(e) => {
                addTask({
                    id: Math.random() * 1000,
                    text: text,
                    date: date,
                    important: currentBoard === 'important'? true : false,
                    finished: false,
                    board: currentBoard
                })
            }}>
                <PlusOutlined className="text-blue-600 text-xl"></PlusOutlined>
            </Button>} placeholder="Добавить задачу" allowClear value={text}
            onChange={(e) => {setText(e.target.value)}}>
        </Input>
        <div className="flex">
            <DatePicker open={datePickerAllowed} onChange={(date, dateString) => {setDate(dateString)}}/>     
            <Button type="text" onClick={handleClick}>
                <CalendarOutlined></CalendarOutlined>
            </Button>
            <Button type="text">
                <BellOutlined></BellOutlined>
            </Button>
            <Button type="text">
                <RetweetOutlined></RetweetOutlined>
            </Button>
        </div>
        </div>
    )

}

export default TaskCreator;