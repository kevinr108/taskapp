import Task from './Task';

function PendingContainer({ tasks, markComplete, deleteTask }) {
  console.log('From PendingContainer ', tasks);
  return (
    <div>
      This is the pending container
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

export default PendingContainer;
