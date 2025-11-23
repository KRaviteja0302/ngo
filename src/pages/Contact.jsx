import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus({ type: 'sending', message: 'Sending your message...' });

    try {
      // Simulate API call with 1.5 second delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // On success
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully.' 
      });
      
    } catch (error) {
      // On error
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get status message styles based on status type
  const getStatusStyles = () => {
    switch(status.type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-700';
      case 'sending':
        return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-700';
      default:
        return 'hidden';
    }
  };

  // Get status icon based on status type
  const getStatusIcon = () => {
    switch(status.type) {
      case 'success':
        return (
          <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'sending':
        return (
          <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        );
      case 'error':
        return (
          <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl">We're here to help and answer any questions</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Contact Form */}
              <div className="p-6 md:p-8 md:w-1/2">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                
                {/* Status Message */}
                {status.message && (
                  <div className={`mb-6 p-4 rounded-lg border ${getStatusStyles()}`}>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        {getStatusIcon()}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{status.message}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white md:w-1/2">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 flex-shrink-0 mt-1">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-blue-100">123 Charity Street,<br />Mumbai, 400001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 flex-shrink-0 mt-1">
                      <FaPhoneAlt className="text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-blue-100">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 flex-shrink-0 mt-1">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Email</h3>
                      <p className="text-blue-100">info@ngocharity.org</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="text-lg font-medium mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="text-white hover:text-yellow-300 transition-colors duration-200"
                        aria-label="Facebook"
                      >
                        <FaFacebook className="h-6 w-6" />
                      </a>
                      <a 
                        href="#" 
                        className="text-white hover:text-yellow-300 transition-colors duration-200"
                        aria-label="Twitter"
                      >
                        <FaTwitter className="h-6 w-6" />
                      </a>
                      <a 
                        href="#" 
                        className="text-white hover:text-yellow-300 transition-colors duration-200"
                        aria-label="Instagram"
                      >
                        <FaInstagram className="h-6 w-6" />
                      </a>
                      <a 
                        href="#" 
                        className="text-white hover:text-yellow-300 transition-colors duration-200"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;