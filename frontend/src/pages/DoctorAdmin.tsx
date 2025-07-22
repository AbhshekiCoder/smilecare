import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, FaClock, FaTooth, FaCheck, FaTimes, 
  FaSearch, FaFilter, FaUserMd, FaChartPie, FaBell, FaCog
} from 'react-icons/fa';
import { TbDental } from 'react-icons/tb';
import { animate, useMotionValue, useTransform } from 'framer-motion';

// Create this helper component inside your DoctorAdmin component (before the return statement)
const AnimatedCounter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    const animation = animate(count, value, { duration: 1 });
    return () => animation.stop();
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
};

// Mock appointment data
const mockAppointments = [
  {
    id: 1,
    patient: 'John Doe',
    date: '2023-10-15',
    time: '10:00',
    service: 'General Checkup',
    status: 'Confirmed',
    contact: 'john@example.com',
    duration: '30 mins',
    notes: 'Routine checkup, no issues reported'
  },
  {
    id: 2,
    patient: 'Jane Smith',
    date: '2023-10-15',
    time: '11:00',
    service: 'Teeth Cleaning',
    status: 'Pending',
    contact: 'jane@example.com',
    duration: '45 mins',
    notes: 'First visit, needs deep cleaning'
  },
  {
    id: 3,
    patient: 'Robert Johnson',
    date: '2023-10-16',
    time: '14:30',
    service: 'Root Canal',
    status: 'Confirmed',
    contact: 'robert@example.com',
    duration: '90 mins',
    notes: 'Follow-up after initial treatment'
  },
  {
    id: 4,
    patient: 'Emily Davis',
    date: '2023-10-16',
    time: '16:00',
    service: 'Dental Implant',
    status: 'Pending',
    contact: 'emily@example.com',
    duration: '120 mins',
    notes: 'New implant placement'
  },
  {
    id: 5,
    patient: 'Michael Brown',
    date: '2023-10-17',
    time: '09:00',
    service: 'Braces Adjustment',
    status: 'Completed',
    contact: 'michael@example.com',
    duration: '30 mins',
    notes: 'Monthly adjustment'
  }
];

