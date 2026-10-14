import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ConfirmAppointment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { service, selectedDate, selectedTime } = location.state || {};

  if (!service || !selectedDate || !selectedTime) {
    navigate('/services');
    return null;
  }

  const handleConfirm = () => {
    navigate('/booking-success', { 
      state: { service, selectedDate, selectedTime } 
    });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-3xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[12px] text-[#2563eb] font-semibold uppercase tracking-wide mb-2">
            APPOINTMENT BOOKING
          </p>
          <h1 className="text-[32px] font-extrabold text-gray-900 mb-2">
            Confirm Your Appointment
          </h1>
          <p className="text-[15px] text-gray-600">
            Please review your appointment details before confirming.
          </p>
        </div>

        {/* Appointment Details Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
          {/* Provider */}
          <div className="mb-6 pb-6 border-b border-gray-100">
            <p className="text-[12px] text-gray-500 uppercase tracking-wide mb-2">Provider</p>
            <h3 className="text-[20px] font-extrabold text-gray-900">
              {service.providerName}
            </h3>
            <p className="text-[14px] text-gray-600">{service.providerTitle}</p>
          </div>

          {/* Service */}
          <div className="mb-6 pb-6 border-b border-gray-100">
            <p className="text-[12px] text-gray-500 uppercase tracking-wide mb-2">Service</p>
            <h3 className="text-[18px] font-extrabold text-gray-900">
              {service.serviceName}
            </h3>
            <p className="text-[14px] text-gray-600">{service.duration}</p>
          </div>

          {/* Date */}
          <div className="mb-6 pb-6 border-b border-gray-100">
            <p className="text-[12px] text-gray-500 uppercase tracking-wide mb-2">Appointment Date</p>
            <p className="text-[18px] font-extrabold text-gray-900">
              {new Date(selectedDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Time */}
          <div className="mb-6 pb-6 border-b border-gray-100">
            <p className="text-[12px] text-gray-500 uppercase tracking-wide mb-2">Appointment Time</p>
            <p className="text-[18px] font-extrabold text-gray-900">{selectedTime}</p>
          </div>

          {/* Total Price */}
          <div className="flex items-center justify-between">
            <p className="text-[14px] font-semibold text-gray-700">Total Price</p>
            <p className="text-[24px] font-extrabold text-[#2563eb]">{service.price}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-3">
          <button
            onClick={handleConfirm}
            className="w-full px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[16px] font-extrabold rounded-xl transition-colors shadow-md"
          >
            Confirm Appointment
          </button>
          <button
            onClick={() => navigate(-1)}
            className="w-full px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 text-[14px] font-semibold rounded-xl border border-gray-300 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAppointment;
