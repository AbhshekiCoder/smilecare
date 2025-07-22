import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUser, FaTooth, FaPhone, FaCheck } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
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
    
    if (!formData.date) {
      toast.error('Please select a date');
      return false;
    }
    
    if (!formData.time) {
      toast.error('Please select a time');
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
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
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            Book Your Appointment
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-blue-500 mx-auto mt-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Fill out the form below and we'll contact you to confirm your appointment
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-b from-blue-600 to-blue-800 p-8 text-white">
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="mb-2 flex items-center">
                  <FaCalendarAlt className="mr-2" /> Monday - Saturday: 8am - 8pm
                </p>
                <p className="mb-2 flex items-center">
                  <FaClock className="mr-2" /> Sunday: Emergency Only
                </p>
                <p className="mb-2">123 Dental Street, Health City</p>
                <p>Phone: (123) 456-7890</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="bg-blue-500 rounded-full p-1 mr-2">
                      <FaUser size={12} />
                    </div>
                    Experienced Professionals
                  </li>
                  <li className="flex items-center">
                    <div className="bg-blue-500 rounded-full p-1 mr-2">
                      <FaTooth size={12} />
                    </div>
                    Modern Equipment
                  </li>
                  <li className="flex items-center">
                    <div className="bg-blue-500 rounded-full p-1 mr-2">
                      <FaClock size={12} />
                    </div>
                    Flexible Scheduling
                  </li>
                  <li className="flex items-center">
                    <div className="bg-blue-500 rounded-full p-1 mr-2">
                      <FaCheck size={12} />
                    </div>
                    Same-Day Appointments
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Full Name *</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                      />
                      <FaUser className="absolute left-3 top-4 text-gray-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Email Address *</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john@example.com"
                      />
                      <FaUser className="absolute left-3 top-4 text-gray-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Phone Number *</label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="(123) 456-7890"
                      />
                      <FaPhone className="absolute left-3 top-4 text-gray-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Service *</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                      >
                        <option value="general">General Dentistry</option>
                        <option value="cosmetic">Cosmetic Dentistry</option>
                        <option value="ortho">Orthodontics</option>
                        <option value="implant">Dental Implants</option>
                        <option value="emergency">Emergency Care</option>
                        <option value="cleaning">Teeth Cleaning</option>
                        <option value="whitening">Teeth Whitening</option>
                      </select>
                      <FaTooth className="absolute left-3 top-4 text-gray-400" />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Preferred Date *</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <FaCalendarAlt className="absolute left-3 top-4 text-gray-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Preferred Time *</label>
                    <div className="relative">
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <FaClock className="absolute left-3 top-4 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="block text-gray-700 mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Any specific concerns or requests"
                  ></textarea>
                </div>
                
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 flex justify-center items-center`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Book Appointment'
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookAppointment;