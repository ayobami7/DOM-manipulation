
const addTask = document.getElementById('addTask');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('inputTask');

addTask.addEventListener('click', function () {
    // Trim the input value to check for empty spaces
    const taskValue = inputTask.value.trim();

    if (taskValue === '') {
        alert('Please enter a task!');
    } else {
        // Create task div
        let task = document.createElement('div');
        task.classList.add('task');

        // Create li element
        let li = document.createElement('li');
        li.innerText = taskValue;
        task.appendChild(li);

        // Create check button
        let checkBtn = document.createElement('button');
        checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        checkBtn.classList.add('checkBtn');
        task.appendChild(checkBtn);

        // Create delete button
        let delBtn = document.createElement('button');
        delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        delBtn.classList.add('delBtn');
        task.appendChild(delBtn);

        // Append the task to the container
        taskContainer.appendChild(task);

        // Clear the input field after adding the task
        inputTask.value = '';

        checkBtn.addEventListener('click', function(){
            checkBtn.parentElement.style.textDecoration = "line-through"
        });

        delBtn.addEventListener("click", function(e){
            let target = e.target;
            target.parentElement.parentElement.remove();
        }); 
        
    }
});
