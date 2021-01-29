import Ellipse from '../imgs/Ellipse.png';
import Vectorgroup from '../imgs/Vectorgroup.png';

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
    <div className='task-item-border'>
      <div className='task-top'>
        <div className='task-top-left'>
          <input
            type='checkbox'
            checked={isCompleted}
            onChange={() => markComplete(id)}
          />
          <p>{taskTitle}</p>
        </div>
        <div className='task-top-right'>
          <button className='del-button' onClick={() => deleteTask(id)}>
            X
          </button>
          <p className='duedate'>{dueDate}</p>
          <img className='vector-group' src={Vectorgroup} />
        </div>
      </div>
      <div className='priority-container'>
        <p className='priority-low'>Low</p>
        <p className='priority-medium'>Medium</p>
        <p className='priority-high'>High</p>
      </div>
    </div>
  );
}

export default Task;
