import { useState } from "react";


function Sidebar(){
    const Sidebar1 = "Dashbord";
    const Sidebar2 = "All Members";
    const Sidebar3 = "All Events";
    const Sidebar4 = "Teams";
    const Sidebar5 = "Speakers";
    const Sidebar6 = "New Admin";
    const Sidebar7 = "Test";
    const Sidebar8 = "Test Results";
    const Sidebar9 = "Feedback";

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){

    }
    function deleteTask(index){

    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }

    return(
        <div className="sidebar">
             <ul>
            <ol>{Sidebar1}</ol>
            <ol>{Sidebar2}</ol>
            <ol>{Sidebar3}</ol>
            <ol>{Sidebar4}</ol>
            <ol>{Sidebar5}</ol>
            <ol>{Sidebar6}</ol>
            <ol>{Sidebar7}</ol>
            <ol>{Sidebar8}</ol>
            <button
            className="add-feedback"
            onClick={addTask}
            >{Sidebar9}</button>
        </ul>
        </div>
       

    );
}

export default Sidebar