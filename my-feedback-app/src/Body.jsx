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
        <div className="body">
            <strong><h2>Share your Feedback</h2></strong>
            <p>Rate your Experiences</p>
            <p>Terrible   Poor   Average   Good   Awesome</p>
            <strong>Comment</strong>(Optional)<br/>
            <div>
                <input type="text" 
                placeholder="Enter your Feedback"
                value={newTask}
                onChange={handleInputChange}/>
                <button
                className="add-send"
                onClick={addTask}>
                    Send</button>
            </div>
        </div>

    );
}

export default Body