import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Logo from './sections/Logo';
import DemoFormModal from './modals/DemoFormModal';
import useModal from '../hooks/useModal';

const { FiMenu, FiX, FiChevronDown } = FiIcons;

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const demoModal = useModal();
  const navigate = useNavigate();
  const location = useLocation();
  const servicesDropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Services', 
      href: '#services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI All-in-One Growth Suite', href: '/all-in-one-growth-suite' },
        { name: 'Growth Accelerator Bundle', href: '/growth-accelerator-bundle' },
        { name: 'Sales Performance Bundle', href: '/sales-performance-bundle' },
        { name: 'Marketing Excellence Bundle', href: '/marketing-excellence-bundle' },
        { name: 'Customer Experience & Support Bundle', href: '/customer-experience-bundle' },
        { name: 'AI Onboarding & Training Automation Bundle', href: '/onboarding-training-bundle' },
        { name: 'AI Partnership & Channel Enablement Bundle', href: '/partnership-channel-bundle' },
        { name: 'Data Intelligence Bundle', href: '/data-intelligence-bundle' }
      ]
    },
    { name: 'Our Difference', href: '#why-different' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const handleServicesClick = () => {
    if (location.pathname === '/') {
      scrollToSection('#services');
    } else {
      navigate('/#services');
    }
  };

  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150); // Small delay to prevent flickering
  };

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        {/* Semi-transparent white navigation bar */}
        <div className="bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <button onClick={() => navigate('/')}>
                  <Logo size="small" />
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {navItems.map((item) => (
                    <div key={item.name} className="relative">
                      {item.hasDropdown ? (
                        <div
                          ref={servicesDropdownRef}
                          className="relative"
                          onMouseEnter={handleMouseEnterServices}
                          onMouseLeave={handleMouseLeaveServices}
                        >
                          <button
                            onClick={handleServicesClick}
                            className="flex items-center px-3 py-2 text-sm font-medium text-gray-800 hover:text-emerald-600 transition-colors duration-200"
                          >
                            {item.name}
                            <SafeIcon icon={FiChevronDown} className="w-4 h-4 ml-1" />
                          </button>
                          
                          {isServicesDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                              onMouseEnter={handleMouseEnterDropdown}
                              onMouseLeave={handleMouseLeaveDropdown}
                            >
                              {item.dropdownItems.map((dropdownItem) => (
                                <button
                                  key={dropdownItem.name}
                                  onClick={() => scrollToSection(dropdownItem.href)}
                                  className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                                >
                                  {dropdownItem.name}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ) : (
                        <button
                          onClick={() => scrollToSection(item.href)}
                          className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-emerald-600 transition-colors duration-200"
                        >
                          {item.name}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="hidden md:block">
                <button
                  onClick={demoModal.openModal}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get Free Demo
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-md text-gray-800"
                >
                  <SafeIcon icon={isMobileMenuOpen ? FiX : FiMenu} className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                            className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-800 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          >
                            {item.name}
                            <SafeIcon 
                              icon={FiChevronDown} 
                              className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                            />
                          </button>
                          {isServicesDropdownOpen && (
                            <div className="pl-4 space-y-1">
                              {item.dropdownItems.map((dropdownItem) => (
                                <button
                                  key={dropdownItem.name}
                                  onClick={() => scrollToSection(dropdownItem.href)}
                                  className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                >
                                  {dropdownItem.name}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <button
                          onClick={() => scrollToSection(item.href)}
                          className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-emerald-600 hover:bg-gray-50 rounded-md w-full text-left transition-colors duration-200"
                        >
                          {item.name}
                        </button>
                      )}
                    </div>
                  ))}
                  <div className="pt-2">
                    <button
                      onClick={demoModal.openModal}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300"
                    >
                      Get Free Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.nav>

      <DemoFormModal isOpen={demoModal.isOpen} onClose={demoModal.closeModal} />
    </>
  );
};

export default Navigation;