import { useState, useEffect } from 'react';
import { FaSearchPlus, FaChevronLeft, FaChevronRight, FaTimes, FaFacebook, FaTwitter, FaLink } from 'react-icons/fa';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1504674900247-087703934569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'community',
    title: 'Community Outreach',
    description: 'Our team engaging with local communities to understand their needs and challenges.'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'education',
    title: 'School Renovation',
    description: 'Volunteers working on renovating a local school to provide better learning facilities.'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1505751172876-fa186e9d30c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'healthcare',
    title: 'Medical Camp',
    description: 'Providing free medical check-ups and healthcare services in rural areas.'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'education',
    title: 'Learning Together',
    description: 'Children participating in our after-school educational programs.'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'water',
    title: 'Clean Water Project',
    description: 'Installing clean water systems in communities without access to safe drinking water.'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'volunteer',
    title: 'Volunteer Team',
    description: 'Our dedicated volunteers making a difference in the community.'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'environment',
    title: 'Tree Planting',
    description: 'Community tree planting initiative to combat climate change.'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'women',
    title: 'Women Empowerment',
    description: 'Skills development workshop for women in the community.'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1507914630438-64d9f156eb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'food',
    title: 'Food Distribution',
    description: 'Providing nutritious meals to families in need.'
  }
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'community', name: 'Community' },
  { id: 'education', name: 'Education' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'water', name: 'Clean Water' },
  { id: 'environment', name: 'Environment' },
  { id: 'women', name: 'Women Empowerment' },
  { id: 'food', name: 'Food Security' }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(galleryImages.findIndex(img => img.id === image.id));
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    } else {
      newIndex = (currentIndex + 1) % galleryImages.length;
    }
    setSelectedImage(galleryImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      navigate('prev');
    } else if (e.key === 'ArrowRight') {
      navigate('next');
    }
  };

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedImage, currentIndex]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Capturing moments of impact, hope, and transformation in the communities we serve.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(image, index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                    <p className="text-gray-200 text-sm mt-1 line-clamp-2">{image.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white">
                    <FaSearchPlus size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors"
          >
            <FaTimes size={28} />
          </button>

          <div className="relative max-w-6xl w-full max-h-[90vh]">
            <div className="relative h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[80vh] w-full object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                <p className="mt-2">{selectedImage.description}</p>
                
                <div className="flex items-center mt-4 space-x-4">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm">
                    {categories.find(cat => cat.id === selectedImage.category)?.name}
                  </span>
                  <div className="flex-1"></div>
                  <div className="flex items-center space-x-3">
                    <button className="text-white hover:text-yellow-400 transition-colors">
                      <FaFacebook size={20} />
                    </button>
                    <button className="text-white hover:text-yellow-400 transition-colors">
                      <FaTwitter size={20} />
                    </button>
                    <button className="text-white hover:text-yellow-400 transition-colors">
                      <FaLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigate('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Share Your Story With Us</h2>
          <p className="text-xl mb-8">
            Have photos or stories from your experience with us? We'd love to see them!
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
            Share Your Photos
          </button>
        </div>
      </section>
    </div>
  );
}