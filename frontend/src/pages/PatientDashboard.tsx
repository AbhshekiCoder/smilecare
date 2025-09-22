import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendarAlt, FaClock, FaTooth, FaUserMd, FaTrash, FaEdit, 
  FaFileMedical, FaPills, FaProcedures, FaChartLine, FaBrush,
   FaSmile, FaTeeth, FaHeart, FaBell, FaDownload,
   FaShieldAlt, FaStar, FaCrown, FaTeethOpen
} from 'react-icons/fa';
import { TbDental, TbCalendarStats, TbReportMedical } from 'react-icons/tb';
import { GiToothbrush } from 'react-icons/gi';

// Mock data
const mockAppointments = [
  {
    id: 1,
    date: '2024-03-15',
    time: '10:00',
    service: 'General Checkup',
    dentist: 'Dr. Sarah Johnson',
    status: 'Confirmed',
    duration: '30 mins',
    type: 'routine',
    priority: 'normal'
  },
  {
    id: 2,
    date: '2024-03-22',
    time: '14:30',
    service: 'Teeth Cleaning',
    dentist: 'Dr. Michael Chen',
    status: 'Pending',
    duration: '45 mins',
    type: 'hygiene',
    priority: 'normal'
  },
  {
    id: 3,
    date: '2024-02-05',
    time: '11:15',
    service: 'Dental Implant',
    dentist: 'Dr. Emily Rodriguez',
    status: 'Completed',
    duration: '90 mins',
    type: 'surgery',
    priority: 'high'
  },
  {
    id: 4,
    date: '2024-04-10',
    time: '09:00',
    service: 'Orthodontic Consultation',
    dentist: 'Dr. James Wilson',
    status: 'Confirmed',
    duration: '60 mins',
    type: 'consultation',
    priority: 'normal'
  }
];

