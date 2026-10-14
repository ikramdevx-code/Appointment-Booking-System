import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-[12px] text-[#2563eb] font-semibold uppercase tracking-wide mb-4">
            About the System
          </p>
          <h1 className="text-[48px] font-bold text-gray-900 mb-6 leading-tight">
            A Smarter Way to{' '}
            <span className="text-[#2563eb]">Manage Appointments</span>
          </h1>
          <p className="text-[15px] text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our Appointment Booking System provides a simple and organized platform where customers
            can discover service providers, view available services, and book appointments according to
            their preferred date and time.
          </p>
        </div>
      </div>

      {/* Our Platform Section */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <p className="text-[12px] text-[#2563eb] font-semibold uppercase tracking-wide mb-4">
              OUR PLATFORM
            </p>
            <h2 className="text-[36px] font-bold text-gray-900 mb-6 leading-tight">
              Making Appointment Booking Simple and Convenient
            </h2>
            <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
              The system is designed for businesses and professionals that work with appointments,
              including doctors, consultants, salons, lawyers, and other service providers.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Customers can search for providers and services, compare available options, select a
              suitable time slot, and manage their appointments from one platform.
            </p>
          </div>

          {/* Right Side - Feature Box */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="w-12 h-12 bg-[#dbeafe] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-[22px] font-bold text-gray-900 mb-3">
              Simple Booking Experience
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Find a service, choose a provider, select an available slot, and confirm your appointment.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[12px] text-[#2563eb] font-semibold uppercase tracking-wide mb-4">
              HOW IT WORKS
            </p>
            <h2 className="text-[36px] font-bold text-gray-900 mb-4">
              From Search to Appointment
            </h2>
            <p className="text-[15px] text-gray-600 max-w-2xl mx-auto">
              The platform keeps the appointment process clear, organized, and easy to manage.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-[#fafbfc] rounded-2xl border border-gray-200 p-8">
              <p className="text-[12px] text-[#2563eb] font-bold mb-4">01</p>
              <h3 className="text-[22px] font-bold text-gray-900 mb-3">Discover</h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                Search and browse service providers according to category, location, or service.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#fafbfc] rounded-2xl border border-gray-200 p-8">
              <p className="text-[12px] text-[#2563eb] font-bold mb-4">02</p>
              <h3 className="text-[22px] font-bold text-gray-900 mb-3">Choose</h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                View provider information and available services, including duration and price.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#fafbfc] rounded-2xl border border-gray-200 p-8">
              <p className="text-[12px] text-[#2563eb] font-bold mb-4">03</p>
              <h3 className="text-[22px] font-bold text-gray-900 mb-3">Book</h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                Select an available date and time slot and submit your appointment request.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#fafbfc] rounded-2xl border border-gray-200 p-8">
              <p className="text-[12px] text-[#2563eb] font-bold mb-4">04</p>
              <h3 className="text-[22px] font-bold text-gray-900 mb-3">Manage</h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                Keep track of appointments and receive updates about appointment status.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* User Roles Section */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <p className="text-[12px] text-[#2563eb] font-semibold uppercase tracking-wide mb-4">
            USER ROLES
          </p>
          <h2 className="text-[36px] font-bold text-gray-900">
            Built for Everyone Involved
          </h2>
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Customer */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <p className="text-[12px] text-[#2563eb] font-bold mb-4">01</p>
            <h3 className="text-[22px] font-bold text-gray-900 mb-3">Customer</h3>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Search providers, view services, book appointments, and manage personal appointment requests.
            </p>
          </div>

          {/* Provider */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <p className="text-[12px] text-[#2563eb] font-bold mb-4">02</p>
            <h3 className="text-[22px] font-bold text-gray-900 mb-3">Provider</h3>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Manage services, availability, appointments, and provider profile information.
            </p>
          </div>

          {/* Administrator */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <p className="text-[12px] text-[#2563eb] font-bold mb-4">03</p>
            <h3 className="text-[22px] font-bold text-gray-900 mb-3">Administrator</h3>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Manage users, providers, services, appointments, and overall system activity.
            </p>
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

export default About;
