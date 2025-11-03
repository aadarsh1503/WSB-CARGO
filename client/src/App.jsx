import React, { useState } from 'react';
// The useLocation hook is still needed for the dynamic padding logic
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// ========= YOUR EXISTING COMPONENT IMPORTS =========
// GlobalLoader and RegionTransitionOverlay are no longer needed here
import Navbar from "./components/Navbar/Navbar";
import ChatWidget from "./components/ChatWidget/ChatWidget";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AboutSection from "./components/WhoWeAre/WhoWeAre";
import WhereBrazil from "./components/WhereBrazil/WhereBrazil";
import OperateWorld from "./components/OperateWorld/OperateWorld";
import MissionVissionAndValues from "./components/MissionVissionAndValues/MissionVissionAndValues";
import AirFreightSection from "./components/AirFreightSection/AirFreightSection";
import SeaFreight from "./components/SeaFrieght/SeaFrieght";
import RoadFreight from "./components/RoadFreight/RoadFreight";
import StuffingUnloading from "./components/StuffingUnloading/StuffingUnloading";
import LCL from "./components/LCL/LCL";
import FCL from "./components/FCL/FCL";
import CustomClearance from "./components/CustomClearance/CustomClearance";
import DGR from "./components/DGR/DGR";
import Inspection from "./components/Inspection/Inspection";
import Packaging from "./components/Packaging/Packaging";
import Storages from "./components/Storages/Storages";
import Commercial from "./components/Commercial/Commercial";
import Insurance from "./components/Insurance/Insurance";
import Containers from "./components/Container/Container";
import Incoterms from "./components/Incoterms/Incoterms";
import ContactUs from "./components/ContactUs/ContactUs";
import Offers from "./components/Offers/Offers";
import Testimonials from "./components/Testimonials/Testimonials";

import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import RegionEditForm from './pages/Admin/RegionEditForm';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import AdminSignUp from './pages/Admin/AdminSignUp';
import CreateRegionPage from './pages/Admin/CreateRegionPage';
import ExcelUploadPanel from './components/ExcelUploadPanel/ExcelUploadPanel';
import { Toaster } from 'react-hot-toast';
// useLenis might be a custom hook for smooth scrolling, keeping it.
import useLenis from './hooks/useLenis'; 
import MobileNavbar from './components/Navbar/MobileNavbar';
import ForgotPassword from './pages/Admin/ForgotPassword';
import ResetPassword from './pages/Admin/ResetPassword';
// API_BASE_URL might be used by other parts of the app (like Admin), so we keep it.
import { API_BASE_URL } from './config/apiConfig';


const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // This logic for adding padding-top on non-home pages is independent of region context, so it remains.
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const mainContentClass = isHomePage ? '' : 'pt-28';

  // Everything related to useRegion, regionContent, fetching, etc., has been removed.

  return (
    <>
      <Navbar />
      <MobileNavbar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      {/* 
        The ChatWidget now has static, hardcoded numbers.
        Update these values as needed for your business.
      */}
      <ChatWidget 
        salesNumber="+966554026599"
        supportNumber="+966553800550"
      />
      
      <main className={mainContentClass}>
        {/* The nested Routes will render inside this main tag */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whoWeAre" element={<AboutSection />} />
          <Route path="/whereServe" element={<WhereBrazil />} />
          <Route path="/OperateWorld" element={<OperateWorld />} />
          <Route path="/missionvisionandvalues" element={<MissionVissionAndValues />} />
          <Route path="/airFreight" element={<AirFreightSection />} />
          <Route path="/seaFreight" element={<SeaFreight />} />
          <Route path="/roadFreight" element={<RoadFreight />} />
          <Route path="/stuffingUnloading" element={<StuffingUnloading />} />
          <Route path ="/lcl" element={<LCL/>}/>
          <Route path ="/fcl" element={<FCL/>}/>
          <Route path="/customClearance" element={<CustomClearance />} />
          <Route path="/dgr" element={<DGR />} />
          <Route path="/inspection" element={<Inspection />} />
          <Route path="/packaging" element={<Packaging />} />
          <Route path="/storage" element={<Storages />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/container" element={<Containers />} />
          <Route path="/incoTerms" element={<Incoterms />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="*" element={<div><h2>404 Page Not Found</h2></div>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

function App() {
  // The useLenis hook for smooth scrolling is kept
  // useLenis();

  return (
    <Router>
      <Toaster 
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
        }}
      />
      {/* RegionProvider has been removed from here */}
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/create-super-user-access-a9b3c7d1" element={<AdminSignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/add-region" element={<CreateRegionPage />} />
          <Route path="/admin/edit/:regionCode" element={<RegionEditForm />} />
          <Route path="/admin/excel-management" element={<ExcelUploadPanel />} />
        </Route>

        {/* Public-Facing Site Routes */}
        {/* This route renders the MainLayout for all non-admin paths */}
        <Route path="/*" element={<MainLayout />} /> 
      </Routes>
    </Router>
  );
}

export default App;