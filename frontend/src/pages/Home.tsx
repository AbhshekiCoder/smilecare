// src/pages/Home.tsx
import { motion } from 'framer-motion';
import { 
  FaTooth, 
  FaCalendarCheck, 
  FaUserMd, 
  FaTeeth,
  FaSmile,
  FaTeethOpen,
  FaClinicMedical
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-20 relative">
        {/* Floating tooth elements */}
        <motion.div 
          className="absolute top-20 left-10 opacity-10"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaTeethOpen size={120} className="text-blue-400" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 right-20 opacity-15"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <FaTeeth size={150} className="text-cyan-400" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Exceptional <span className="text-cyan-600">Dental Care</span> for Your Whole Family
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-lg text-gray-600 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                We provide comprehensive dental services using the latest technology in a comfortable environment. 
                Your smile is our priority.
              </motion.p>
              
              <motion.div 
                className="mt-10 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link 
                  to="/book-appointment" 
                  className="relative overflow-hidden group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
                  >
                    <span className="relative z-10">Book Appointment</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </Link>
                
                <Link 
                  to="/services" 
                  className="relative overflow-hidden group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-lg shadow-lg border border-blue-200 group-hover:border-cyan-300 transition-all duration-300"
                  >
                    <span className="relative z-10">Our Services</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Animated circles */}
                <motion.div 
                  className="bg-blue-400 rounded-full w-80 h-80 absolute -top-6 -left-6 opacity-10"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.div>
                
                <motion.div 
                  className="bg-cyan-300 rounded-full w-80 h-80 absolute -bottom-6 -right-6 opacity-10"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                ></motion.div>
                
                {/* Main tooth image */}
                <motion.div
                  className="relative bg-white rounded-2xl shadow-xl overflow-hidden w-80 h-96 border-4 border-white"
                  whileHover={{ y: -10 }}
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
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
                      <FaTeeth size={180} className="text-cyan-400 opacity-80" />
                    </motion.div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-500 to-transparent h-32 flex items-end p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="text-white font-bold text-lg"
                    >
                      Smile With Confidence
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white relative">
        {/* Floating bubbles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100 opacity-30"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-800"
            >
              Our <span className="text-cyan-600">Dental Services</span>
            </motion.h2>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-4 rounded-full"
            ></motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-gray-600 max-w-2xl mx-auto"
            >
              Comprehensive dental care using the latest technology and techniques
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-cyan-100 transition-all duration-300 relative overflow-hidden"
              >
                {/* Floating background element */}
                <div className="absolute -bottom-8 -right-8 opacity-10">
                  <service.icon size={80} className="text-cyan-300" />
                </div>
                
                <motion.div
                  className="text-cyan-500 mb-4 inline-block"
                  whileHover={{ 
                    y: [0, -5, 0, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <div className="bg-cyan-50 p-4 rounded-full">
                    <service.icon size={28} />
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 z-10 relative">{service.description}</p>
                
                <motion.div 
                  className="mt-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="h-0.5 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 text-white relative overflow-hidden">
        {/* Floating bubbles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 100 + 30}px`,
              height: `${Math.random() * 100 + 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        
        {/* Floating tooth icon */}
        <motion.div 
          className="absolute top-1/4 left-1/4 opacity-5"
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <FaTeeth size={300} />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready for Your <span className="text-cyan-200">Perfect Smile</span>?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-10"
          >
            Schedule your appointment today and experience exceptional dental care
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            className="inline-block"
          >
            <Link 
              to="/book-appointment" 
              className="bg-white text-cyan-600 hover:text-blue-700 font-bold py-4 px-12 rounded-full shadow-lg text-lg inline-block transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Pulse effect */}
              <motion.span
                className="absolute inset-0 rounded-full bg-cyan-100 opacity-0"
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex space-x-6">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10, rotate: 10 }}
                  className="bg-white bg-opacity-20 p-4 rounded-full backdrop-blur-sm"
                >
                  <FaSmile size={24} className="text-cyan-200" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    icon: FaTooth,
    title: "General Dentistry",
    description: "Comprehensive dental exams, cleanings, fillings, and preventive care."
  },
  {
    icon: FaClinicMedical,
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, veneers, and smile makeovers to enhance your smile."
  },
  {
    icon: FaUserMd,
    title: "Orthodontics",
    description: "Braces and aligners for perfectly aligned teeth and improved bite."
  },
  {
    icon: FaCalendarCheck,
    title: "Emergency Care",
    description: "Immediate attention for dental emergencies and urgent care needs."
  }
];

export default Home;