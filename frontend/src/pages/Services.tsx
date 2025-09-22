// src/pages/Services.tsx
import { motion } from 'framer-motion';
import { FaTooth, FaTeeth, FaTeethOpen, FaSmile, FaShieldAlt, FaClock, FaUserMd, FaCheck, FaArrowRight } from 'react-icons/fa';
import { GiToothbrush } from 'react-icons/gi';

const Services = () => {
  const services = [
    {
      icon: <FaTooth className="text-3xl" />,
      title: "General Dentistry",
      description: "Comprehensive oral health care including checkups, cleanings, and preventive treatments.",
      features: ["Dental Exams", "Teeth Cleaning", "Fillings", "Oral Cancer Screening"],
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <FaTeeth className="text-3xl" />,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our aesthetic dental treatments and smile makeovers.",
      features: ["Teeth Whitening", "Veneers", "Dental Bonding", "Smile Makeovers"],
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <FaTeethOpen className="text-3xl" />,
      title: "Orthodontics",
      description: "Straighten your teeth and correct bite issues with modern orthodontic solutions.",
      features: ["Invisalign", "Braces", "Retainers", "Space Maintainers"],
      image: "https://images.unsplash.com/photo-1606811971616-4a8c5c0be413?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <GiToothbrush className="text-3xl" />,
      title: "Pediatric Dentistry",
      description: "Gentle dental care designed specifically for children and teenagers.",
      features: ["Child Exams", "Dental Sealants", "Fluoride Treatment", "Habit Counseling"],
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <GiToothbrush className="text-3xl" />,
      title: "Periodontal Care",
      description: "Specialized treatment for gum disease and maintaining healthy gums.",
      features: ["Scaling & Root Planing", "Gum Grafting", "Pocket Reduction", "Laser Therapy"],
      image: "https://images.unsplash.com/photo-1550590453-8a7ea7d0ac52?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <FaSmile className="text-3xl" />,
      title: "Dental Implants",
      description: "Permanent solution for missing teeth that look and feel natural.",
      features: ["Single Implants", "Implant Bridges", "All-on-4", "Bone Grafting"],
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const specialFeatures = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Safety First",
      description: "Sterilized equipment and strict hygiene protocols"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Flexible Hours",
      description: "Early morning and evening appointments available"
    },
    {
      icon: <FaUserMd className="text-2xl" />,
      title: "Expert Team",
      description: "Specialized dentists for every treatment type"
    },
    {
      icon: <FaCheck className="text-2xl" />,
      title: "Quality Guarantee",
      description: "We stand behind our work with satisfaction guarantee"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our Dental Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            >
              Comprehensive dental care for the whole family. From routine checkups to advanced treatments.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                Book Appointment
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full text-lg transition duration-300">
                Emergency Care
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-800"
            >
              Comprehensive Dental Services
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-500 mx-auto mt-4"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
            >
              We offer a wide range of dental services to meet all your oral health needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-600/20"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 ml-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <FaCheck className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center">
                    Learn More
                    <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold"
            >
              Why Choose Our Services?
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-white mx-auto mt-4"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                24/7 Emergency Dental Care
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Dental emergencies don't wait for business hours. That's why we offer emergency dental services 
                with same-day appointments and after-hours care.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheck className="text-red-600 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Toothache Relief</h3>
                    <p className="text-gray-600">Immediate pain management and treatment</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheck className="text-red-600 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Broken Tooth Repair</h3>
                    <p className="text-gray-600">Quick restoration of damaged teeth</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheck className="text-red-600 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Knocked-Out Tooth</h3>
                    <p className="text-gray-600">Emergency re-implantation services</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  Emergency Hotline: (555) 123-HELP
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1550590453-8a7ea7d0ac52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Emergency dental care"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">Same-Day Appointments</h3>
                <p className="text-blue-100">Available for urgent cases</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-800"
            >
              Insurance & Payment Options
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-500 mx-auto mt-4"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 text-center shadow-lg"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Insurance Accepted</h3>
              <p className="text-gray-600">
                We work with most major insurance providers and handle all the paperwork for you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 text-center shadow-lg"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheck className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Flexible Payment Plans</h3>
              <p className="text-gray-600">
                Interest-free payment options available for extensive treatments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 text-center shadow-lg"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSmile className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Price Transparency</h3>
              <p className="text-gray-600">
                No hidden fees. We provide detailed cost estimates before treatment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Transform Your Smile?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto mb-10"
          >
            Schedule your consultation today and take the first step towards optimal oral health.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-12 rounded-full shadow-lg text-lg transition duration-300 transform hover:scale-105">
              Book Your Appointment
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-12 rounded-full text-lg transition duration-300">
              Call Us Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;