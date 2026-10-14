import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fafbfc]">
      {/* Hero Section - Fixed Screen Height */}
      <div className="min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-5 sm:space-y-7 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-[#eff6ff] px-4 py-2 rounded-full animate-fadeInDown">
                <span className="text-[11px] sm:text-[13px] font-bold text-[#2563eb]">Simple</span>
                <span className="text-[11px] sm:text-[13px] text-gray-400">•</span>
                <span className="text-[11px] sm:text-[13px] font-bold text-[#2563eb]">Fast</span>
                <span className="text-[11px] sm:text-[13px] text-gray-400">•</span>
                <span className="text-[11px] sm:text-[13px] font-bold text-[#2563eb]">Reliable</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-1 animate-slideInLeft delay-100">
                <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] font-bold text-gray-900">
                  Book Your
                </h1>
                <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] font-bold text-gray-900">
                  Appointment
                </h1>
                <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] font-bold text-[#2563eb]">
                  With Ease.
                </h1>
              </div>

              {/* Description */}
              <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0 pt-2 animate-fadeInUp delay-200">
                Find trusted service providers, choose a convenient time, and manage your appointments from one simple platform.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-2 animate-fadeInUp delay-300">
                <button
                  onClick={() => navigate('/services')}
                  className="w-full sm:w-auto px-7 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[14px] font-bold rounded-md transition-all shadow-md hover:shadow-lg hover:scale-105 transform duration-200"
                >
                  Explore Services
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="w-full sm:w-auto px-7 py-3 bg-white hover:bg-gray-50 text-gray-900 text-[14px] font-bold rounded-md border border-gray-300 transition-all hover:shadow-md hover:scale-105 transform duration-200"
                >
                  Create Account
                </button>
              </div>
            </div>

            {/* Right Content - Feature Card */}
            <div className="relative animate-slideInRight delay-200">
              <div className="bg-white rounded-[24px] sm:rounded-[32px] shadow-lg p-8 sm:p-12 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                {/* Icon */}
                <div className="flex items-center justify-center w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] bg-[#dbeafe] rounded-3xl mb-6 sm:mb-8 animate-float">
                  <svg
                    className="w-8 h-8 sm:w-9 sm:h-9 text-[#2563eb]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* Card Title */}
                <h3 className="text-[22px] sm:text-[28px] font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  Easy Appointment Booking
                </h3>

                {/* Card Description */}
                <p className="text-[14px] sm:text-[16px] text-gray-500 leading-relaxed mb-8 sm:mb-10">
                  Select a service, choose a provider, pick an available date and time, and confirm your appointment.
                </p>

                {/* Steps List */}
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-200">
                    <span className="text-[#2563eb] text-[15px] sm:text-[17px] font-bold leading-none mt-0.5">01</span>
                    <h4 className="font-semibold text-[15px] sm:text-[17px] text-gray-700 leading-tight">Choose Service</h4>
                  </div>

                  <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-200">
                    <span className="text-[#2563eb] text-[15px] sm:text-[17px] font-bold leading-none mt-0.5">02</span>
                    <h4 className="font-semibold text-[15px] sm:text-[17px] text-gray-700 leading-tight">Select Time</h4>
                  </div>

                  <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-200">
                    <span className="text-[#2563eb] text-[15px] sm:text-[17px] font-bold leading-none mt-0.5">03</span>
                    <h4 className="font-semibold text-[15px] sm:text-[17px] text-gray-700 leading-tight">Confirm Appointment</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#1a1d2e] text-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-bold">
                <span className="text-[#2563eb]">Book</span>
                <span className="text-white">Ease</span>
              </h2>
              <p className="text-[14px] text-gray-400 leading-relaxed max-w-xs">
                A simple and reliable appointment booking platform designed to make scheduling easier for everyone.
              </p>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-[16px] font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-[14px] text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-[14px] text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-[14px] text-gray-400 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/appointments" className="text-[14px] text-gray-400 hover:text-white transition-colors">
                    Appointments
                  </a>
                </li>
              </ul>
            </div>

            {/* Account Column */}
            <div>
              <h3 className="text-[16px] font-semibold mb-6">Account</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/login" className="text-[14px] text-gray-400 hover:text-white transition-colors">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/signup" className="text-[14px] text-gray-400 hover:text-white transition-colors">
                    Create Account
                  </a>
                </li>
                <li>
                  <a href="/dashboard" className="text-[14px] text-gray-400 hover:text-white transition-colors">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-[16px] font-semibold mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-[#2563eb] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[14px] text-gray-400">Islamabad, Pakistan</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-[#2563eb] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[14px] text-gray-400">support@bookease.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-[#2563eb] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-[14px] text-gray-400">+92 300 1234567</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
