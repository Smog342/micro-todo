import { BellOutlined, CalculatorOutlined, CalendarOutlined, PlusOutlined, RetweetOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons/lib/components/Icon";
import { Button, DatePicker, Input } from "antd";
import { useState } from "react";

function addTask(): void{



}

function TaskCreator(){

    const [datePickerAllowed, setDatePickerAllowed] = useState(false);

    const [text, setText] = useState('');

    const handleClick = (event: React.MouseEvent<HTMLElement>) =>{
        setDatePickerAllowed(!datePickerAllowed);
    }

    return(
        <div className="pt-2 pb-2">
        <Input prefix={
            <Button type="text" onClick={addTask}>
                <PlusOutlined className="text-blue-600 text-xl"></PlusOutlined>
            </Button>} placeholder="Добавить задачу" allowClear
            onChange={(e) => {setText(e.target.value)}}>
        </Input>
        <div className="flex">
            <DatePicker open={datePickerAllowed}/>     
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