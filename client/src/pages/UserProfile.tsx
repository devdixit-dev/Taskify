const UserProfile = () => (
  <div className="p-4 bg-white min-h-screen text-black">
    <h1 className="text-2xl font-bold mb-6">My Profile</h1>
    <div className="max-w-md mx-auto border p-6 rounded-xl shadow">
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Email:</strong> john@example.com</p>
      <p><strong>Role:</strong> User</p>
      <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
        Edit Profile
      </button>
    </div>
  </div>
);

export default UserProfile;
