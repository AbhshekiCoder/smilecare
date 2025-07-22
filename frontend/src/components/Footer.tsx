// src/components/Footer.tsx
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaTooth
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Clinic Info */}
          <div>
            <div className="flex items-center mb-4">
              <FaTooth className="text-blue-300 text-2xl" />
              <span className="ml-2 text-2xl font-bold">DentalCare</span>
            </div>
            <p className="mb-4 text-blue-100">
              Providing exceptional dental care with modern technology and a compassionate approach.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition"><FaFacebook size={20} /></a>
              <a href="#" className="text-blue-200 hover:text-white transition"><FaTwitter size={20} /></a>
              <a href="#" className="text-blue-200 hover:text-white transition"><FaInstagram size={20} /></a>
              <a href="#" className="text-blue-200 hover:text-white transition"><FaLinkedin size={20} /></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition">Our Services</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition">Dentist Team</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition">Testimonials</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition">Book Appointment</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition">Teeth Cleaning</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition">Dental Implants</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition">Cosmetic Dentistry</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition">Orthodontics</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition">Root Canal Therapy</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 text-blue-200" />
                <span className="ml-3 text-blue-100">123 Dental Street, Health City, HC 54321</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-200" />
                <span className="ml-3 text-blue-100">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-200" />
                <span className="ml-3 text-blue-100">info@dentalcare.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-12 pt-8 text-center text-blue-200">
          <p>© {new Date().getFullYear()} DentalCare Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;