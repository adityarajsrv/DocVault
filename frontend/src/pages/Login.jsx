import { useState } from "react";
import logo from "/logo.png";
import { FiFileText, FiSearch, FiClock } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await register(formData.fullName, formData.email, formData.password);
      }
      setTimeout(() => {
        navigate("/dashboard");
      }, 700);
    } catch (err) {
      setError(err.response?.data?.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/2 h-full flex flex-col bg-white text-black">
        <div className="flex items-center mt-5 ml-10 shrink-0">
          <img
            src={logo}
            alt=""
            className="w-12 h-12 bg-blue-500 p-2 rounded-lg mr-2"
          />
          <h2 className="text-3xl font-semibold">DocVault</h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col justify-center max-w-md ml-10 py-12">
            <h1 className="text-3xl font-semibold mb-2">
              {isLogin ? "Welcome back" : "Create an account"}
            </h1>
            <p className="text-gray-500 mb-6">
              {isLogin
                ? "Sign in to access your documents"
                : "Start managing your documents securely"}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
              )}
              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded cursor-pointer" />
                    Remember me
                  </label>
                  <a href="#" className="text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}
              {error && (
                <p className="text-sm text-red-600 bg-red-50 p-2 rounded">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`cursor-pointer w-full py-2 rounded-lg font-medium transition
    ${loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"}
    text-white`}
              >
                {loading
                  ? isLogin
                    ? "Signing in..."
                    : "Creating account..."
                  : isLogin
                  ? "Sign In"
                  : "Create Account"}
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-6">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="cursor-pointer text-blue-600 font-medium hover:underline"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center bg-blue-600 text-white space-y-3">
        <img src={logo} alt="" className="w-28 h-28 bg-white p-4 rounded-lg" />
        <h1 className="text-3xl font-semibold text-yellow-300">
          Secure Document Management
        </h1>
        <p className="text-lg w-[70%] text-center">
          Store, organize, and share your documents with enterprise-grade
          security and seamless collaboration.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white border hover:shadow-lg transition">
            <FiFileText className="w-10 h-10 text-blue-600 mb-3" />
            <h2 className="text-sm font-semibold text-gray-800">Secure</h2>
            <p className="text-xs text-gray-500 mt-1">
              Protected access & encryption
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white border hover:shadow-lg transition">
            <FiSearch className="w-10 h-10 text-blue-600 mb-3" />
            <h2 className="text-sm font-semibold text-gray-800">Searchable</h2>
            <p className="text-xs text-gray-500 mt-1">
              Find documents instantly
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white border hover:shadow-lg transition">
            <FiClock className="w-10 h-10 text-blue-600 mb-3" />
            <h2 className="text-sm font-semibold text-gray-800">Versioned</h2>
            <p className="text-xs text-gray-500 mt-1">
              Track every document change
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
