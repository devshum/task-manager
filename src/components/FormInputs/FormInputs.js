import Button from '../Button/Button'
import { useState } from 'react'

const FormInputs = props => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredDate: '',
    enteredStatus: 'pending',
    enteredImportance: 'minor'
  })

  const changeTitleHandler = e => {
    setUserInput(prevState => {
      return {
        ...prevState,
        enteredTitle: e.target.value
      }
    })
  }

  const changeDateHandler = e => {
    setUserInput(prevState => {
      return {
        ...prevState,
        enteredDate: e.target.value
      }
    })
  }

  const changeStatusHandler = e => {
    setUserInput(prevState => {
      return {
        ...prevState,
        enteredStatus: e.target.value
      }
    })
  }

  const changeImportanceHandler = e => {
    setUserInput(prevState => {
      return {
        ...prevState,
        enteredImportance: e.target.value
      }
    })
  }

  const submitFormHandler = e => {
    e.preventDefault()

    props.onSaveTaskData({
      ...userInput,
      enteredDate: new Date(userInput.enteredDate)
    })

    setUserInput({
      enteredTitle: '',
      enteredDate: '',
      enteredStatus: 'pending',
      enteredImportance: 'minor'
    })
  }

  return (
    // TO DO remove inline styles
    <form style={{display: 'flex', gap: '30px', alignItems: 'center'}} onSubmit={submitFormHandler}>
      <div>
        <label htmlFor="task">Task Title</label>
        <input type="text" 
               value={userInput.enteredTitle} 
               onChange={changeTitleHandler}/>
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" 
               min="2021-01-01" 
               max="2024-01-01" 
               value={userInput.enteredDate} 
               onChange={changeDateHandler} />
      </div>

      <div>
        <label htmlFor="status">Status:</label>
        <select onChange={changeStatusHandler} 
                value={userInput.enteredStatus}>
          <option value="pending">Pending</option>
          <option value="in progress">In progress</option>
        </select>
      </div>

      <div>
        <label htmlFor="importance">Importance:</label>
        <select onChange={changeImportanceHandler} 
                value={userInput.enteredImportance}>
          <option value="minor">Minor</option>
          <option value="normal">Normal</option>
          <option value="critical">Critical</option>
        </select>
      </div>

      <Button>Add Task</Button>
    </form>
  )
}

export default FormInputs