// src/pages/Home.tsx
import { motion } from 'framer-motion';
import { 
  FaTooth, 
  FaCalendarCheck, 
  FaUserMd, 
  FaTeeth,
  FaSmile,
  FaTeethOpen,
  FaClinicMedical,
  FaAward,
  FaStar,
  FaCheckCircle,
  FaClock,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Header Bar */}
      <div className="bg-blue-900 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-cyan-300" size={14} />
              <span>1-800-DENTIST</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock className="text-cyan-300" size={14} />
              <span>Mon-Fri: 8AM-6PM | Sat: 9AM-2PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Emergency Dental Care Available</span>
            <div className="flex items-center space-x-1">
              <FaStar className="text-yellow-300" size={14} />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-20 left-10"
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaTeethOpen size={120} className="text-white" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-20 right-20"
            animate={{ 
              y: [0, 25, 0],
              rotate: [0, -20, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <FaTeeth size={150} className="text-cyan-300" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <FaAward className="text-cyan-300" />
                <span className="text-cyan-300 font-semibold">Trusted Since 1995</span>
              </div>
              
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Exceptional <span className="text-cyan-300">Dental Care</span> for Your Whole Family
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Welcome to Premier Dental Care, where we combine cutting-edge technology with 
                compassionate expertise to deliver outstanding dental services. Our commitment 
                to excellence ensures your family receives the highest quality care in a warm, 
                comfortable environment.
              </motion.p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {['Advanced Technology', 'Pain-Free Procedures', '24/7 Emergency Care', 'Insurance Accepted'].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <FaCheckCircle className="text-cyan-300" />
                    <span className="text-white">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link 
                  to="/book-appointment" 
                  className="relative overflow-hidden group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-4 px-8 rounded-lg shadow-2xl transition-all duration-300 flex items-center space-x-2"
                  >
                    <FaCalendarCheck />
                    <span>Book Appointment</span>
                  </motion.div>
                </Link>
                
                <Link 
                  to="/about" 
                  className="relative overflow-hidden group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                  >
                    Learn More About Us
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Modern Dental Image Container */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform perspective-1000">
                <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-cyan-100 to-blue-100">
                  {/* Dental Office Image Placeholder */}
                  <div className="w-full h-96 bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-pattern-dental opacity-10"></div>
                    <div className="text-center">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 8,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <FaTeethOpen size={120} className="text-cyan-500 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-blue-900">Modern Dental Facility</h3>
                      <p className="text-blue-700 mt-2">State-of-the-art equipment & comfortable environment</p>
                    </div>
                  </div>
                </div>
                
                {/* Info Cards Overlay */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4 p-3">
                  <motion.div 
                    className="bg-white shadow-xl rounded-lg p-4 text-center min-w-[120px]"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-cyan-500 font-bold text-2xl">5000+</div>
                    <div className="text-sm text-gray-600">Happy Patients</div>
                  </motion.div>
                  <motion.div 
                    className="bg-cyan-500 text-white shadow-xl rounded-lg p-4 text-center min-w-[120px]"
                    whileHover={{ y: -5 }}
                  >
                    <div className="font-bold text-2xl">15+</div>
                    <div className="text-sm">Years Experience</div>
                  </motion.div>
                  <motion.div 
                    className="bg-white shadow-xl rounded-lg p-4 text-center min-w-[120px]"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-cyan-500 font-bold text-2xl">24/7</div>
                    <div className="text-sm text-gray-600">Emergency Care</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              Why Choose <span className="text-cyan-600">Premier Dental Care</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Experience the difference that comes with exceptional dental care and personalized service
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-cyan-500 mb-4">
                  <feature.icon size={40} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              Comprehensive <span className="text-cyan-600">Dental Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              From routine checkups to advanced cosmetic procedures, we offer a full range of dental services
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="text-cyan-500 mb-4">
                    <service.icon size={48} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.procedures.map((procedure, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <FaCheckCircle className="text-cyan-500 mr-2" size={14} />
                        {procedure}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 text-center">
                  <Link to={service.link} className="text-white font-semibold hover:underline">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              What Our <span className="text-cyan-600">Patients Say</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.service}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dental opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Transform Your Smile?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-10 max-w-3xl mx-auto"
          >
            Take the first step towards optimal oral health. Schedule your consultation today and 
            experience the Premier Dental Care difference.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link 
              to="/book-appointment" 
              className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 px-12 rounded-lg shadow-2xl transition-all duration-300 flex items-center space-x-2 text-lg"
            >
              <FaCalendarCheck />
              <span>Book Your Appointment</span>
            </Link>
            
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-12 rounded-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-3">
              <FaPhoneAlt className="text-cyan-300" />
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-cyan-200">1-800-DENTIST</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FaClock className="text-cyan-300" />
              <div>
                <div className="font-semibold">Open Hours</div>
                <div className="text-cyan-200">Mon-Fri: 8AM-6PM</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FaMapMarkerAlt className="text-cyan-300" />
              <div>
                <div className="font-semibold">Location</div>
                <div className="text-cyan-200">Visit Our Clinic</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: FaAward,
    title: "Board Certified Dentists",
    description: "Our team consists of highly qualified, board-certified dental professionals with extensive experience."
  },
  {
    icon: FaClinicMedical,
    title: "State-of-the-Art Facility",
    description: "Modern equipment and advanced technology ensure the highest standards of dental care."
  },
  {
    icon: FaStar,
    title: "5-Star Patient Experience",
    description: "Consistently rated excellent by our patients for quality care and exceptional service."
  }
];

const services = [
  {
    icon: FaTooth,
    title: "General Dentistry",
    description: "Complete oral health care for the entire family with preventive and restorative treatments.",
    procedures: ["Dental Exams & Cleanings", "Fillings & Restorations", "Root Canal Therapy", "Periodontal Care"],
    link: "/services/general-dentistry"
  },
  {
    icon: FaSmile,
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with our comprehensive cosmetic dental procedures.",
    procedures: ["Teeth Whitening", "Porcelain Veneers", "Dental Bonding", "Smile Makeovers"],
    link: "/services/cosmetic-dentistry"
  },
  {
    icon: FaUserMd,
    title: "Specialized Care",
    description: "Advanced dental specialties to address complex oral health needs.",
    procedures: ["Dental Implants", "Orthodontics", "Oral Surgery", "TMJ Treatment"],
    link: "/services/specialized-care"
  }
];

const testimonials = [
  {
    text: "The entire team made me feel comfortable from start to finish. My smile has never looked better!",
    name: "Sarah Johnson",
    initials: "SJ",
    service: "Teeth Whitening"
  },
  {
    text: "Professional, pain-free, and exceptional results. I highly recommend Premier Dental Care.",
    name: "Michael Chen",
    initials: "MC",
    service: "Dental Implants"
  },
  {
    text: "They transformed my dental experience. The technology and care are truly outstanding.",
    name: "Emily Rodriguez",
    initials: "ER",
    service: "General Dentistry"
  }
];

export default Home;