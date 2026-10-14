import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BookingSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { service, selectedDate, selectedTime } = location.state || {};
  
  // Use ref to track if appointment was already saved
  const appointmentSaved = useRef(false);

  // Save appointment to localStorage when page loads
  useEffect(() => {
    // Only save once
    if (service && selectedDate && selectedTime && !appointmentSaved.current) {
      appointmentSaved.current = true;
      
      // Generate unique appointment ID
      const appointmentId = 'APT-' + Date.now();
      
      // Create appointment object
      const newAppointment = {
        id: appointmentId,
        serviceName: service.serviceName,
        providerName: service.providerName,
        date: new Date(selectedDate).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: '2-digit', 
          day: '2-digit' 
        }),
        time: selectedTime,
        duration: service.duration,
        price: service.price,
        status: 'Pending',
        bookedAt: new Date().toISOString()
      };

      // Get existing appointments
      const existingAppointments = JSON.parse(localStorage.getItem('bookease_appointments') || '[]');
      
      // Add new appointment
      existingAppointments.push(newAppointment);
      
      // Save back to localStorage
      localStorage.setItem('bookease_appointments', JSON.stringify(existingAppointments));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array - run only once

  if (!service || !selectedDate || !selectedTime) {
    navigate('/services');
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Success Icon */}
        <div className="flex justify-center mb-6 sm:mb-8 animate-scaleIn">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center animate-float">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-6 sm:mb-8 animate-fadeInUp delay-100">
          <p className="text-[11px] sm:text-[12px] text-green-600 font-semibold uppercase tracking-wide mb-3">
            BOOKING SUBMITTED
          </p>
          <h1 className="text-[28px] sm:text-[36px] font-bold text-gray-900 mb-3 sm:mb-4">
            Appointment Request Sent!
          </h1>
          <p className="text-[14px] sm:text-[15px] text-gray-600 max-w-xl mx-auto">
            Your appointment request has been submitted successfully. Please wait for the provider to review your request.
          </p>
        </div>

        {/* Appointment Details */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-6 sm:mb-8 animate-fadeInUp delay-200 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
            <p className="text-[11px] sm:text-[12px] text-gray-500 uppercase tracking-wide">Appointment Details</p>
            <span className="px-3 py-1 bg-orange-100 text-orange-600 text-[10px] sm:text-[11px] font-bold rounded-full">
              Pending
            </span>
          </div>

          <h3 className="text-[20px] sm:text-[22px] font-bold text-gray-900 mb-6">
            {service.serviceName}
          </h3>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-[13px] sm:text-[14px]">
              <span className="text-gray-500">Provider</span>
              <span className="font-semibold text-gray-900">{service.providerName}</span>
            </div>
            <div className="flex justify-between text-[13px] sm:text-[14px]">
              <span className="text-gray-500">Date</span>
              <span className="font-semibold text-gray-900">
                {new Date(selectedDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: '2-digit', 
                  day: '2-digit' 
                })}
              </span>
            </div>
            <div className="flex justify-between text-[13px] sm:text-[14px]">
              <span className="text-gray-500">Time</span>
              <span className="font-semibold text-gray-900">{selectedTime}</span>
            </div>
            <div className="flex justify-between text-[13px] sm:text-[14px]">
              <span className="text-gray-500">Duration</span>
              <span className="font-semibold text-gray-900">{service.duration}</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-gray-100">
            <span className="text-[13px] sm:text-[14px] font-semibold text-gray-700">Total Price</span>
            <span className="text-[22px] sm:text-[24px] font-bold text-[#2563eb]">{service.price}</span>
          </div>
        </div>

        {/* What's Next Section */}
        <div className="bg-blue-50 rounded-2xl p-5 sm:p-6 mb-6 sm:mb-8 animate-fadeInUp delay-300">
          <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 mb-2">
            What happens next?
          </h3>
          <p className="text-[13px] sm:text-[14px] text-gray-600">
            The provider will review your appointment request. You can check your appointment status from your appointments dashboard.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fadeInUp delay-400">
          <button
            onClick={() => navigate('/appointments')}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[14px] font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105 transform duration-200"
          >
            View My Appointments
          </button>
          <button
            onClick={() => navigate('/services')}
            className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 text-[#2563eb] text-[14px] font-semibold rounded-xl border-2 border-[#2563eb] transition-all hover:scale-105 transform duration-200"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
