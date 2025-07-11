import { Mail, Lock, User } from "lucide-react";

const SignupPage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white text-black">
      <div className="w-full max-w-md p-8 border border-gray-300 rounded-2xl shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-center">Create Account</h2>

        <form className="space-y-4">
          {/* Name Field */}
          <div className="flex items-center border border-gray-400 rounded-md px-3 py-3">
            <User className="w-5 h-5 mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center border border-gray-400 rounded-md px-3 py-3">
            <Mail className="w-5 h-5 mr-2 text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center border border-gray-400 rounded-md px-3 py-3">
            <Lock className="w-5 h-5 mr-2 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account? <a className="text-blue-500 font-medium" href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;