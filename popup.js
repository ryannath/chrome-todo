const submitButton = document.getElementById("submit-button");
const taskName = document.getElementById("task-name");
const taskList = document.getElementById("task-list");

chrome.storage.sync.get(["tasks"], ({ tasks }) => {
  console.log(tasks)
  tasks.forEach(task => {
    taskList.appendChild(createTaskRepresentation(task));
  });
})

submitButton.addEventListener("click", async () => {
  
  chrome.storage.sync.get(['tasks'], ({ tasks }) => {
    tasks.push(taskName.value);
    
    const newTask = createTaskRepresentation(taskName.value);
    taskList.appendChild(newTask);

    // Reset value
    taskName.value = '';
    chrome.storage.sync.set({ 'tasks': tasks });
  });
});


function createTaskRepresentation(task) {
  const newTask = document.createElement('p');
  const newTaskName = document.createTextNode(task);
  newTask.appendChild(newTaskName);
  return newTask;
}
