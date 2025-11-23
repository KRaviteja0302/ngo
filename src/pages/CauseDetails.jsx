import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaRupeeSign, FaHandHoldingHeart, FaUsers } from 'react-icons/fa';

// Import or define the causes array (same as in Causes.jsx)
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

const CauseDetails = () => {
  const { id } = useParams();
  const cause = causes.find(c => c.id === parseInt(id));

  if (!cause) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Cause Not Found</h1>
          <Link 
            to="/causes" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft className="mr-2" />
            Back to Causes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          to="/causes" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft className="mr-2" />
          Back to Causes
        </Link>
      </div>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{cause.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{cause.description}</p>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      ₹{(cause.raised).toLocaleString()}
                    </div>
                    <p className="text-gray-600">Raised of ₹{cause.goal.toLocaleString()}</p>
                  </div>
                  <div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full" 
                        style={{ width: `${Math.min(100, (cause.raised / cause.goal) * 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {Math.round((cause.raised / cause.goal) * 100)}% of goal
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                Donate Now
              </button>
            </div>
            
            <div className="mt-10 lg:mt-0">
              <img 
                src={cause.image} 
                alt={cause.title} 
                className="w-full h-96 object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Cause</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaRupeeSign className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Funding Goal</h3>
                  <p className="text-gray-600">₹{cause.goal.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaHandHoldingHeart className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Category</h3>
                  <p className="text-gray-600">{cause.category}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaUsers className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Beneficiaries</h3>
                  <p className="text-gray-600">500+ People</p>
                </div>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <h3>How Your Donation Helps</h3>
              <p>
                Your generous donation will help us continue our mission to {cause.description.toLowerCase()}
                Every contribution, no matter the size, makes a difference in the lives of those we serve.
              </p>
              
              <h3>Our Approach</h3>
              <p>
                We take a comprehensive approach to {cause.title}, ensuring that our programs are sustainable, 
                impactful, and tailored to the specific needs of the communities we serve. 
                Our team works closely with local partners to maximize the impact of every donation.
              </p>
              
              <h3>Impact So Far</h3>
              <ul>
                <li>Successfully raised ₹{cause.raised.toLocaleString()} towards our goal</li>
                <li>Helped over 500 individuals in need</li>
                <li>Established 10+ community programs</li>
                <li>Trained 50+ local volunteers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your support can help us continue this important work and create lasting change in our communities.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full inline-flex items-center transition-colors duration-300">
            Donate Now
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CauseDetails;
