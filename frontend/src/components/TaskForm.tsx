import React, { useState } from "react";

type Props = {
  onAdd: (title: string, completed: boolean) => void;
  isAdding?: boolean;
};

const TaskForm: React.FC<Props> = ({ onAdd, isAdding = false }) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;

    onAdd(title.trim(), completed);
    setTitle("");
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Mark as completed
      </label>

      <button type="submit" disabled={isAdding}>
        {isAdding ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
