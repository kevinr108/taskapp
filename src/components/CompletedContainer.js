import Task from './Task';

function CompletedContainer({ tasks, markComplete, deleteTask }) {
  console.log('From CompletedContainer ', tasks);
  return (
    <div className='task-container'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          dueDate={task.dueDate}
          isCompleted={task.isCompleted}
          priority={task.priority}
          taskTitle={task.taskTitle}
          markComplete={markComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default CompletedContainer;
