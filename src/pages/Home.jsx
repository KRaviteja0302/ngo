import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Show/hide scroll to top button
  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section with Carousel */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70 z-10"></div>
          <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out">
            {[
              'https://images.unsplash.com/photo-1504674900247-087703934569?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
              'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
              'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
            ].map((img, index) => (
              <img 
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
                style={{ transform: `translateX(${currentSlide * -100}%)` }}
              />
            ))}
          </div>
          
          {/* Carousel Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {[0, 1, 2].map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-white w-8' : 'bg-white/50'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto h-full flex flex-col justify-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Together We Can Make <span className="text-yellow-400">A Difference</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8">
              Empowering communities through sustainable change and compassionate action
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/donate" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                Donate Now
              </Link>
              <Link to="/volunteer" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1K+', label: 'Volunteers' },
              { number: '50+', label: 'Communities' },
              { number: '100K+', label: 'Lives Impacted' },
              { number: '25+', label: 'Projects' },
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300">
                <p className="text-4xl font-bold text-blue-900 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Causes</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to creating sustainable change in communities through our key initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-yellow-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                ),
                title: 'Food Security',
                description: 'Providing nutritious meals to underprivileged families and communities through our food banks and community kitchens.'
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-yellow-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                ),
                title: 'Education',
                description: 'Building schools, providing scholarships, and educational resources to empower the next generation.'
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-yellow-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                title: 'Healthcare',
                description: 'Offering medical camps, health awareness programs, and access to essential healthcare services.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Our Team" 
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-yellow-400 rounded-lg -z-10"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Organization</h2>
              <p className="text-gray-600 mb-6 text-lg">
                We are a non-profit organization dedicated to creating positive change in communities around the world. 
                Since our founding, we have been working tirelessly to address the most pressing challenges 
                facing vulnerable populations.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Our approach combines direct action with sustainable, community-led solutions to create lasting impact. 
                We believe in the power of collective action and the strength of communities working together 
                for a better future.
              </p>
              <a 
                href="#about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our community of changemakers and help us create a better future for everyone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/donate" 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Donate Now
            </Link>
            <Link 
              to="/volunteer" 
              className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img src="/images/gallery1.jpg" className="rounded-xl shadow" />
          <img src="/images/gallery2.jpg" className="rounded-xl shadow" />
          <img src="/images/gallery3.jpg" className="rounded-xl shadow" />
        </div>
      </section>

      {/* Volunteer */}
      <section className="py-16 bg-gray-100 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Become a Volunteer</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Join us in making a positive impact. Your small help can change many lives.
        </p>

        <a href="/volunteer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg">
          Join Now
        </a>
      </section>

      {/* Donate */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Support Our Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Your donation can bring food, education, and hope to someone in need.
        </p>

        <a href="/donate"
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-full text-lg">
          Donate Now
        </a>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 transform ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
