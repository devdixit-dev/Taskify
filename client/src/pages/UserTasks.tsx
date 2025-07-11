import { useState } from "react";
import TaskCard, { type Task, type Status } from "../components/TaskCard";

const UserTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Design login page", status: "Pending" },
    { id: 2, title: "Fix API bugs", status: "In Progress" }
  ]);

  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTask, status: "Pending" }]);
      setNewTask("");
    }
  };

  const handleStatusChange = (id: number, newStatus: Status) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  return (
    <div className="p-4 bg-white min-h-screen text-black">
      <h1 className="text-2xl font-bold mb-6">My Tasks</h1>

      <div className="flex gap-2 mb-4 flex-col md:flex-row">
        <input
          type="text"
          placeholder="New task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border px-3 py-2 rounded-xl w-full"
        />
        <button onClick={handleAdd} className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800">
          Add Task
        </button>
      </div>

      <div className="grid gap-4">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} onStatusChange={handleStatusChange} />
        ))}
      </div>
    </div>
  );
};

export default UserTasks;