const dentalTips = [
  {
    id: 1,
    title: "Brushing Technique",
    description: "Use circular motions and don't forget your tongue",
    icon: GiToothbrush,
    category: "Hygiene"
  },
  {
    id: 2,
    title: "Flossing Daily",
    description: "Remove plaque from between teeth where brush can't reach",
    icon: FaTooth,
    category: "Hygiene"
  },
  {
    id: 3,
    title: "Regular Checkups",
    description: "Visit your dentist every 6 months for optimal health",
    icon: FaCalendarAlt,
    category: "Prevention"
  }
];

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState(mockAppointments);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [healthScore, setHealthScore] = useState(78);
  const [nextCheckup, setNextCheckup] = useState('');
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Your appointment is confirmed for March 15', type: 'success', read: false },
    { id: 2, message: 'Time for your 6-month checkup!', type: 'reminder', read: false },
    { id: 3, message: 'New dental tips available', type: 'info', read: true }
  ]);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);

  useEffect(() => {
    // Simulate health score improvement
    const timer = setTimeout(() => {
      setHealthScore(85);
    }, 1500);
    
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
    // Add notification
    setNotifications(prev => [{
      id: Date.now(),
      message: 'Appointment cancelled successfully',
      type: 'info',
      read: false
    }, ...prev]);
  };

  const handleReschedule = (id: number) => {
    // In a real app, this would open a modal/form
    const appointment = appointments.find(appt => appt.id === id);
    alert(`Reschedule appointment with ${appointment?.dentist}`);
  };

  const markNotificationAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const unreadNotifications = notifications.filter(notif => !notif.read).length;

  const filteredAppointments = appointments.filter(appt => {
    if (activeTab === 'upcoming') {
      return appt.status === 'Confirmed' || appt.status === 'Pending';
    } else if (activeTab === 'past') {
      return appt.status === 'Completed';
    }
    return true;
  });

  const getServiceIcon = (serviceType: string) => {
    switch (serviceType) {
      case 'routine': return FaTooth;
      case 'hygiene': return GiToothbrush;
      case 'surgery': return FaProcedures;
      case 'consultation': return FaUserMd;
      default: return FaTooth;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'red';
      case 'medium': return 'orange';
      default: return 'green';
    }
  };

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
    <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Notifications */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Welcome Back, <span className="text-blue-600">Alex</span>!
            </h1>
            <p className="mt-2 text-gray-600">Here's your dental health overview</p>
          </div>
          
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowNotificationPanel(!showNotificationPanel)}
              className="relative p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <FaBell className="text-xl text-gray-600" />
              {unreadNotifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {unreadNotifications}
                </span>
              )}
            </motion.button>

            <AnimatePresence>
              {showNotificationPanel && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl z-50 border border-gray-200"
                >
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map(notification => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                          !notification.read ? 'bg-blue-50' : ''
                        }`}
                        onClick={() => markNotificationAsRead(notification.id)}
                      >
                        <div className="flex items-start">
                          <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                            notification.type === 'success' ? 'bg-green-500' :
                            notification.type === 'reminder' ? 'bg-yellow-500' : 'bg-blue-500'
                          }`} />
                          <p className="text-sm text-gray-700">{notification.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {/* Health Score Card */}
          <motion.div 
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12" />
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-full mr-3">
                  <FaHeart className="text-xl" />
                </div>
                <span className="text-sm font-medium">Health Score</span>
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="text-3xl font-bold mb-2"
              >
                {healthScore}%
              </motion.div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${healthScore}%` }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="bg-white h-2 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Next Appointment Card */}
          <motion.div 
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-lg p-6 text-white"
          >
            <div className="flex items-center mb-4">
              <div className="bg-white/20 p-3 rounded-full mr-3">
                <TbDental className="text-xl" />
              </div>
              <span className="text-sm font-medium">Next Checkup</span>
            </div>
            <div className="text-2xl font-bold mb-1">{nextCheckup}</div>
            <p className="text-blue-100 text-sm">Dr. Sarah Johnson</p>
          </motion.div>

          {/* Days Since Last Visit */}
          <motion.div 
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg p-6 text-white"
          >
            <div className="flex items-center mb-4">
              <div className="bg-white/20 p-3 rounded-full mr-3">
                <TbCalendarStats className="text-xl" />
              </div>
              <span className="text-sm font-medium">Last Visit</span>
            </div>
            <div className="text-2xl font-bold">42 days ago</div>
            <p className="text-purple-100 text-sm">Regular checkup</p>
          </motion.div>

          {/* Dental Goals */}
          <motion.div 
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-lg p-6 text-white"
          >
            <div className="flex items-center mb-4">
              <div className="bg-white/20 p-3 rounded-full mr-3">
                <FaStar className="text-xl" />
              </div>
              <span className="text-sm font-medium">Goals Achieved</span>
            </div>
            <div className="text-2xl font-bold">3/5</div>
            <p className="text-amber-100 text-sm">Keep going!</p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Appointments */}
          <div className="lg:col-span-2">
            {/* Appointments Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8"
            >
              <div className="p-6 border-b border-gray-200 flex flex-wrap justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">My Appointments</h2>
                  <p className="text-gray-600 text-sm">Manage your upcoming and past visits</p>
                </div>
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
                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TbDental className="text-2xl text-gray-400" />
                    </div>
                    <p className="text-gray-500 text-lg mb-4">
                      {activeTab === 'upcoming' ? 'No upcoming appointments' : 'No past appointments'}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg"
                    >
                      Book New Appointment
                    </motion.button>
                  </div>
                ) : (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-4"
                  >
                    {filteredAppointments.map(appointment => {
                      const ServiceIcon = getServiceIcon(appointment.type);
                      return (
                        <motion.div
                          key={appointment.id}
                          variants={itemVariants}
                          whileHover={{ y: -2 }}
                          className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center">
                              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                <ServiceIcon className="text-blue-600 text-lg" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-800">{appointment.service}</h3>
                                <p className="text-gray-600 text-sm">{appointment.dentist}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                                appointment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {appointment.status}
                              </span>
                              {appointment.priority === 'high' && (
                                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                                  Urgent
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div>
                              <p className="text-xs text-gray-500">Date</p>
                              <p className="font-medium">{appointment.date}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Time</p>
                              <p className="font-medium">{appointment.time}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Duration</p>
                              <p className="font-medium">{appointment.duration}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Type</p>
                              <p className="font-medium capitalize">{appointment.type}</p>
                            </div>
                          </div>

                          {appointment.status !== 'Completed' && (
                            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleReschedule(appointment.id)}
                                className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                              >
                                <FaEdit className="mr-2" /> Reschedule
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleCancel(appointment.id)}
                                className="flex items-center text-red-600 hover:text-red-800 font-medium text-sm"
                              >
                                <FaTrash className="mr-2" /> Cancel
                              </motion.button>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Dental Records Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">My Dental Records</h2>
                  <p className="text-gray-600 text-sm">Treatment history and medical records</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  <FaDownload className="mr-2" /> Export Records
                </motion.button>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <TbReportMedical className="text-blue-600 text-xl" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-800">Treatment History</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span>Routine Checkups</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">12</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span>Fillings</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">2</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span>Root Canals</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm font-medium">1</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 p-3 rounded-lg mr-4">
                        <FaPills className="text-green-600 text-xl" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-800">Current Medications</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">Amoxicillin</span>
                          <span className="text-green-600 text-sm">Active</span>
                        </div>
                        <p className="text-gray-600 text-sm">500mg · 3 times daily</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">Ibuprofen</span>
                          <span className="text-blue-600 text-sm">As needed</span>
                        </div>
                        <p className="text-gray-600 text-sm">400mg · Pain relief</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h3 className="font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ x: 5 }}
                  className="w-full flex items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700 font-medium transition-all"
                >
                  <FaCalendarAlt className="mr-3" /> Book Appointment
                </motion.button>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="w-full flex items-center p-3 bg-green-50 hover:bg-green-100 rounded-lg text-green-700 font-medium transition-all"
                >
                  <FaFileMedical className="mr-3" /> View Records
                </motion.button>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="w-full flex items-center p-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-purple-700 font-medium transition-all"
                >
                  <FaPills className="mr-3" /> Request Prescription
                </motion.button>
              </div>
            </motion.div>

            {/* Dental Tips */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl shadow-xl p-6 text-white"
            >
              <h3 className="font-semibold mb-4 flex items-center">
                <FaShieldAlt className="mr-2" /> Dental Care Tips
              </h3>
              <div className="space-y-4">
                {dentalTips.map(tip => {
                  const TipIcon = tip.icon;
                  return (
                    <motion.div
                      key={tip.id}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/10 rounded-lg p-3 backdrop-blur-sm"
                    >
                      <div className="flex items-center mb-2">
                        <TipIcon className="mr-2 text-teal-200" />
                        <span className="font-medium">{tip.title}</span>
                      </div>
                      <p className="text-teal-100 text-sm">{tip.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-red-50 border border-red-200 rounded-2xl p-6"
            >
              <div className="flex items-center mb-3">
                <div className="bg-red-100 p-2 rounded-lg mr-3">
                  <FaTooth className="text-red-600" />
                </div>
                <h3 className="font-semibold text-red-800">Emergency Contact</h3>
              </div>
              <p className="text-red-700 text-sm mb-4">Available 24/7 for dental emergencies</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-all"
              >
                Call Emergency Line
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;