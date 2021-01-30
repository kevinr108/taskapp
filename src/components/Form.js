import { useReducer, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const INITIAL_STATE = {
  taskTitle: '',
  priority: 'Undecided',
  dueDate: new Date(),
  isCompleted: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateFieldValue':
      return { ...state, [action.field]: action.value };
    case 'reset':
    default:
      return INITIAL_STATE;
  }
};

function Form({ addTask }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const updateFieldValue = (field) => (event) => {
    dispatch({
      type: 'updateFieldValue',
      field,
      value: event.target.value,
    });
  };

  const updateDueDate = (date) => {
    console.log('updated dueDate', date);
    dispatch({
      type: 'updateFieldValue',
      field: 'dueDate',
      value: date,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'reset' });
    addTask(state);
  };

  return (
    // <div className='form-container'>
    <form onSubmit={handleSubmit}>
      <label>
        Task{' '}
        <input
          autocomplete='off'
          type='text'
          name='taskTitle'
          value={state.taskTitle}
          onChange={updateFieldValue('taskTitle')}
        />
      </label>
      <label>
        Priority{' '}
        <select
          id='priority'
          name='priority'
          value={state.priority}
          onChange={updateFieldValue('priority')}
        >
          <option value='Undecided'>Undecided</option>
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High'>High</option>
        </select>
      </label>
      <label>
        Due Date{' '}
        <DatePicker
          selected={state.dueDate}
          dateFormat='MMMM d, yyyy'
          onChange={(date) => updateDueDate(date)}
        />
      </label>
      <button>+</button>
    </form>
  );
}

export default Form;
