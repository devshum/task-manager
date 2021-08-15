const FormInputs = () => {
  return (
    // TO DO remove inline styles
    <div style={{display: 'flex', gap: '30px', alignItems: 'center'}}>
      <div>
        <label htmlFor="task">Task Title</label>
        <input type="text" id="task" />
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" name="date" id="date" min="2021-01-01" />
      </div>

      <div>
        <label htmlFor="status">Status:</label>
        <select name="status" id="status" >
          <option value="pending">Pending</option>
          <option value="in progress">In progress</option>
        </select>
      </div>

      <div>
        <label htmlFor="importance">Importance:</label>
        <select name="importance" id="importance">
          <option value="minor">Minor</option>
          <option value="normal">Normal</option>
          <option value="critical">Critical</option>
        </select>
      </div>
    </div>
  )
}

export default FormInputs;