import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const causes = [
  {
    id: 1,
    title: 'Education for All',
    description: 'Providing quality education to underprivileged children through our network of community schools and scholarship programs.',
    raised: 45000,
    goal: 100000,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Education'
  },
  {
    id: 2,
    title: 'Clean Water Initiative',
    description: 'Bringing clean, safe drinking water to rural communities through well installations and water purification systems.',
    raised: 78000,
    goal: 150000,
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Health'
  },
  {
    id: 3,
    title: 'Hunger Relief',
    description: 'Providing nutritious meals to food-insecure families through our food banks and community kitchen programs.',
    raised: 120000,
    goal: 200000,
    image: 'https://images.unsplash.com/photo-1507914630438-64d9f156eb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Hunger'
  },
  {
    id: 4,
    title: 'Women Empowerment',
    description: 'Empowering women through skill development, education, and microfinance programs to achieve economic independence.',
    raised: 65000,
    goal: 120000,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7baeadd125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Empowerment'
  },
  {
    id: 5,
    title: 'Healthcare Access',
    description: 'Providing medical care and health education to underserved communities through mobile clinics and health camps.',
    raised: 92000,
    goal: 180000,
    image: 'https://images.unsplash.com/photo-1505751172876-fa186e9d30c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Health'
  },
  {
    id: 6,
    title: 'Environmental Conservation',
    description: 'Protecting natural resources and promoting sustainable practices through community engagement and education.',
    raised: 35000,
    goal: 100000,
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Environment'
  }
];

const Causes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Education', 'Health', 'Hunger', 'Environment', 'Empowerment'];
  
  // Get category from URL params on component mount and when URL changes
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory('All');
    }
  }, [searchParams]);
  
  // Update URL when category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };
  
  const filteredCauses = selectedCategory === 'All' 
    ? causes 
    : causes.filter(cause => cause.category === selectedCategory);
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Causes</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the initiatives we're passionate about and join us in making a difference.
          </p>
        </div>
      </section>

      {/* Causes Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category === 'All' ? 'All Causes' : category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCauses.map((cause) => (
              <div 
                key={cause.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Link to={`/cause/${cause.id}`}>
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={cause.image} 
                      alt={cause.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-yellow-500 rounded-full">
                        {cause.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cause.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{cause.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Raised: ₹{cause.raised.toLocaleString()}</span>
                        <span>Goal: ₹{cause.goal.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
                          style={{ width: `${Math.min(100, (cause.raised / cause.goal) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <button 
                      className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `/cause/${cause.id}`;
                      }}
                    >
                      Donate Now
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-6">Have a Cause Close to Your Heart?</h2>
          <p className="text-xl mb-8">
            We're always looking for passionate individuals and organizations to partner with. 
            Let's work together to create positive change in our communities.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300"
          >
            Partner With Us
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Causes;