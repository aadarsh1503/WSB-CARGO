import React, { useState, useEffect } from 'react';
import { FaMapMarkedAlt, FaGlobeAfrica, FaPlane, FaTimes } from 'react-icons/fa';
import newimage from "./newimage.png"; 

// The useRegion context hook has been removed.

const Weperate = () => {
  // --- Static Content ---
  // All dynamic data from the context is replaced with this static object.
  const staticContent = {
    operate_heading: "Seamless Operations, Global Reach",
    local_button_text: "Serving the Kingdom of Saudi Arabia",
    global_button_text: "Connecting KSA to the World",
    local_modal_title: "Our Network in Saudi Arabia",
    local_modal_description: "With a strong presence in key cities like Riyadh, Jeddah, and Dammam, we offer comprehensive logistics solutions across the Kingdom. Our expertise in local customs and regulations ensures your cargo moves swiftly and efficiently, whether by land, sea, or air.",
    local_modal_map_src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15342749.63884803!2d34.43752355554388!3d23.86433299863748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2sus!4v1698256321456!5m2!1sen!2sus",
    global_modal_title: "Worldwide Logistics Network",
    global_modal_description: "Our global network of trusted partners allows us to connect Saudi Arabia to major trade hubs across every continent. We manage complex international supply chains, offering reliable and cost-effective freight forwarding services to ensure your business can reach any market in the world.",
  };

  const [modalContentKey, setModalContentKey] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = (key) => {
    setModalContentKey(key);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setModalContentKey(null), 300); 
  };

  useEffect(() => {
    const bodyClass = 'overflow-hidden';
    if (isModalVisible) {
      document.body.classList.add(bodyClass);
    } else {
      document.body.classList.remove(bodyClass);
    }
    return () => document.body.classList.remove(bodyClass);
  }, [isModalVisible]);

  // The loading state check is no longer needed.
  
  return (
    <>
      <style>{`
        :root {
          --accent-color: #F59E0B; /* Amber-500 */
          --accent-dark: #B45309; /* Amber-700 */
          --text-dark: #1F2937;   /* Gray-800 */
          --bg-light: #f9fafb;    /* Gray-50 */
        }

        /* --- Animations (Largely Unchanged) --- */
        @keyframes fly-straight { from { transform: translateX(-150px); } to { transform: translateX(120vw); } }
        @keyframes float-animation { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes gradient-pan { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes modal-fade-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes modal-fade-out { from { opacity: 1; transform: scale(1); } to { opacity: 0; transform: scale(0.95); } }
        
        /* --- Main Component Styling --- */
        .clean-background {
          background-color: var(--bg-light);
          background-image: radial-gradient(circle at center, #ffffff 0%, var(--bg-light) 70%);
        }
        .flying-plane { position: absolute; color: rgba(0, 0, 0, 0.05); animation: fly-straight linear infinite; }
        .flying-plane.plane-1 { top: 10%; font-size: 6rem; animation-duration: 20s; animation-delay: -5s; }
        .flying-plane.plane-2 { top: 60%; font-size: 3rem; animation-duration: 30s; animation-delay: -15s; }
        .animated-heading {
          background: linear-gradient(90deg, var(--accent-dark), var(--text-dark), var(--accent-dark));
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: gradient-pan 5s linear infinite;
        }
        .animate-entry { animation: fade-in-up 0.8s cubic-bezier(0.25, 1, 0.5, 1) both; }

        /* --- Sleek Button Styling --- */
        .sleek-operate-btn {
          background-color: transparent;
          color: var(--accent-dark);
          border: 2px solid var(--accent-color);
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .sleek-operate-btn::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: var(--accent-color);
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: -1;
        }
        .sleek-operate-btn:hover {
          color: white;
          border-color: var(--accent-dark);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .sleek-operate-btn:hover::before {
          transform: translateX(0);
        }
        
        /* --- Showcase Image Frame --- */
        .showcase-frame {
          background-color: white;
          border-radius: 0.75rem; /* rounded-lg */
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 40px rgba(245, 158, 11, 0.2);
          border: 1px solid #e5e7eb; /* Gray-200 */
        }

        /* --- Light Modal Styling --- */
        .modal-animate-in { animation: modal-fade-in 0.3s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
        .modal-animate-out { animation: modal-fade-out 0.3s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
        .light-modal-panel {
          background-color: white;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .modal-close-btn { transition: all 0.2s ease; border-radius: 9999px; }
        .modal-close-btn:hover { background-color: #e5e7eb; /* Gray-200 */ transform: rotate(90deg); }
      `}</style>

      <div className="clean-background font-sans text-gray-800 flex flex-col justify-center items-center py-20 px-5 min-h-screen relative overflow-hidden">
        <div className="background-animation-container">
          <FaPlane className="flying-plane plane-1" />
          <FaPlane className="flying-plane plane-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto items-center relative z-10">
          <div className="flex flex-col items-center lg:items-start space-y-8">
            <h2 className="animated-heading text-4xl sm:text-5xl font-bold text-center lg:text-left animate-entry" style={{ animationDelay: '100ms' }}>
              {staticContent.operate_heading}
            </h2>
            <div className="flex flex-col items-center lg:items-start space-y-5 animate-entry" style={{ animationDelay: '300ms' }}>
              <button className="sleek-operate-btn flex items-center justify-center py-4 px-10 text-lg rounded-full" onClick={() => handleOpenModal('local')}>
                <FaMapMarkedAlt className="mr-3" />
                <span>{staticContent.local_button_text}</span>
              </button>
              <button className="sleek-operate-btn flex items-center justify-center py-4 px-10 text-lg rounded-full" onClick={() => handleOpenModal('global')}>
                <FaGlobeAfrica className="mr-3" />
                <span>{staticContent.global_button_text}</span>
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center floating-image-container animate-entry" style={{ animationDelay: '500ms' }}>
            <div className="showcase-frame p-2">
              <img src={newimage} alt="Global Operations" className="w-full h-auto max-w-md lg:max-w-lg object-contain rounded-lg" />
            </div>
          </div>
        </div>

        {modalContentKey && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className={`light-modal-panel w-full max-w-4xl rounded-xl ${isModalVisible ? 'modal-animate-in' : 'modal-animate-out'}`}>
              
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">
                  {modalContentKey === 'local' ? staticContent.local_modal_title : staticContent.global_modal_title}
                </h3>
                <button onClick={handleCloseModal} className="modal-close-btn h-10 w-10 flex items-center justify-center text-gray-500 hover:text-gray-800">
                  <FaTimes size={20} />
                </button>
              </div>

              {modalContentKey === 'local' && (
                <div className="p-6 md:p-8">
                  <p className="mb-6 text-gray-600">{staticContent.local_modal_description}</p>
                  <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-200">
                    <iframe title={`${staticContent.local_button_text} Map`} src={staticContent.local_modal_map_src} width="100%" height="100%" style={{ border: "none" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              )}

              {modalContentKey === 'global' && (
                <div className="p-6 md:p-8">
                  <p className="text-gray-600">{staticContent.global_modal_description}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Weperate;