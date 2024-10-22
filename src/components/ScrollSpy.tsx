import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const sections = ['home', 'about', 'contact', 'brands'];

const ScrollSpy: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const newPath = sectionId === 'home' ? '/' : `/${sectionId}`;

            if (pathname !== newPath) {
              window.history.replaceState(null, '', newPath);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    const handleScroll = () => {
      if (window.scrollY === 0) {
        window.history.replaceState(null, '', '/');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return null;
};

export default ScrollSpy;
