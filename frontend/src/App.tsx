import "./App.css";
import { useTasks } from "./hooks/useTasks";
import TaskForm from "./components/TaskForm";

function App() {
  const { tasks, loading, error, addTask, addingTask } = useTasks();

  if (loading) return <p>Loading tasks...</p>;

  if (error) {
    return (
      <div>
        <h1>Task List</h1>
        <div>
          <strong>Error:</strong> {error}
          <br />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Task List</h1>
      <TaskForm onAdd={addTask} isAdding={addingTask} />
      <ul>
        {tasks.length === 0 ? (
          <li>No tasks found.</li>
        ) : (
          tasks.map((task) => (
            <li key={task.id}>
              {task.title} {task.completed ? "✅" : "❌"}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
