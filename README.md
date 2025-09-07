# JSL03 Console-Based Task Manager 📋

A simple, interactive task management system that allows users to add tasks to an existing array and filter them by completion status. This project demonstrates JavaScript fundamentals including array manipulation, user interaction through prompts, input validation, and console-based task management.

### Core Functionality
- **Add New Tasks**: Users can add up to 3 new tasks to the existing task list
- **Structured Task Storage**: Tasks are stored as objects in an array with unique incremental IDs
- **Input Validation**: Comprehensive validation ensures accurate user input
- **Task Filtering**: View all tasks or filter to show only completed tasks
- **Console-Based Interface**: All interactions happen through browser prompts and console logging

### Task Properties
Each task contains:
- **ID**: Unique incremental identifier
- **Title**: Task name/summary
- **Description**: Detailed task description
- **Status**: Current progress (`todo`, `doing`, `done`)

## 📖 How to Use

### Initial Setup
When you first load the page, you'll be prompted to:
1. Enter details for Task 1 (title, description, status)
2. Enter details for Task 2 (title, description, status)
3. Any completed tasks will be automatically logged to the console

### Interactive Functions
After the initial setup, use these console commands:

```javascript
// Add a new task (maximum 3 additional tasks)
addTask()

// View all tasks in the system
showAllTasks()

// View only completed (done) tasks
showCompletedTasks()
```

### Adding Tasks
- You can add a maximum of 3 new tasks
- Each task requires a title, description, and status
- Status must be one of: `todo`, `doing`, or `done`
- Empty fields are not allowed
- When the limit is reached, you'll see: *"There are enough tasks on your board, please check them in the console."*


### Default Tasks
The system comes pre-loaded with sample tasks:
1. **Launch Epic Career** (todo) - Create a killer Resume
2. **Master JavaScript** (doing) - Get comfortable with the fundamentals  
3. **Contribute to Open Source Projects** (done) - Gain practical experience


## 🎯 Learning Objectives

This project helps me master:
- JavaScript array methods and object manipulation
- User input handling and validation
- Console-based debugging and logging
- Function design and modular programming
- Conditional logic and loop structures
- Error handling and user feedback


### Console Commands Reference
```javascript
addTask()           // Add a new task
showAllTasks()      // Display all tasks
showCompletedTasks()// Display only completed tasks
```

## Note

This is an educational project for my JavaScript Fundamentals JSLO3. 

**Happy Task Managing! 🚀**
