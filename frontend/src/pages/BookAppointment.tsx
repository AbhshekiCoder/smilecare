import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUser, FaTooth, FaPhone, FaCheck, FaMapMarkerAlt, FaEnvelope, FaSmile, FaTeeth } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GiToothbrush } from 'react-icons/gi';
const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: 'general',
    dentist: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const services = [
    { value: 'general', label: 'General Dentistry', icon: FaTooth },
    { value: 'cosmetic', label: 'Cosmetic Dentistry', icon: FaSmile },
    { value: 'ortho', label: 'Orthodontics', icon: FaTeeth },
    { value: 'implant', label: 'Dental Implants', icon: GiToothbrush },
    { value: 'emergency', label: 'Emergency Care', icon: FaClock },
    { value: 'cleaning', label: 'Teeth Cleaning', icon: GiToothbrush },
    { value: 'whitening', label: 'Teeth Whitening', icon: FaSmile }
  ];

  const dentists = [
    { id: 'dr-johnson', name: 'Dr. Sarah Johnson', specialty: 'General Dentistry' },
    { id: 'dr-chen', name: 'Dr. Michael Chen', specialty: 'Orthodontics' },
    { id: 'dr-rodriguez', name: 'Dr. Emily Rodriguez', specialty: 'Cosmetic Dentistry' },
    { id: 'dr-wilson', name: 'Dr. James Wilson', specialty: 'Oral Surgery' },
    { id: 'any', name: 'Any Available Dentist', specialty: 'General' }
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        if (!formData.name.trim()) {
          toast.error('Please enter your name');
          return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          toast.error('Please enter a valid email');
          return false;
        }
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
          toast.error('Please enter a valid 10-digit phone number');
          return false;
        }
        return true;
      
      case 2:
        if (!formData.service) {
          toast.error('Please select a service');
          return false;
        }
        return true;
      
      case 3:
        if (!formData.date) {
          toast.error('Please select a date');
          return false;
        }
        if (!formData.time) {
          toast.error('Please select a time');
          return false;
        }
        return true;
      
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(4)) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Appointment booked:', formData);
      toast.success('Appointment booked successfully! We will contact you to confirm.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: 'general',
        dentist: '',
        message: ''
      });
      setCurrentStep(1);
      setIsSubmitting(false);
    }, 2000);
  };

  const StepIndicator = () => (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-4">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
              currentStep >= step 
                ? 'bg-blue-600 border-blue-600 text-white' 
                : 'border-gray-300 text-gray-400'
            }`}>
              {step}
            </div>
            {step < 4 && (
              <div className={`w-20 h-1 mx-4 ${
                currentStep > step ? 'bg-blue-600' : 'bg-gray-300'
              }`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const StepLabels = () => (
    <div className="grid grid-cols-4 gap-4 text-center mb-8">
      <div className={`text-sm ${currentStep >= 1 ? 'text-blue-600 font-semibold' : 'text-gray-400'}`}>
        Personal Info
      </div>
      <div className={`text-sm ${currentStep >= 2 ? 'text-blue-600 font-semibold' : 'text-gray-400'}`}>
        Service
      </div>
      <div className={`text-sm ${currentStep >= 3 ? 'text-blue-600 font-semibold' : 'text-gray-400'}`}>
        Date & Time
      </div>
      <div className={`text-sm ${currentStep >= 4 ? 'text-blue-600 font-semibold' : 'text-gray-400'}`}>
        Confirmation
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen py-12">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Book Your <span className="text-blue-600">Appointment</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your visit with our dental experts. Fast, easy, and convenient booking process.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <StepIndicator />
          <StepLabels />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <form onSubmit={handleSubmit}>
                <div className="p-8">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-gray-700 mb-3 font-medium">Full Name *</label>
                          <div className="relative">
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                              placeholder="Enter your full name"
                            />
                            <FaUser className="absolute left-4 top-4 text-gray-400" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-700 mb-3 font-medium">Email Address *</label>
                            <div className="relative">
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="your@email.com"
                              />
                              <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-3 font-medium">Phone Number *</label>
                            <div className="relative">
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="(123) 456-7890"
                              />
                              <FaPhone className="absolute left-4 top-4 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Service Selection */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">Select Service</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service) => {
                          const IconComponent = service.icon;
                          return (
                            <label key={service.value} className="relative">
                              <input
                                type="radio"
                                name="service"
                                value={service.value}
                                checked={formData.service === service.value}
                                onChange={handleChange}
                                className="absolute opacity-0"
                              />
                              <div className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                formData.service === service.value
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-blue-300'
                              }`}>
                                <div className="flex items-center">
                                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                    <IconComponent className="text-blue-600 text-lg" />
                                  </div>
                                  <span className="font-medium">{service.label}</span>
                                </div>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                      
                      <div className="mt-6">
                        <label className="block text-gray-700 mb-3 font-medium">Preferred Dentist (Optional)</label>
                        <select
                          name="dentist"
                          value={formData.dentist}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select a dentist</option>
                          {dentists.map(dentist => (
                            <option key={dentist.id} value={dentist.id}>
                              {dentist.name} - {dentist.specialty}
                            </option>
                          ))}
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Date & Time */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">Select Date & Time</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 mb-3 font-medium">Preferred Date *</label>
                          <div className="relative">
                            <input
                              type="date"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              min={new Date().toISOString().split('T')[0]}
                              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <FaCalendarAlt className="absolute left-4 top-4 text-gray-400" />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 mb-3 font-medium">Preferred Time *</label>
                          <div className="relative">
                            <select
                              name="time"
                              value={formData.time}
                              onChange={handleChange}
                              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                            >
                              <option value="">Select a time</option>
                              {timeSlots.map(slot => (
                                <option key={slot} value={slot}>{slot}</option>
                              ))}
                            </select>
                            <FaClock className="absolute left-4 top-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <label className="block text-gray-700 mb-3 font-medium">Additional Message (Optional)</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Any specific concerns or special requests..."
                        ></textarea>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Confirmation */}
                  {currentStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">Confirm Your Appointment</h3>
                      <div className="bg-blue-50 rounded-xl p-6 mb-6">
                        <h4 className="font-semibold text-blue-800 mb-4">Appointment Summary</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Name:</span>
                            <span className="font-medium">{formData.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Service:</span>
                            <span className="font-medium">{services.find(s => s.value === formData.service)?.label}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Date:</span>
                            <span className="font-medium">{formData.date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Time:</span>
                            <span className="font-medium">{formData.time}</span>
                          </div>
                          {formData.dentist && (
                            <div className="flex justify-between">
                              <span className="text-gray-600">Dentist:</span>
                              <span className="font-medium">{dentists.find(d => d.id === formData.dentist)?.name}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition"
                      >
                        Back
                      </button>
                    )}
                    
                    {currentStep < 4 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition"
                      >
                        Continue
                      </button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="ml-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition disabled:bg-green-400"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Booking...
                          </div>
                        ) : (
                          'Confirm Appointment'
                        )}
                      </motion.button>
                    )}
                  </div>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Sidebar Information */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white sticky top-8"
            >
              <div className="text-center mb-8">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FaCalendarAlt className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Appointment</h3>
                <p className="text-blue-100">Complete in just 2 minutes</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <FaClock className="mr-2" /> Office Hours
                  </h4>
                  <div className="text-blue-100 space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Mon - Fri:</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Emergency Only</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <FaMapMarkerAlt className="mr-2" /> Location
                  </h4>
                  <p className="text-blue-100 text-sm">
                    123 Dental Street<br />
                    Health City, HC 12345<br />
                    (555) 123-4567
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Why Choose Us?</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <FaCheck className="text-green-400 mr-2" />
                      Same-day appointments available
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-400 mr-2" />
                      Emergency dental care
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-400 mr-2" />
                      Insurance accepted
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-400 mr-2" />
                      Modern technology
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Emergency?</h4>
                  <p className="text-blue-100 text-sm mb-3">Call us immediately for urgent dental care</p>
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition">
                    Emergency Hotline
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;