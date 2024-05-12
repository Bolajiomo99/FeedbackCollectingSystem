import { useState } from "react";

function Body(){

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
        <div className="nav-body">
            <h2 className="h2-value">Share your Feedback</h2>
            <p className="p-value">Rate your Experiences</p>
            <p>Terrible   Poor   Average   Good   Awesome</p>
            <strong>Comment</strong>(Optional)<br/>
            <div>
                <input type="text" 
                placeholder="Enter your Feedback"
                value={newTask}
                onChange={handleInputChange}/><br/>
                <button
                className="add-send"
                onClick={addTask}>
                    Send</button>
            </div>
        </div>

    );
}

export default Body