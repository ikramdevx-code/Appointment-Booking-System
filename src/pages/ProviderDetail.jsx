import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProviderDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialService = location.state?.service;
  const [selectedService, setSelectedService] = useState(null);

  if (!initialService) {
    navigate('/services');
    return null;
  }

  // Available services for this provider
  const availableServices = [
    {
      ...initialService,
      id: 1
    },
    {
      id: 2,
      providerName: initialService.providerName,
      providerTitle: initialService.providerTitle,
      providerInitial: initialService.providerInitial,
      serviceName: 'Follow-up Consultation',
      description: 'Follow-up consultation to review progress and discuss ongoing concerns.',
      duration: '20 min',
      price: 'Rs. 1000',
      location: initialService.location,
      category: initialService.category,
      bgColor: initialService.bgColor,
      textColor: initialService.textColor
    }
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleContinue = () => {
    if (selectedService) {
      navigate('/book-appointment', { state: { service: selectedService } });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-8">
          <button
            onClick={() => navigate('/services')}
            className="flex items-center space-x-2 text-[14px] text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Services</span>
          </button>
        </div>
      </div>

      {/* Provider Info Card */}
      <div className="max-w-5xl mx-auto px-8 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-10 mb-8">
          <div className="flex items-start space-x-6 mb-8">
            <div className={`w-20 h-20 ${initialService.bgColor} ${initialService.textColor} rounded-2xl flex items-center justify-center text-[32px] font-bold`}>
              {initialService.providerInitial}
            </div>
            <div className="flex-1">
              <p className="text-[12px] text-[#2563eb] font-semibold uppercase tracking-wide mb-2">
                {initialService.providerTitle}
              </p>
              <h1 className="text-[36px] font-extrabold text-gray-900 mb-4">
                {initialService.providerName}
              </h1>
              <p className="text-[15px] text-gray-600 leading-relaxed max-w-2xl">
                Experienced healthcare professional providing reliable consultation services with a patient-focused approach.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="text-[14px] text-gray-700">{initialService.location}</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-[14px] text-gray-700">+92 300 1234567</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-[14px] text-gray-700">ahmed@example.com</span>
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[12px] text-[#2563eb] font-semibold uppercase tracking-wide mb-1">SERVICES</p>
              <h2 className="text-[28px] font-extrabold text-gray-900">Services Offered</h2>
            </div>
            <p className="text-[14px] text-gray-600">
              Select a service to continue with your appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableServices.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceSelect(service)}
                className={`rounded-2xl p-6 cursor-pointer transition-all ${
                  selectedService?.id === service.id
                    ? 'bg-white border-2 border-[#2563eb] shadow-md'
                    : 'bg-white border border-gray-200 hover:border-gray-300'
                }`}
              >
                {selectedService?.id === service.id && (
                  <div className="flex justify-end mb-2">
                    <div className="bg-[#2563eb] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                      SELECTED
                    </div>
                  </div>
                )}
                <h3 className="text-[20px] font-extrabold text-gray-900 mb-3">
                  {service.serviceName}
                </h3>
                <p className="text-[14px] text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="flex items-center justify-between text-[14px]">
                  <div>
                    <span className="text-gray-500 text-[12px]">Duration</span>
                    <p className="font-extrabold text-gray-900">{service.duration}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 text-[12px]">Price</span>
                    <p className="font-extrabold text-gray-900">{service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Button - Only show when service is selected */}
        {selectedService && (
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <button
              onClick={handleContinue}
              className="w-full px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[16px] font-extrabold rounded-xl transition-colors shadow-md"
            >
              Continue to Book Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderDetail;
