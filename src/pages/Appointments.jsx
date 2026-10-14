import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Appointments = () => {
  const navigate = useNavigate();

  // Load appointments from localStorage (real-time storage)
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem('bookease_appointments');
    return saved ? JSON.parse(saved) : [];
  });

  // Update localStorage whenever appointments change
  useEffect(() => {
    localStorage.setItem('bookease_appointments', JSON.stringify(appointments));
  }, [appointments]);

  // Delete appointment function
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      setAppointments(appointments.filter(apt => apt.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-6 sm:mb-8 animate-fadeInDown">
          <p className="text-[11px] sm:text-[12px] text-[#2563eb] font-semibold uppercase tracking-wide mb-2">
            MY APPOINTMENTS
          </p>
          <h1 className="text-[28px] sm:text-[36px] font-bold text-gray-900 mb-2">
            Manage Your Appointments
          </h1>
          <p className="text-[14px] sm:text-[15px] text-gray-600">
            View your upcoming and previous appointment requests in one place.
          </p>
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <div
              key={appointment.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left: Appointment Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <p className="text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-wide">APPOINTMENT</p>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 text-[10px] sm:text-[11px] font-bold rounded-full">
                      {appointment.status}
                    </span>
                  </div>
                  
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-gray-900 mb-2">
                    {appointment.serviceName}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-gray-600 mb-6">
                    {appointment.providerName}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    <div>
                      <p className="text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-wide mb-1">Date</p>
                      <p className="text-[13px] sm:text-[14px] font-bold text-gray-900">{appointment.date}</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-wide mb-1">Time</p>
                      <p className="text-[13px] sm:text-[14px] font-bold text-gray-900">{appointment.time}</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-wide mb-1">Duration</p>
                      <p className="text-[13px] sm:text-[14px] font-bold text-gray-900">{appointment.duration}</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-wide mb-1">Price</p>
                      <p className="text-[13px] sm:text-[14px] font-bold text-gray-900">{appointment.price}</p>
                    </div>
                  </div>

                  <p className="text-[11px] sm:text-[12px] text-gray-500 mt-4">ID: {appointment.id}</p>
                </div>

                {/* Right: Action Buttons */}
                <div className="flex flex-col gap-3 lg:min-w-[180px]">
                  <button
                    onClick={() => navigate('/services')}
                    className="w-full px-6 sm:px-8 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[13px] sm:text-[14px] font-bold rounded-xl transition-all hover:shadow-lg hover:scale-[1.02] transform duration-200 whitespace-nowrap"
                  >
                    Book Another
                  </button>
                  <button
                    onClick={() => handleDelete(appointment.id)}
                    className="w-full px-6 sm:px-8 py-3 bg-red-500 hover:bg-red-600 text-white text-[13px] sm:text-[14px] font-bold rounded-xl transition-all hover:shadow-lg hover:scale-[1.02] transform duration-200 whitespace-nowrap"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no appointments) */}
        {appointments.length === 0 && (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 sm:p-16 text-center animate-fadeIn">
            <div className="max-w-md mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-bold text-gray-900 mb-3">
                No Appointments Yet
              </h3>
              <p className="text-[14px] sm:text-[15px] text-gray-600 mb-8">
                You haven't booked any appointments yet. Browse our services to get started.
              </p>
              <button
                onClick={() => navigate('/services')}
                className="px-8 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[14px] font-bold rounded-xl transition-all hover:shadow-lg hover:scale-105 transform duration-200"
              >
                Browse Services
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
