import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BookAppointment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const service = location.state?.service;
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  if (!service) {
    navigate('/services');
    return null;
  }

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'
  ];

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      navigate('/confirm-appointment', { 
        state: { service, selectedDate, selectedTime } 
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[12px] text-[#2563eb] font-semibold uppercase tracking-wide mb-2">
            BOOK APPOINTMENT
          </p>
          <h1 className="text-[32px] font-extrabold text-gray-900">
            Choose Date & Time
          </h1>
        </div>

        {/* Selected Service */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <p className="text-[12px] text-gray-500 uppercase tracking-wide mb-2">Selected Service</p>
          <h3 className="text-[20px] font-extrabold text-gray-900 mb-1">
            {service.serviceName}
          </h3>
          <p className="text-[14px] text-gray-600">
            {service.duration} · {service.price}
          </p>
        </div>

        {/* Date Selection */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
          <label className="block text-[14px] font-bold text-gray-900 mb-3">
            Select Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-5 py-3.5 border border-gray-200 rounded-xl text-[14px] text-gray-900 focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
          />
        </div>

        {/* Time Slots */}
        {selectedDate && (
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
            <div className="flex items-center justify-between mb-6">
              <label className="block text-[14px] font-bold text-gray-900">
                Available Time Slots
              </label>
              <span className="text-[12px] text-gray-500">
                {service.duration} appointment
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-3 rounded-xl text-[14px] font-semibold transition-all ${
                    selectedTime === time
                      ? 'bg-[#2563eb] text-white shadow-md'
                      : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#2563eb]'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Continue Button */}
        {selectedDate && selectedTime && (
          <button
            onClick={handleContinue}
            className="w-full px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[16px] font-extrabold rounded-xl transition-colors shadow-md"
          >
            Continue to Confirmation
          </button>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
