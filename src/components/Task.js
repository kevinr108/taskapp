function Task({
  id,
  dueDate,
  isCompleted,
  priority,
  taskTitle,
  markComplete,
  deleteTask,
}) {
  return (
    // <div>Tasks</div>
    <div className='task'>
      <div className='task-top'>
        <input
          type='checkbox'
          checked={isCompleted}
          // disabled={isCompleted}
          onChange={() => markComplete(id)}
        />
        <p>{taskTitle}</p>
        <div className='task-top-right'>
          <button onClick={() => deleteTask(id)}>X</button>
          <p>{dueDate}</p>
        </div>
      </div>
      <div className='priority'>{priority}</div>
    </div>
  );
}

export default Task;
