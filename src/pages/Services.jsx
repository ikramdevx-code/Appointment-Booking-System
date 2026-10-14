import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const services = [
    {
      id: 1,
      providerName: 'Dr. Ahmed Khan',
      providerTitle: 'Doctor',
      providerInitial: 'D',
      serviceName: 'General Consultation',
      description: 'Professional consultation for general health concerns and medical guidance.',
      duration: '30 min',
      price: 'Rs. 1500',
      location: 'Islamabad',
      category: 'medical',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      id: 2,
      providerName: 'Sarah Ahmed',
      providerTitle: 'Consultant',
      providerInitial: 'S',
      serviceName: 'Business Consultation',
      description: 'One-on-one consultation to discuss business planning and professional growth.',
      duration: '45 min',
      price: 'Rs. 2500',
      location: 'Lahore',
      category: 'business',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      id: 3,
      providerName: 'Style Studio',
      providerTitle: 'Salon',
      providerInitial: 'S',
      serviceName: 'Hair Styling',
      description: 'Professional hair styling service with an experienced stylist.',
      duration: '60 min',
      price: 'Rs. 2000',
      location: 'Islamabad',
      category: 'beauty',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      id: 4,
      providerName: 'Ali Legal Consultants',
      providerTitle: 'Lawyer',
      providerInitial: 'A',
      serviceName: 'Legal Consultation',
      description: 'Professional legal consultation for personal and business matters.',
      duration: '45 min',
      price: 'Rs. 3000',
      location: 'Rawalpindi',
      category: 'legal',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    }
  ];

  // Filter services based on search, category, and location
  const filteredServices = services.filter((service) => {
    const matchesSearch = 
      searchQuery === '' ||
      service.providerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.providerTitle.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = 
      selectedCategory === 'all' || 
      service.category === selectedCategory;

    const matchesLocation = 
      selectedLocation === 'all' || 
      service.location.toLowerCase() === selectedLocation.toLowerCase();

    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <div className="bg-[#f8fafc] border-b border-gray-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-block mb-4 sm:mb-6 animate-fadeInDown">
            <span className="text-[12px] sm:text-[13px] font-semibold text-[#2563eb]">
              Appointment Booking System
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-gray-900 mb-3 sm:mb-4 animate-fadeInUp delay-100">
            Find the Right Service
          </h1>

          {/* Description */}
          <p className="text-[14px] sm:text-[15px] text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-200">
            Browse providers and services, compare available options, and choose the appointment that works best for you.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-[#f8fafc] py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 animate-scaleIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search provider or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 rounded-xl text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb] bg-white transition-all"
              />

              {/* Category Dropdown */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 rounded-xl text-[14px] text-gray-700 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb] bg-white cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10 transition-all"
              >
                <option value="all">All Categories</option>
                <option value="medical">Medical</option>
                <option value="business">Business</option>
                <option value="legal">Legal</option>
                <option value="beauty">Beauty & Salon</option>
              </select>

              {/* Location Dropdown */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 rounded-xl text-[14px] text-gray-700 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb] bg-white cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10 transition-all"
              >
                <option value="all">All Locations</option>
                <option value="islamabad">Islamabad</option>
                <option value="lahore">Lahore</option>
                <option value="rawalpindi">Rawalpindi</option>
                <option value="karachi">Karachi</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services List Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-3 animate-fadeInUp">
          <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900">Available Services</h2>
          <span className="text-[13px] sm:text-[14px] text-gray-500">
            {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'} found
          </span>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:shadow-lg hover:border-[#2563eb] transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Provider Info */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${service.bgColor} ${service.textColor} rounded-xl flex items-center justify-center text-[16px] sm:text-[18px] font-bold`}>
                    {service.providerInitial}
                  </div>
                  <div>
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900">
                      {service.providerName}
                    </h3>
                    <p className="text-[12px] sm:text-[13px] text-gray-500">{service.providerTitle}</p>
                  </div>
                </div>

                {/* Service Name */}
                <h4 className="text-[20px] sm:text-[22px] font-bold text-gray-900 mb-2 sm:mb-3 mt-4 sm:mt-6">
                  {service.serviceName}
                </h4>

                {/* Service Description */}
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mb-6 sm:mb-8">
                  {service.description}
                </p>

                {/* Duration and Price */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="bg-gray-50 rounded-xl p-3 sm:p-4 hover:bg-gray-100 transition-colors">
                    <p className="text-[10px] sm:text-[11px] text-gray-500 mb-1 uppercase tracking-wide">Duration</p>
                    <p className="text-[14px] sm:text-[15px] font-bold text-gray-900">{service.duration}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 sm:p-4 hover:bg-gray-100 transition-colors">
                    <p className="text-[10px] sm:text-[11px] text-gray-500 mb-1 uppercase tracking-wide">Price</p>
                    <p className="text-[14px] sm:text-[15px] font-bold text-gray-900">{service.price}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-[12px] sm:text-[13px] text-gray-600">{service.location}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-4 sm:mt-6">
                  <button 
                    onClick={() => navigate('/provider-detail', { state: { service } })}
                    className="flex-1 px-4 sm:px-6 py-3 sm:py-3.5 bg-blue-50 hover:bg-blue-100 text-[#2563eb] text-[13px] sm:text-[14px] font-bold rounded-xl transition-all hover:scale-105 transform duration-200"
                  >
                    View Provider
                  </button>
                  <button 
                    onClick={() => navigate('/book-appointment', { state: { service } })}
                    className="flex-1 px-4 sm:px-6 py-3 sm:py-3.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[13px] sm:text-[14px] font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105 transform duration-200"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 animate-fadeIn">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full mb-4">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-2">No Services Found</h3>
            <p className="text-[13px] sm:text-[14px] text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
