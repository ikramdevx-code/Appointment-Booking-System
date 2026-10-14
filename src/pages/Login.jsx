import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', formData);
    // For now, redirect to appointments
    navigate('/appointments');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-[600px] animate-scaleIn">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-8 sm:p-12 hover:shadow-2xl transition-shadow duration-300">
          {/* Welcome Badge */}
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-block px-4 py-2 bg-[#dbeafe] text-[#2563eb] text-[13px] sm:text-[14px] font-semibold rounded-full mb-4 sm:mb-6 animate-fadeInDown">
              Welcome Back
            </span>
            <h1 className="text-[28px] sm:text-[36px] font-bold text-gray-900 mb-2 sm:mb-3 animate-fadeInUp delay-100">
              Login to Your Account
            </h1>
            <p className="text-[14px] sm:text-[15px] text-gray-600 animate-fadeInUp delay-200">
              Access your appointments and manage your bookings.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Email Field */}
            <div className="animate-fadeInUp delay-300">
              <label className="block text-[14px] font-bold text-[#172033] mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-xl text-[14px] sm:text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Password Field */}
            <div className="animate-fadeInUp delay-400">
              <label className="block text-[14px] font-bold text-[#172033] mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-xl text-[14px] sm:text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 sm:py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[15px] sm:text-[16px] font-bold rounded-xl transition-all hover:shadow-lg hover:scale-[1.02] transform duration-200 animate-fadeInUp delay-500"
            >
              Login
            </button>

            {/* Sign Up Link */}
            <div className="text-center pt-3 sm:pt-4 animate-fadeInUp delay-600">
              <p className="text-[14px] sm:text-[15px] text-gray-600">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => navigate('/signup')}
                  className="text-[#2563eb] font-bold hover:underline transition-all"
                >
                  Create Account
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
