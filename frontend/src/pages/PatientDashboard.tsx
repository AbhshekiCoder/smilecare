import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, FaClock, FaTooth, FaUserMd, FaTrash, FaEdit, 
  FaFileMedical, FaPills, FaProcedures, FaChartLine,  FaBrush
} from 'react-icons/fa';
import { TbDental } from 'react-icons/tb';

// Mock appointment data
const mockAppointments = [
  {
    id: 1,
    date: '2023-10-15',
    time: '10:00',
    service: 'General Checkup',
    dentist: 'Dr. Sarah Johnson',
    status: 'Confirmed',
    duration: '30 mins'
  },
  {
    id: 2,
    date: '2023-10-22',
    time: '14:30',
    service: 'Teeth Cleaning',
    dentist: 'Dr. Michael Chen',
    status: 'Pending',
    duration: '45 mins'
  },
  {
    id: 3,
    date: '2023-11-05',
    time: '11:15',
    service: 'Dental Implant',
    dentist: 'Dr. Emily Rodriguez',
    status: 'Completed',
    duration: '90 mins'
  }
];

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState(mockAppointments);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [healthScore, setHealthScore] = useState(85);
  const [nextCheckup, setNextCheckup] = useState('2023-12-15');

  useEffect(() => {
    // Simulate health score animation
    const timer = setTimeout(() => {
      setHealthScore(92);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

useEffect(() => {
  const upcomingConfirmed = appointments
    .filter(appt => appt.status === 'Confirmed')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  if (upcomingConfirmed.length > 0) {
    setNextCheckup(upcomingConfirmed[0].date);
  } else {
    setNextCheckup('Not Scheduled');
  }
}, [appointments]);

  const handleCancel = (id: number) => {
    setAppointments(appointments.filter(appt => appt.id !== id));
  };

  const handleReschedule = (id: number) => {
    // In a real app, this would open a modal/form
    alert(`Reschedule appointment #${id}`);
  };

  // Filter appointments based on status
  const filteredAppointments = appointments.filter(appt => {
    if (activeTab === 'upcoming') {
      return appt.status === 'Confirmed' || appt.status === 'Pending';
    } else if (activeTab === 'past') {
      return appt.status === 'Completed';
    }
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Patient Dashboard
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Manage your appointments and track your dental health journey
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex items-center"
          >
            <div className="bg-blue-100 p-4 rounded-full mr-4">
              <TbDental className="text-blue-600 text-2xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Next Checkup</p>
              <p className="text-xl font-bold text-gray-800">{nextCheckup}</p>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex items-center"
          >
            <div className="bg-green-100 p-4 rounded-full mr-4">
              <FaBrush className="text-green-600 text-2xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Oral Health Score</p>
              <div className="flex items-center">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${healthScore}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-2 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mr-2"
                  style={{ width: `${healthScore}%`, maxWidth: '150px' }}
                />
                <span className="text-xl font-bold text-gray-800">{healthScore}%</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex items-center"
          >
            <div className="bg-purple-100 p-4 rounded-full mr-4">
              <FaChartLine className="text-purple-600 text-2xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Days Since Last Visit</p>
              <p className="text-xl font-bold text-gray-800">42 days</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Appointments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
        >
          <div className="p-6 border-b border-gray-200 flex flex-wrap justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">My Appointments</h2>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('upcoming')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'upcoming'
                    ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Upcoming
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('past')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'past'
                    ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Past
              </motion.button>
            </div>
          </div>

          <div className="p-6">
            {filteredAppointments.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  {activeTab === 'upcoming'
                    ? 'No upcoming appointments'
                    : 'No past appointments'}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg"
                >
                  Book New Appointment
                </motion.button>
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {filteredAppointments.map(appointment => (
                  <motion.div
                    key={appointment.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                          <FaCalendarAlt className="text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Date</p>
                          <p className="font-medium">{appointment.date}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-purple-100 p-3 rounded-lg mr-4">
                          <FaClock className="text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Time</p>
                          <p className="font-medium">{appointment.time}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-teal-100 p-3 rounded-lg mr-4">
                          <FaTooth className="text-teal-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Service</p>
                          <p className="font-medium">{appointment.service}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-amber-100 p-3 rounded-lg mr-4">
                          <FaUserMd className="text-amber-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Dentist</p>
                          <p className="font-medium">{appointment.dentist}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        appointment.status === 'Confirmed'
                          ? 'bg-green-100 text-green-800'
                          : appointment.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {appointment.status}
                      </span>
                      
                      {appointment.status !== 'Completed' && (
                        <div className="flex space-x-3">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleReschedule(appointment.id)}
                            className="flex items-center text-blue-600 hover:text-blue-800"
                          >
                            <FaEdit className="mr-1" /> Reschedule
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleCancel(appointment.id)}
                            className="flex items-center text-red-600 hover:text-red-800"
                          >
                            <FaTrash className="mr-1" /> Cancel
                          </motion.button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Dental Records Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
        >
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">My Dental Records</h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaFileMedical className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">Treatment History</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between py-2 border-b border-gray-100">
                    <span>Fillings</span>
                    <span className="font-medium">2</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-100">
                    <span>Cleanings</span>
                    <span className="font-medium">5</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span>Root Canals</span>
                    <span className="font-medium">1</span>
                  </li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium py-2 px-4 rounded-lg"
                >
                  View Full History
                </motion.button>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <FaPills className="text-green-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">Prescriptions</h3>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">Current medications:</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span>Amoxicillin</span>
                      <span className="font-medium">500mg</span>
                    </li>
                    <li className="flex justify-between py-2">
                      <span>Ibuprofen</span>
                      <span className="font-medium">400mg</span>
                    </li>
                  </ul>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 w-full bg-green-50 hover:bg-green-100 text-green-600 font-medium py-2 px-4 rounded-lg"
                >
                  View All Prescriptions
                </motion.button>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <FaProcedures className="text-purple-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">Upcoming Procedures</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">Wisdom Tooth Extraction</p>
                    <p className="text-sm text-gray-600">Scheduled for Nov 15, 2023</p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '65%' }}
                        transition={{ duration: 1 }}
                        className="bg-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </li>
                  <li>
                    <p className="font-medium">Dental Crown Placement</p>
                    <p className="text-sm text-gray-600">Scheduled for Dec 5, 2023</p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '30%' }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="bg-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-purple-50 hover:bg-purple-100 text-purple-600 font-medium py-2 px-4 rounded-lg"
                >
                  View Treatment Plan
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Dental Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl shadow-xl p-8 text-white"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Dental Care Tips</h2>
              <p className="max-w-xl">Get personalized recommendations for improving your oral health routine</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-0 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg"
            >
              View Recommendations
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PatientDashboard;