import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaBars } from "react-icons/fa";
// Select and useRegion are no longer needed
// import Select from "react-select";
import { AnimatePresence, motion } from "framer-motion";
// import { useRegion } from "../../context/RegionContext";
// FuturisticLoader is no longer needed
// import FuturisticLoader from "./Loader";
import ws1 from "./ws1.png"; // White logo for transparent bg
import WSB from "./WSB.png"; // Black logo for solid bg
import MobileNavbar from "./MobileNavbar";

// Helper component for dropdown items (remains unchanged)
const DropdownItem = ({ to, children, isExternal = false }) => {
  if (isExternal) {
    return (
      <a
        href={to}
        className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 whitespace-nowrap"
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      to={to}
      className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 whitespace-nowrap"
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  // --- STATE & HOOKS (Region context removed) ---
  const location = useLocation();
  const [dropdown, setDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const isHomePage = location.pathname === "/";

  // State for scroll behavior remains unchanged
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Hover handlers
  const handleDropdownHover = (menuName) => setDropdown(menuName);
  const handleDropdownLeave = () => setDropdown(null);

  // Scroll handler effect remains unchanged
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavbarVisible(false); // Scrolling down
      } else {
        setIsNavbarVisible(true); // Scrolling up
      }
      lastScrollY.current = currentScrollY;
      setIsScrolled(currentScrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effects for closing dropdowns remain unchanged
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target))
        setDropdown(null);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    setDropdown(null);
    setIsOpen(false);
  }, [location.pathname]);

  // Loading state is removed. The component renders directly.

  // --- STATIC NAVIGATION ITEMS ---
  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "About Us",
      dropdown: [
        { name: "Who We Are", link: "/whoWeAre" },
        { name: "Our Testimonials", link: "/testimonials" },
        { name: "We Operate in KSA & GCC", link: "/whereServe" }, // Made static
        { name: "We Operate Worldwide", link: "/operateWorld" },
        { name: "Mission, Vision, and Values", link: "/missionvisionandvalues" },
      ],
    },
    {
      name: "Freights",
      dropdown: [
        { name: "Air Freight", link: "/airFreight" },
        { name: "Road Freight", link: "/roadFreight" },
        { name: "Sea Freight", link: "/seaFreight" },
      ],
    },
    {
      name: "Services",
      dropdown: [
        { name: "Stuffing Unloading", link: "/stuffingUnloading" },
        { name: "LCL - Less Than Container Loaded", link: "/lcl" },
        { name: "FCL- Full Container Loaded", link: "/fcl" },
        { name: "Custom Clearance", link: "/customClearance" },
        { name: "DGR-per-Dangerous perishable Products", link: "/dgr" },
        { name: "Inspection", link: "/inspection" },
        { name: "Packaging", link: "/packaging" },
        { name: "Storage", link: "/storage" },
        { name: "Commercial and logical consultancy", link: "/commercial" },
        { name: "International Cargo Insurance", link: "/insurance" },
      ],
    },
    {
      name: "Tools",
      dropdown: [
        { name: "Incoterms", link: "/incoterms" },
        { name: "Container", link: "/container" },
      ],
    },
    {
      name: "Contact Us",
      isExternal: true, // Keep this for mailto links
      dropdown: [
        // Updated to a single, static email as requested
        {
          name: "General Inquiries",
          link: `mailto:ksacargo@gvscargo.com`,
        },
      ],
    },
    // { name: "Offers", link: "/offers" },
  ];

  // Navbar style logic remains unchanged
  const isTransparent = isHomePage && !isScrolled;

  // Logo animation variants remain unchanged
  const logoVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 p-4 font-sans transition-all duration-500 ease-in-out ${
        isTransparent ? "bg-transparent" : "bg-white shadow-md"
      } ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/">
            <AnimatePresence mode="wait">
              {isTransparent ? (
                <motion.img
                  key="image-logo-transparent"
                  variants={logoVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  src={ws1}
                  alt="GVS Logo White"
                  className="h-20 w-auto"
                />
              ) : (
                <motion.img
                  key="image-logo-solid"
                  variants={logoVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  src={WSB}
                  alt="GVS Logo Black"
                  className="h-20 w-auto"
                />
              )}
            </AnimatePresence>
          </Link>
        </div>

        <nav ref={navRef} className="hidden lg:flex flex-grow justify-center">
          <div className="flex items-center gap-3">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative py-2"
                onMouseEnter={() => item.dropdown && handleDropdownHover(item.name)}
                onMouseLeave={() => item.dropdown && handleDropdownLeave()}
              >
                <Link
                  to={item.link || "#"}
                  className={`px-3 py-2 font-bold whitespace-nowrap text-sm rounded-full border-2 transition-colors duration-300 flex items-center gap-1.5 ${
                    isTransparent
                      ? "text-white border-white/40 hover:bg-white/20"
                      : "text-gray-700 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                  {item.dropdown && <FaChevronDown size={12} />}
                </Link>
                {dropdown === item.name && item.dropdown && (
                  <div className="absolute font-noto-serif top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className="bg-white rounded-lg shadow-xl p-2 z-50 min-w-max">
                      {item.dropdown.map((subItem) => (
                        <DropdownItem
                          key={subItem.name}
                          to={subItem.link}
                          isExternal={item.isExternal}
                        >
                          {subItem.name}
                        </DropdownItem>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        <div className="flex-shrink-0 flex items-center justify-end">
          <div className="hidden lg:flex items-center gap-4">
            {/* The Select component for region has been removed */}
            <Link
              to="/ContactUs"
              className={`px-6 py-2.5 font-semibold text-sm rounded-full shadow-lg transition-all duration-300 ${
                isTransparent
                  ? "bg-white text-gray-800 hover:bg-gray-200"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Request a Quote
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${
                isTransparent ? "text-white" : "text-gray-800"
              }`}
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      <MobileNavbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navItems={navItems}
        // Region selector props have been removed
      />
    </header>
  );
};

export default Navbar;