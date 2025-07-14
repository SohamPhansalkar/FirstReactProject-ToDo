import '../App.css'

function List({ tasks, onDelete }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <span>{task}</span>
          <button
            type="button"
            className="remove-btn"
            onClick={() => onDelete(index)}
          >
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
}



export default List;