const DoctorAdmin = () => {
  const [appointments, setAppointments] = useState(mockAppointments);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('');
  const [activeAppointment, setActiveAppointment] = useState<number | null>(null);
  const [stats, setStats] = useState({
    confirmed: 8,
    pending: 3,
    completed: 12,
    cancelled: 1
  });

  useEffect(() => {
    // Simulate stats animation
    setTimeout(() => {
      setStats({
        confirmed: 14,
        pending: 5,
        completed: 22,
        cancelled: 2
      });
    }, 500);
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

  // Filter appointments based on search and filters
  const filteredAppointments = appointments.filter(appt => {
    const matchesSearch = 
      appt.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appt.service.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = 
      statusFilter === 'all' || appt.status === statusFilter;
    
    const matchesDate = 
      !dateFilter || appt.date === dateFilter;
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Confirmed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
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
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Top Navigation */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <TbDental className="text-blue-600 text-3xl mr-2" />
              <h1 className="text-xl font-bold text-gray-800">DentalCare Admin</h1>
            </div>
            <div className="flex items-center space-x-6">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="relative p-2"
              >
                <FaBell className="text-gray-600 text-xl" />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="p-2"
              >
                <FaCog className="text-gray-600 text-xl" />
              </motion.button>
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                <span className="ml-3 text-gray-700 font-medium">Dr. Johnson</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Doctor Admin Dashboard</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Manage appointments, patient records, and clinic operations
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Confirmed</p>
              <p className="text-3xl font-bold text-blue-600">
  <AnimatedCounter value={stats.confirmed} />
</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <FaCheck className="text-blue-600 text-2xl" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Pending</p>
              <p className="text-3xl font-bold text-blue-600">
  <AnimatedCounter value={stats.confirmed} />
</p>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <FaClock className="text-yellow-600 text-2xl" />
              </div>
            </div>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Completed</p>
               <p className="text-3xl font-bold text-blue-600">
  <AnimatedCounter value={stats.confirmed} />
</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <FaCalendarAlt className="text-green-600 text-2xl" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Cancelled</p>
             <p className="text-3xl font-bold text-blue-600">
  <AnimatedCounter value={stats.confirmed} />
</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <FaTimes className="text-red-600 text-2xl" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Appointment Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
        >
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Appointment Management</h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search appointments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaFilter className="text-gray-400" />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="overflow-x-auto"
            >
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAppointments.map(appointment => (
                    <motion.tr 
                      key={appointment.id} 
                      variants={itemVariants}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {appointment.patient}
                            </div>
                            <div className="text-sm text-gray-500">
                              {appointment.contact}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {appointment.service}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{appointment.date}</div>
                        <div className="text-sm text-gray-500">{appointment.time} ({appointment.duration})</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(appointment.status)}`}>
                          {appointment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          {appointment.status === 'Pending' && (
                            <>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleStatusChange(appointment.id, 'Confirmed')}
                                className="text-green-600 hover:text-green-900"
                                title="Confirm"
                              >
                                <FaCheck />
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleStatusChange(appointment.id, 'Cancelled')}
                                className="text-red-600 hover:text-red-900"
                                title="Cancel"
                              >
                                <FaTimes />
                              </motion.button>
                            </>
                          )}
                          {appointment.status === 'Confirmed' && (
                            <>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleStatusChange(appointment.id, 'Completed')}
                                className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                              >
                                Complete
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleStatusChange(appointment.id, 'Cancelled')}
                                className="bg-red-600 text-white px-3 py-1 rounded text-sm"
                              >
                                Cancel
                              </motion.button>
                            </>
                          )}
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => toggleAppointmentDetails(appointment.id)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            Details
                          </motion.button>
                        </div>
                        
                        {activeAppointment === appointment.id && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-4 p-4 bg-blue-50 rounded-lg"
                          >
                            <p className="font-medium">Notes:</p>
                            <p className="text-sm">{appointment.notes}</p>
                          </motion.div>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            
            {filteredAppointments.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No appointments found matching your criteria</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Schedule</h3>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <p className="font-medium">John Doe - Checkup</p>
                  <p className="text-sm text-gray-600">10:00 - 10:30 AM</p>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  Confirmed
                </span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <p className="font-medium">Jane Smith - Cleaning</p>
                  <p className="text-sm text-gray-600">11:00 - 11:45 AM</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                  Pending
                </span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <p className="font-medium">Robert Johnson - Root Canal</p>
                  <p className="text-sm text-gray-600">2:30 - 4:00 PM</p>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  Confirmed
                </span>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium py-2 px-4 rounded-lg"
              >
                View Full Schedule
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-4 rounded-xl flex flex-col items-center"
              >
                <FaUserMd className="text-2xl mb-2" />
                <span>Add Patient</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-100 hover:bg-green-200 text-green-700 p-4 rounded-xl flex flex-col items-center"
              >
                <FaCalendarAlt className="text-2xl mb-2" />
                <span>New Appointment</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-100 hover:bg-purple-200 text-purple-700 p-4 rounded-xl flex flex-col items-center"
              >
                <FaChartPie className="text-2xl mb-2" />
                <span>Reports</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-100 hover:bg-amber-200 text-amber-700 p-4 rounded-xl flex flex-col items-center"
              >
                <FaTooth className="text-2xl mb-2" />
                <span>Treatment Plan</span>
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Patients</h3>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                <div className="ml-4">
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-gray-600">Last Visit: Today</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                <div className="ml-4">
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-sm text-gray-600">Last Visit: Oct 8, 2023</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                <div className="ml-4">
                  <p className="font-medium">Robert Johnson</p>
                  <p className="text-sm text-gray-600">Last Visit: Oct 5, 2023</p>
                </div>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg"
              >
                View All Patients
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Upcoming Procedures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Complex Procedures Tomorrow</h2>
              <p className="max-w-xl">2 root canals and 1 dental implant scheduled</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-0 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg"
            >
              View Schedule
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorAdmin;