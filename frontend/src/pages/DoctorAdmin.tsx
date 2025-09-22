import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { 
  FaCalendarAlt, FaClock, FaTooth, FaCheck, FaTimes, 
  FaSearch, FaFilter, FaUserMd, FaChartPie, FaBell, FaCog,
  FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFileMedical,
  FaMoneyBillWave, FaStar, FaProcedures, FaTeeth, 
  FaCrown, FaTeethOpen, FaDownload, FaEdit, FaTrash
} from 'react-icons/fa';
import { GiToothbrush } from 'react-icons/gi';
import { TbDental, TbCalendarStats, TbReportMedical } from 'react-icons/tb';

// Animated Counter Component
const AnimatedCounter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    const animation = animate(count, value, { duration: 1.5 });
    return () => animation.stop();
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
};

// Mock data
const mockAppointments = [
  {
    id: 1,
    patient: 'John Doe',
    date: '2024-03-15',
    time: '10:00',
    service: 'General Checkup',
    status: 'Confirmed',
    contact: 'john@example.com',
    phone: '(555) 123-4567',
    duration: '30 mins',
    notes: 'Routine checkup, no issues reported. Patient maintains good oral hygiene.',
    priority: 'normal',
    type: 'checkup',
    age: 45,
    lastVisit: '2024-01-15'
  },
  {
    id: 2,
    patient: 'Jane Smith',
    date: '2024-03-15',
    time: '11:00',
    service: 'Teeth Cleaning',
    status: 'Pending',
    contact: 'jane@example.com',
    phone: '(555) 123-4568',
    duration: '45 mins',
    notes: 'First visit, needs deep cleaning. Some plaque buildup detected.',
    priority: 'normal',
    type: 'cleaning',
    age: 32,
    lastVisit: 'First visit'
  },
  {
    id: 3,
    patient: 'Robert Johnson',
    date: '2024-03-16',
    time: '14:30',
    service: 'Root Canal',
    status: 'Confirmed',
    contact: 'robert@example.com',
    phone: '(555) 123-4569',
    duration: '90 mins',
    notes: 'Follow-up after initial treatment. Tooth #3 requires root canal therapy.',
    priority: 'high',
    type: 'surgery',
    age: 58,
    lastVisit: '2024-02-20'
  },
  {
    id: 4,
    patient: 'Emily Davis',
    date: '2024-03-16',
    time: '16:00',
    service: 'Dental Implant',
    status: 'Pending',
    contact: 'emily@example.com',
    phone: '(555) 123-4570',
    duration: '120 mins',
    notes: 'New implant placement. Patient has good bone density for procedure.',
    priority: 'high',
    type: 'surgery',
    age: 41,
    lastVisit: '2024-01-30'
  },
  {
    id: 5,
    patient: 'Michael Brown',
    date: '2024-03-17',
    time: '09:00',
    service: 'Braces Adjustment',
    status: 'Completed',
    contact: 'michael@example.com',
    phone: '(555) 123-4571',
    duration: '30 mins',
    notes: 'Monthly adjustment. Progress is good, teeth moving as expected.',
    priority: 'normal',
    type: 'ortho',
    age: 22,
    lastVisit: '2024-02-17'
  }
];

const todaySchedule = [
  { time: '09:00', patient: 'Sarah Wilson', service: 'Checkup', duration: '30min', status: 'completed' },
  { time: '10:30', patient: 'Mike Johnson', service: 'Filling', duration: '45min', status: 'in-progress' },
  { time: '11:30', patient: 'Lisa Brown', service: 'Cleaning', duration: '60min', status: 'upcoming' },
  { time: '14:00', patient: 'David Lee', service: 'Consultation', duration: '30min', status: 'upcoming' },
  { time: '15:00', patient: 'Emma Davis', service: 'Crown', duration: '90min', status: 'upcoming' }
];

