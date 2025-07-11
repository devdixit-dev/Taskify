import { Users, ClipboardList } from "lucide-react";

const AdminDashboard = () => (
  <div className="p-4 bg-white min-h-screen text-black">
    <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-6 border rounded-xl shadow">
        <Users className="mb-2" />
        <h2 className="font-semibold">Manage Users</h2>
        <p>Create, update, or remove users.</p>
      </div>
      <div className="p-6 border rounded-xl shadow">
        <ClipboardList className="mb-2" />
        <h2 className="font-semibold">Assign Tasks</h2>
        <p>Assign or update tasks for users.</p>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
