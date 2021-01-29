import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import PendingContainer from './components/PendingContainer';
import CompletedContainer from './components/CompletedContainer';
import Form from './components/Form';

function App() {
  const date = moment().format('MMM Do YYYY');
  const [tasks, setTasks] = useState([]);
  const [numTasks, setNumTasks] = useState(0);
  const [showPending, setShowPending] = useState(true);

  useEffect(() => {
    let sessionTasks = sessionStorage.getItem('tasksStorage');
    if (!sessionTasks) return;
    console.log('App useEffect ', sessionTasks);
    sessionTasks = JSON.parse(sessionTasks);
    setTasks(sessionTasks);
    setNumTasks(sessionTasks.filter((task) => !task.isCompleted).length);
  }, []);

  const addTask = (formState) => {
    console.log('From App form state ', formState);
    const id = uuidv4();
    const formatState = {
      ...formState,
      dueDate: moment(formState.dueDate).format('MMM Do YYYY'),
      id,
    };
    const newTasks = [...tasks, formatState];
    sessionStorage.setItem('tasksStorage', JSON.stringify(newTasks));
    setTasks(newTasks);
    setNumTasks(newTasks.filter((task) => !task.isCompleted).length);
  };

  const markComplete = (id) => {
    const temp = tasks.map((task) => {
      if (id == task.id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    sessionStorage.setItem('tasksStorage', JSON.stringify(temp));
    setTasks(temp);
    setNumTasks(temp.filter((task) => !task.isCompleted).length);
  };

  const deleteTask = (id) => {
    const temp = tasks.filter((task) => task.id != id);
    sessionStorage.setItem('tasksStorage', JSON.stringify(temp));
    setTasks(temp);
    setNumTasks(temp.filter((task) => !task.isCompleted).length);
  };

  return (
    <div>
      <p>{date}</p>
      <p>Number of Pending Tasks: {numTasks}</p>
      <a href='#' onClick={() => setShowPending(true)}>
        Pending
      </a>
      <a href='#' onClick={() => setShowPending(false)}>
        Completed
      </a>
      {showPending ? (
        <PendingContainer
          tasks={tasks.filter((task) => !task.isCompleted)}
          markComplete={markComplete}
          deleteTask={deleteTask}
        />
      ) : (
        <CompletedContainer
          tasks={tasks.filter((task) => task.isCompleted)}
          markComplete={markComplete}
          deleteTask={deleteTask}
        />
      )}
      <Form addTask={addTask} />
    </div>
  );
}

export default App;