const DoctorAdmin = () => {
  const [appointments, setAppointments] = useState(mockAppointments);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [activeAppointment, setActiveAppointment] = useState<number | null>(null);
  const [stats, setStats] = useState({
    confirmed: 0,
    pending: 0,
    completed: 0,
    cancelled: 0,
    revenue: 0
  });
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New appointment request from Lisa Brown', type: 'info', time: '10:30 AM', read: false },
    { id: 2, message: 'Patient John Doe confirmed his appointment', type: 'success', time: '09:15 AM', read: false },
    { id: 3, message: 'Emergency slot available at 2:00 PM', type: 'warning', time: '08:45 AM', read: true }
  ]);

  useEffect(() => {
    // Simulate stats loading
    setTimeout(() => {
      setStats({
        confirmed: 14,
        pending: 5,
        completed: 22,
        cancelled: 2,
        revenue: 12450
      });
    }, 1000);
  }, []);

  const handleStatusChange = (id: number, status: string) => {
    setAppointments(
      appointments.map(appt => 
        appt.id === id ? { ...appt, status } : appt
      )
    );
  };

  const toggleAppointmentDetails = (id: number) => {
    setActiveAppointment(activeAppointment === id ? null : id);
  };

  const markNotificationAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const unreadNotifications = notifications.filter(notif => !notif.read).length;

  // Filter appointments
  const filteredAppointments = appointments.filter(appt => {
    const matchesSearch = 
      appt.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appt.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appt.contact.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = 
      statusFilter === 'all' || appt.status === statusFilter;
    
    const matchesDate = 
      !dateFilter || appt.date === dateFilter;
    
    const matchesPriority = 
      priorityFilter === 'all' || appt.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesDate && matchesPriority;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  const getServiceIcon = (type: string) => {
    switch(type) {
      case 'checkup': return FaTooth;
      case 'cleaning': return GiToothbrush;
      case 'surgery': return FaProcedures;
      case 'ortho': return FaTeeth;
      default: return FaTooth;
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
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 min-h-screen">
      {/* Enhanced Top Navigation */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-xl mr-3">
                <TbDental className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">DentalCare Admin</h1>
                <p className="text-sm text-gray-600">Welcome back, Dr. Johnson</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowNotificationPanel(!showNotificationPanel)}
                  className="relative p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <FaBell className="text-gray-600 text-lg" />
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
                            <div className="flex justify-between items-start mb-1">
                              <span className={`text-xs font-medium ${
                                notification.type === 'success' ? 'text-green-600' :
                                notification.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                              }`}>
                                {notification.type.toUpperCase()}
                              </span>
                              <span className="text-xs text-gray-500">{notification.time}</span>
                            </div>
                            <p className="text-sm text-gray-700">{notification.message}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <FaCog className="text-gray-600 text-lg" />
              </motion.button>

              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Dr. Johnson"
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-200"
                />
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-800">Dr. Sarah Johnson</p>
                  <p className="text-xs text-gray-600">Dental Surgeon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Doctor <span className="text-blue-600">Admin Dashboard</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage appointments, patient records, and clinic operations efficiently
          </p>
        </motion.div>

        {/* Enhanced Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8"
        >
          {[
            { 
              label: 'Confirmed', 
              value: stats.confirmed, 
              color: 'green', 
              icon: FaCheck,
              bg: 'from-green-500 to-emerald-600'
            },
            { 
              label: 'Pending', 
              value: stats.pending, 
              color: 'yellow', 
              icon: FaClock,
              bg: 'from-yellow-500 to-amber-600'
            },
            { 
              label: 'Completed', 
              value: stats.completed, 
              color: 'blue', 
              icon: FaCalendarAlt,
              bg: 'from-blue-500 to-cyan-600'
            },
            { 
              label: 'Cancelled', 
              value: stats.cancelled, 
              color: 'red', 
              icon: FaTimes,
              bg: 'from-red-500 to-pink-600'
            },
            { 
              label: 'Revenue', 
              value: stats.revenue, 
              color: 'purple', 
              icon: FaMoneyBillWave,
              bg: 'from-purple-500 to-indigo-600',
              prefix: '$'
            }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`bg-gradient-to-br ${stat.bg} rounded-2xl shadow-lg p-6 text-white relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm opacity-90">{stat.label}</p>
                    <p className="text-2xl font-bold">
                      {stat.prefix}<AnimatedCounter value={stat.value} />
                    </p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-xl">
                    <stat.icon className="text-xl" />
                  </div>
                </div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  className="h-1 bg-white/30 rounded-full overflow-hidden"
                >
                  <div className="h-full bg-white/50 rounded-full" style={{ width: '70%' }} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Content - Appointment Management */}
          <div className="xl:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8"
            >
              <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Appointment Management</h2>
                  <p className="text-gray-600 text-sm">Manage and track all patient appointments</p>
                </div>
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center"
                  >
                    <FaCalendarAlt className="mr-2" /> New Appointment
                  </motion.button>
                </div>
              </div>
              
              <div className="p-6">
                {/* Enhanced Filters */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaSearch className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search patients..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaFilter className="text-gray-400" />
                    </div>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    >
                      <option value="all">All Statuses</option>
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                  
                  <div>
                    <input
                      type="date"
                      value={dateFilter}
                      onChange={(e) => setDateFilter(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Priorities</option>
                    <option value="high">High Priority</option>
                    <option value="normal">Normal</option>
                  </select>
                </div>
                
                {/* Enhanced Appointments List */}
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
                        className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all bg-white"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <img 
                              src={`https://images.unsplash.com/photo-15${appointment.id}4749419?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80`}
                              alt={appointment.patient}
                              className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-800">{appointment.patient}</h3>
                              <p className="text-gray-600 text-sm">Age: {appointment.age} • Last visit: {appointment.lastVisit}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(appointment.status)}`}>
                              {appointment.status}
                            </span>
                            <div className={`w-3 h-3 rounded-full ${getPriorityColor(appointment.priority)}`} />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center">
                            <ServiceIcon className="text-blue-600 mr-2" />
                            <span className="font-medium">{appointment.service}</span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Date & Time</p>
                            <p className="font-medium">{appointment.date} at {appointment.time}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Duration</p>
                            <p className="font-medium">{appointment.duration}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Contact</p>
                            <p className="font-medium text-sm">{appointment.phone}</p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                          <div className="flex space-x-3">
                            {appointment.status === 'Pending' && (
                              <>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleStatusChange(appointment.id, 'Confirmed')}
                                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                                >
                                  <FaCheck className="mr-2" /> Confirm
                                </motion.button>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleStatusChange(appointment.id, 'Cancelled')}
                                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                                >
                                  <FaTimes className="mr-2" /> Cancel
                                </motion.button>
                              </>
                            )}
                            {appointment.status === 'Confirmed' && (
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleStatusChange(appointment.id, 'Completed')}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                              >
                                Mark Complete
                              </motion.button>
                            )}
                          </div>
                          
                          <div className="flex space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => toggleAppointmentDetails(appointment.id)}
                              className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                            >
                              {activeAppointment === appointment.id ? 'Hide Details' : 'View Details'}
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-gray-600 hover:text-gray-800"
                            >
                              <FaEdit />
                            </motion.button>
                          </div>
                        </div>

                        {/* Expanded Details */}
                        <AnimatePresence>
                          {activeAppointment === appointment.id && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold text-blue-800 mb-2">Patient Notes</h4>
                                  <p className="text-sm text-blue-900">{appointment.notes}</p>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-blue-800 mb-2">Contact Information</h4>
                                  <div className="space-y-1 text-sm">
                                    <p className="flex items-center">
                                      <FaEnvelope className="mr-2 text-blue-600" />
                                      {appointment.contact}
                                    </p>
                                    <p className="flex items-center">
                                      <FaPhone className="mr-2 text-blue-600" />
                                      {appointment.phone}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </motion.div>
                
                {filteredAppointments.length === 0 && (
                  <div className="text-center py-12">
                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaSearch className="text-2xl text-gray-400" />
                    </div>
                    <p className="text-gray-500 text-lg">No appointments found matching your criteria</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSearchTerm('');
                        setStatusFilter('all');
                        setDateFilter('');
                        setPriorityFilter('all');
                      }}
                      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg"
                    >
                      Clear Filters
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Today's Schedule */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <TbCalendarStats className="mr-2 text-blue-600" />
                Today's Schedule
              </h3>
              <div className="space-y-3">
                {todaySchedule.map((slot, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className={`p-3 rounded-lg border-l-4 ${
                      slot.status === 'completed' ? 'border-l-green-500 bg-green-50' :
                      slot.status === 'in-progress' ? 'border-l-blue-500 bg-blue-50' :
                      'border-l-gray-500 bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-800">{slot.patient}</p>
                        <p className="text-sm text-gray-600">{slot.service}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-800">{slot.time}</p>
                        <p className="text-sm text-gray-600">{slot.duration}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: FaUser, label: 'Add Patient', color: 'blue' },
                  { icon: FaCalendarAlt, label: 'New Appointment', color: 'green' },
                  { icon: FaFileMedical, label: 'Medical Records', color: 'purple' },
                  { icon: FaChartPie, label: 'Reports', color: 'orange' },
                  { icon: FaDownload, label: 'Export Data', color: 'red' },
                  { icon: FaCog, label: 'Settings', color: 'gray' }
                ].map((action, index) => (
                  <motion.button
                    key={action.label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl flex flex-col items-center transition-all ${
                      action.color === 'blue' ? 'bg-blue-50 hover:bg-blue-100 text-blue-700' :
                      action.color === 'green' ? 'bg-green-50 hover:bg-green-100 text-green-700' :
                      action.color === 'purple' ? 'bg-purple-50 hover:bg-purple-100 text-purple-700' :
                      action.color === 'orange' ? 'bg-orange-50 hover:bg-orange-100 text-orange-700' :
                      action.color === 'red' ? 'bg-red-50 hover:bg-red-100 text-red-700' :
                      'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <action.icon className="text-xl mb-2" />
                    <span className="text-xs font-medium">{action.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Emergency Contacts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-red-50 border border-red-200 rounded-2xl p-6"
            >
              <div className="flex items-center mb-3">
                <div className="bg-red-100 p-2 rounded-lg mr-3">
                  <FaPhone className="text-red-600" />
                </div>
                <h3 className="font-semibold text-red-800">Emergency Contacts</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-red-700">Dr. Johnson: <span className="font-medium">(555) 123-4567</span></p>
                <p className="text-red-700">Emergency Line: <span className="font-medium">(555) 911-HELP</span></p>
                <p className="text-red-600 text-xs">Available 24/7 for dental emergencies</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAdmin;