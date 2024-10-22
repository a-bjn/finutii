import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      const sectionId = pathname.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
    setTimeout(scrollToSection, 10);
  }, [pathname]);

  return null;
};

export default ScrollToSection;
