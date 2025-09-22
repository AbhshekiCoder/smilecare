// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Dentists from './pages/Dentists';

import BookAppointment from './pages/BookAppointment';
import PatientDashboard from './pages/PatientDashboard';
import DoctorAdmin from './pages/DoctorAdmin';
import Services from './pages/Services';

function App() {
  return (
    
      <div className="flex flex-col min-h-screen h-">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dentists" element={<Dentists />} />
            <Route path='/services' element={<Services/>}></Route>          
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path='/patient-Dashboard' element={<PatientDashboard/>}></Route>
            <Route path='/doctor-admin' element={<DoctorAdmin/>}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;