import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center animate-fadeIn">
            <span className="text-[20px] sm:text-[22px] font-bold tracking-tight">
              <span className="text-[#2563eb]">Book</span>
              <span className="text-gray-900">Ease</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <Link
              to="/"
              className={`text-[15px] font-medium transition-all duration-200 ${
                isActive('/')
                  ? 'text-[#2563eb]'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-[15px] font-medium transition-all duration-200 ${
                isActive('/services')
                  ? 'text-[#2563eb]'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Services
            </Link>
            <Link
              to="/appointments"
              className={`text-[15px] font-medium transition-all duration-200 ${
                isActive('/appointments')
                  ? 'text-[#2563eb]'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Appointments
            </Link>
            <Link
              to="/about"
              className={`text-[15px] font-medium transition-all duration-200 ${
                isActive('/about')
                  ? 'text-[#2563eb]'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              About
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/login"
              className="px-6 lg:px-7 py-2.5 text-[14px] font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-md transition-all hover:shadow-md hover:scale-105 transform duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-6 lg:px-7 py-2.5 text-[14px] font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-md transition-all hover:shadow-md hover:scale-105 transform duration-200"
            >
              Signup
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeInDown">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-md text-[15px] font-medium transition-all ${
                  isActive('/')
                    ? 'bg-[#dbeafe] text-[#2563eb]'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-md text-[15px] font-medium transition-all ${
                  isActive('/services')
                    ? 'bg-[#dbeafe] text-[#2563eb]'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Services
              </Link>
              <Link
                to="/appointments"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-md text-[15px] font-medium transition-all ${
                  isActive('/appointments')
                    ? 'bg-[#dbeafe] text-[#2563eb]'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Appointments
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-md text-[15px] font-medium transition-all ${
                  isActive('/about')
                    ? 'bg-[#dbeafe] text-[#2563eb]'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                About
              </Link>
              <div className="pt-3 border-t border-gray-200 flex flex-col space-y-2">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-[14px] font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-md transition-all text-center"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-[14px] font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-md transition-all text-center"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
