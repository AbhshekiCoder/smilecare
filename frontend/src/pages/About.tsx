// src/pages/About.tsx
import { motion } from 'framer-motion';
import { FaHeartbeat, FaSmile, FaUsers, FaAward, FaCheck, FaTooth } from 'react-icons/fa';
import { IoIosFlask } from 'react-icons/io';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 transform -skew-y-3 -translate-y-16"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                About <span className="text-blue-600">DentalCare</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                For over 15 years, DentalCare has been providing exceptional dental care to our community. 
                We combine cutting-edge technology with compassionate care to create healthy, beautiful smiles.
              </p>
              <div className="mt-8 flex items-center">
                <div className="bg-blue-500 w-16 h-1"></div>
                <span className="ml-4 text-blue-500 font-medium">Trusted by thousands of patients</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FaTooth className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">15+ Years Experience</h3>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 mt-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FaUsers className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">10,000+ Happy Patients</h3>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FaAward className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">25+ Industry Awards</h3>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 mt-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <IoIosFlask className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Advanced Technology</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-800"
            >
              Our Story
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-blue-500 mx-auto mt-4"
            ></motion.div>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12 md:space-y-0">
              {/* Timeline Item 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <img 
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Dental clinic interior"
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white mt-8 md:mt-0 z-10"></div>
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                  <h3 className="text-2xl font-bold text-gray-800">2008: Humble Beginnings</h3>
                  <p className="mt-4 text-gray-600">
                    Dr. Sarah Johnson founded DentalCare with a vision to create a patient-first dental practice. 
                    Starting with just two treatment rooms, we served our first patients in downtown Health City.
                  </p>
                </div>
              </motion.div>

              {/* Timeline Item 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mt-8 md:mt-0">
                  <h3 className="text-2xl font-bold text-gray-800">2012: Expansion</h3>
                  <p className="mt-4 text-gray-600">
                    Due to growing demand, we expanded our practice to include 5 treatment rooms and added 
                    two new dentists to our team. We introduced digital X-rays and CAD/CAM technology.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white mt-8 md:mt-0 z-10"></div>
                <div className="md:w-1/2 md:pl-12">
                  <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Dental equipment"
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                  />
                </div>
              </motion.div>

              {/* Timeline Item 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <img 
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Modern dental facility"
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white mt-8 md:mt-0 z-10"></div>
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                  <h3 className="text-2xl font-bold text-gray-800">2018: New Facility</h3>
                  <p className="mt-4 text-gray-600">
                    We moved to our current state-of-the-art facility featuring 12 treatment rooms, 
                    a dedicated orthodontics center, and the latest in dental technology including 3D imaging.
                  </p>
                </div>
              </motion.div>

              {/* Timeline Item 4 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mt-8 md:mt-0">
                  <h3 className="text-2xl font-bold text-gray-800">2023: Today</h3>
                  <p className="mt-4 text-gray-600">
                    DentalCare now serves over 10,000 patients annually with a team of 8 specialists. 
                    We continue to innovate with laser dentistry, same-day crowns, and teledentistry options.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white mt-8 md:mt-0 z-10"></div>
                <div className="md:w-1/2 md:pl-12">
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Dental team"
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-800"
            >
              Our Core Values
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
              These principles guide everything we do at DentalCare
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border border-blue-100 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeartbeat className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Patient-Centered Care</h3>
              <p className="text-gray-600">
                Every decision we make is with our patients' best interests in mind. 
                We listen carefully and tailor treatments to individual needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border border-blue-100 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <IoIosFlask className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Clinical Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards through continuous education, 
                advanced technology, and evidence-based practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border border-blue-100 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaSmile className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Compassionate Service</h3>
              <p className="text-gray-600">
                We understand dental visits can be stressful. Our team provides 
                gentle, empathetic care in a welcoming environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Advanced Dental Technology
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At DentalCare, we invest in the latest dental technology to ensure precise diagnostics, 
                comfortable treatments, and exceptional results.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <FaCheck className="text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Digital Imaging & 3D X-rays</h3>
                    <p className="mt-2 text-gray-600">
                      Reduced radiation exposure and instant, detailed images for accurate diagnosis.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <FaCheck className="text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Intraoral Cameras</h3>
                    <p className="mt-2 text-gray-600">
                      See what we see with real-time images of your mouth on chairside monitors.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <FaCheck className="text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Laser Dentistry</h3>
                    <p className="mt-2 text-gray-600">
                      Minimally invasive treatments with faster healing and less discomfort.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <FaCheck className="text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">CEREC Same-Day Crowns</h3>
                    <p className="mt-2 text-gray-600">
                      Custom crowns designed, milled, and placed in a single visit.
                    </p>
                  </div>
                </div>
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
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dental technology"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 w-64">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Technology Lab</h3>
                <p className="text-gray-600">
                  Where we design and create custom dental solutions
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-800"
            >
              Meet Our Expert Team
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-blue-500 mx-auto mt-4"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Founder & Chief Dentist",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                experience: "15+ years"
              },
              {
                name: "Dr. Michael Chen",
                role: "Orthodontics Specialist",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                experience: "12+ years"
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Pediatric Dentistry",
                image: "https://images.unsplash.com/photo-1594824947933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                experience: "10+ years"
              },
              {
                name: "Dr. James Wilson",
                role: "Oral Surgery",
                image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                experience: "14+ years"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm mt-2">{member.experience} experience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6"
          >
            Experience the DentalCare Difference
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-10"
          >
            Join thousands of satisfied patients who trust us with their dental health
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-12 rounded-full shadow-lg text-lg inline-block transition duration-300 transform hover:scale-105">
              Book Your Appointment
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-12 rounded-full text-lg transition duration-300">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;