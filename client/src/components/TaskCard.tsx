import { CheckCircle, Hourglass, CircleDashed } from "lucide-react";
import type { JSX } from "react";

// Define status type
export type Status = "Pending" | "In Progress" | "Completed";

// Define task structure
export interface Task {
  id: number;
  title: string;
  status: Status;
}

// Props for TaskCard
interface TaskCardProps {
  task: Task;
  onStatusChange: (id: number, newStatus: Status) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onStatusChange }) => {
  const statusOptions: Status[] = ["Pending", "In Progress", "Completed"];

  const icons: Record<Status, JSX.Element> = {
    Pending: <CircleDashed className="text-yellow-600" />,
    "In Progress": <Hourglass className="text-blue-600" />,
    Completed: <CheckCircle className="text-green-600" />,
  };

  return (
    <div className="border p-4 rounded-xl shadow flex items-center justify-between">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-600 flex items-center gap-2">
          Status: {icons[task.status]} {task.status}
        </p>
      </div>
      <select
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value as Status)}
        className="border px-2 py-1 rounded"
      >
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TaskCard;