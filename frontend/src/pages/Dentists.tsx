// src/pages/Dentists.tsx
import { motion } from 'framer-motion';
import { FaUserMd, FaTooth, FaStethoscope, FaLaptopMedical } from 'react-icons/fa';

const Dentists = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800"
          >
            Meet Our Dental Experts
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
            Our team of highly skilled dental professionals is dedicated to providing you with the best care possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dentists.map((dentist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-gray-200 border-2 border-dashed w-full h-64" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{dentist.name}</h3>
                <p className="text-blue-600 font-medium mt-1">{dentist.specialty}</p>
                <p className="mt-4 text-gray-600">{dentist.bio}</p>
                
                <div className="mt-6 flex items-center">
                  <div className="flex -space-x-2">
                    {dentist.specialties.map((SpecialtyIcon, iconIndex) => (
                      <div 
                        key={iconIndex} 
                        className="bg-blue-100 rounded-full p-2 text-blue-600"
                      >
                        <SpecialtyIcon size={18} />
                      </div>
                    ))}
                  </div>
                  <button className="ml-auto bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-lg text-sm font-medium transition">
                    View Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const dentists = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "General Dentistry",
    bio: "With over 15 years of experience, Dr. Johnson specializes in preventive dentistry and patient education.",
    specialties: [FaUserMd, FaTooth]
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Orthodontics",
    bio: "Dr. Chen is a certified orthodontist with expertise in modern alignment techniques and smile design.",
    specialties: [FaStethoscope, FaTooth]
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Cosmetic Dentistry",
    bio: "Award-winning cosmetic dentist with a passion for creating beautiful, natural-looking smiles.",
    specialties: [FaLaptopMedical, FaTooth]
  }
];

export default Dentists;