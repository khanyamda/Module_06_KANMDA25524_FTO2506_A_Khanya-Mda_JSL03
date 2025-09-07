// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):"
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// If neither task1 nor task2 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}

// Initial array for tasks
const tasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

let newTasks = 0;

// Allow user to add a task
function addTask() {

// The user can only add a maximum of three tasks

  if (newTasks == 3) {
    alert("There are enough tasks on your board, please check them in the console.");
    return;
  }

// Ask the user for task information

  let title = prompt("Enter task title:");
  let description = prompt("Enter task description:");
  let status = prompt("Enter task status (todo/doing/done):");

// Check that the user has typed something

  if (title == "" || title == null) {
    alert("Need a title!");
    return;
  }
  if (description == "" || description == null) {
    alert("Need a description!");
    return;
  }
  if (status == "" || status == null) {
    alert("Need a status!");
    return;
  }

  // Check if task status is correct

  if (status != "todo" && status != "doing" && status != "done") {
    alert("Status must be todo, doing, or done");
    return;
  }

  // Find biggest ID number
  let biggestId = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id > biggestId) {
      biggestId = tasks[i].id;
    }
  }

  // Create new task
  let newTask = {
    id: biggestId + 1,
    title: title,
    description: description,
    status: status
  };

  // Add to task list
  tasks.push(newTask);
  newTasks = newTasks + 1;

  console.log("Added task:", newTask);
}

// Show all tasks
function showAllTasks() {
  console.log("ALL TASKS:");
  
  for (let i = 0; i < tasks.length; i++) {
    console.log("ID: " + tasks[i].id);
    console.log("Title: " + tasks[i].title);
    console.log("Description: " + tasks[i].description);
    console.log("Status: " + tasks[i].status);
  
  }
  
  console.log("Total tasks: " + tasks.length);
}

// Show only done tasks
function showCompletedTasks() {
  console.log("COMPLETED TASKS:");
  
  let doneCount = 0;
  
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status == "done") {
      console.log("ID: " + tasks[i].id);
      console.log("Title: " + tasks[i].title);
      console.log("Description: " + tasks[i].description);
      console.log("Status: " + tasks[i].status);
      console.log("---");
      doneCount = doneCount + 1;
    }
  }
  
  if (doneCount == 0) {
    console.log("No done tasks yet!");
  } else {
    console.log("Done tasks: " + doneCount);
  }
}

// Message to show at the start so that the user knows how to use the functions
console.log("Type the following commands to use the functions:");
console.log("addTask() - adds new task to the list");
console.log("showAllTasks() - see all current tasks");
console.log("showCompletedTasks() - see all 'done' tasks");
