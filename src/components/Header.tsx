import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import WaitlistModal from "./WaitlistModal";
import CovexaLogo from "./CovexaLogo";
import { useThrottledScroll } from "../hooks/useThrottledScroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  // Track active section for navigation highlighting with throttling
  const handleScroll = useThrottledScroll(() => {
    const sections = ['home', 'ai-readiness', 'how-it-works', 'use-cases'];
    const scrollPosition = window.scrollY + 100;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  }, 16);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'ai-readiness', label: 'AI Readiness' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'use-cases', label: 'Use Cases' }
  ];

  const handleWaitlistClick = (source: string) => {
    setIsWaitlistOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 transition-all duration-300">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <CovexaLogo 
              size="medium" 
              className="w-auto h-8 sm:h-10 lg:h-12" 
            />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-700 hover:text-blue-600 transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-3 py-2 ${
                    activeSection === item.id ? 'text-blue-600 font-medium' : ''
                  }`}
                  aria-label={`Navigate to ${item.label} section`}
                  tabIndex={0}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Tablet Navigation */}
            <nav className="hidden md:flex lg:hidden space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-700 hover:text-blue-600 transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-2 text-sm ${
                    activeSection === item.id ? 'text-blue-600 font-medium' : ''
                  }`}
                  aria-label={`Navigate to ${item.label} section`}
                  tabIndex={0}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            <div className="hidden md:block">
              <button 
                onClick={() => handleWaitlistClick('header-desktop')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 touch-target"
                aria-label="Join the waitlist for early access"
              >
                Join Waitlist
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md p-2 touch-target"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fade-in">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-gray-700 hover:text-blue-600 transition-colors duration-300 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                      activeSection === item.id ? 'text-blue-600 font-medium' : ''
                    }`}
                    aria-label={`Navigate to ${item.label} section`}
                    tabIndex={0}
                  >
                    {item.label}
                  </button>
                ))}
                <button 
                  onClick={() => handleWaitlistClick('header-mobile')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors duration-300 text-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 touch-target"
                  aria-label="Join the waitlist for early access"
                >
                  Join Waitlist
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
      
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)}
        source="header"
      />
    </>
  );
};

export default Header;
