import { CheckCircle, ListTodo } from "lucide-react";

const UserDashboard = () => (
  <div className="p-4 bg-white min-h-screen text-black">
    <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-6 border rounded-xl shadow">
        <ListTodo className="mb-2" />
        <h2 className="font-semibold">My Tasks</h2>
        <p>View all your assigned and personal tasks.</p>
      </div>
      <div className="p-6 border rounded-xl shadow">
        <CheckCircle className="mb-2" />
        <h2 className="font-semibold">Completed Tasks</h2>
        <p>Track completed tasks and progress.</p>
      </div>
    </div>
  </div>
);

export default UserDashboard;