// src/pages/Dentists.tsx
import { motion } from 'framer-motion';
import { FaUserMd, FaTooth, FaStethoscope, FaLaptopMedical, FaStar, FaGraduationCap, FaAward, FaClock } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';

const Dentists = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Meet Our Dental Experts
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            >
              Our team of highly skilled dental professionals is dedicated to providing you with the best care possible.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                Book Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition duration-300">
                Emergency Contact
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dentists Grid */}
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
              Our Specialist Team
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
              Each member of our team brings unique expertise and a commitment to exceptional patient care.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dentists.map((dentist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={dentist.image}
                    alt={dentist.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {dentist.experience}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{dentist.name}</h3>
                      <p className="text-blue-600 font-medium mt-1">{dentist.specialty}</p>
                      <p className="text-gray-500 text-sm mt-1">{dentist.qualification}</p>
                    </div>
                    <div className="bg-blue-100 rounded-full p-3 text-blue-600">
                      <dentist.icon className="text-2xl" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">{dentist.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dentist.specializations.map((spec, specIndex) => (
                        <span key={specIndex} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 flex items-center">
                        <IoMdCall className="mr-2" />
                        Consult
                      </button>
                      <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium transition duration-300">
                        Profile
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Available</p>
                      <p className="text-green-600 font-semibold">Today</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaUserMd className="text-3xl" />
              </div>
              <h3 className="text-3xl font-bold mb-2">8+</h3>
              <p className="text-blue-100">Specialist Dentists</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-3xl" />
              </div>
              <h3 className="text-3xl font-bold mb-2">15+</h3>
              <p className="text-blue-100">Years Experience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-3xl" />
              </div>
              <h3 className="text-3xl font-bold mb-2">25+</h3>
              <p className="text-blue-100">Awards Won</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="text-3xl" />
              </div>
              <h3 className="text-3xl font-bold mb-2">5000+</h3>
              <p className="text-blue-100">Happy Patients</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-6"
          >
            Ready to Schedule Your Appointment?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Our team is here to provide you with personalized care and answer any questions you may have.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
              Book Your Visit
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full text-lg transition duration-300">
              Call: (555) 123-4567
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const dentists = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "General Dentistry",
    qualification: "DDS, PhD in Dental Surgery",
    experience: "15+ Years",
    bio: "With over 15 years of experience, Dr. Johnson specializes in preventive dentistry and patient education. She believes in building long-term relationships with patients.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    icon: FaUserMd,
    specializations: ["Preventive Care", "Restorative Dentistry", "Oral Surgery", "Patient Education"]
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Orthodontics Specialist",
    qualification: "DMD, Orthodontic Specialist",
    experience: "12+ Years",
    bio: "Dr. Chen is a certified orthodontist with expertise in modern alignment techniques and smile design. He stays updated with the latest orthodontic advancements.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    icon: FaStethoscope,
    specializations: ["Invisalign", "Braces", "Smile Design", "Jaw Alignment"]
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Cosmetic Dentistry",
    qualification: "DDS, Cosmetic Dentistry",
    experience: "10+ Years",
    bio: "Award-winning cosmetic dentist with a passion for creating beautiful, natural-looking smiles. Dr. Rodriguez combines art and science in her treatments.",
    image: "https://images.unsplash.com/photo-1594824947933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    icon: FaLaptopMedical,
    specializations: ["Veneers", "Teeth Whitening", "Smile Makeovers", "Digital Smile Design"]
  },
  {
    name: "Dr. James Wilson",
    specialty: "Oral Surgery",
    qualification: "DMD, Oral Surgeon",
    experience: "14+ Years",
    bio: "Dr. Wilson specializes in complex oral surgeries with a gentle approach. He ensures patient comfort throughout surgical procedures.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    icon: FaTooth,
    specializations: ["Dental Implants", "Wisdom Teeth", "Bone Grafting", "Jaw Surgery"]
  },
  {
    name: "Dr. Lisa Park",
    specialty: "Pediatric Dentistry",
    qualification: "DDS, Pediatric Specialist",
    experience: "8+ Years",
    bio: "Dr. Park creates a fun and comfortable environment for children. She specializes in making dental visits enjoyable for young patients.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    icon: FaUserMd,
    specializations: ["Child Dentistry", "Preventive Care", "Behavior Management", "Special Needs"]
  },
  {
    name: "Dr. Robert Brown",
    specialty: "Periodontics",
    qualification: "DMD, Periodontal Specialist",
    experience: "11+ Years",
    bio: "Dr. Brown focuses on gum health and periodontal treatments. He uses advanced techniques to treat gum disease effectively.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    icon: FaStethoscope,
    specializations: ["Gum Treatment", "Laser Therapy", "Gum Grafting", "Periodontal Surgery"]
  }
];

export default Dentists;