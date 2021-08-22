import Button from '../Button/Button'

const FormInputs = () => {
  const submitFormHandler = e => {
    e.preventDefault()
  }

  return (
    // TO DO remove inline styles
    <form style={{display: 'flex', gap: '30px', alignItems: 'center'}} onSubmit={submitFormHandler}>
      <div>
        <label htmlFor="task">Task Title</label>
        <input type="text" id="task" />
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" min="2021-01-01" />
      </div>

      <div>
        <label htmlFor="status">Status:</label>
        <select id="status">
          <option value="pending">Pending</option>
          <option value="in progress">In progress</option>
        </select>
      </div>

      <div>
        <label htmlFor="importance">Importance:</label>
        <select id="importance">
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