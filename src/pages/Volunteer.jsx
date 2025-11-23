// src/pages/Volunteer.jsx
import { FaHandsHelping, FaCalendarAlt, FaMapMarkerAlt, FaUserFriends } from 'react-icons/fa';

const Volunteer = () => {
  const opportunities = [
    {
      id: 1,
      title: "Community Outreach",
      icon: <FaUserFriends className="text-3xl text-blue-600" />,
      description: "Help us reach out to communities in need and spread awareness about our causes."
    },
    {
      id: 2,
      title: "Event Volunteering",
      icon: <FaCalendarAlt className="text-3xl text-green-600" />,
      description: "Assist in organizing and managing our fundraising and awareness events."
    },
    {
      id: 3,
      title: "Field Work",
      icon: <FaMapMarkerAlt className="text-3xl text-purple-600" />,
      description: "Get involved in on-ground activities and make a direct impact in the field."
    },
    {
      id: 4,
      title: "Mentorship",
      icon: <FaHandsHelping className="text-3xl text-orange-600" />,
      description: "Share your skills and knowledge by mentoring those in need of guidance."
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Become a Volunteer</h1>
          <p className="text-xl">Join us in making a difference in people's lives</p>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Volunteer Opportunities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {opportunities.map((opp) => (
              <div key={opp.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{opp.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{opp.title}</h3>
                <p className="text-gray-600">{opp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">Join Our Volunteer Team</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Area of Interest *</label>
                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Select an option</option>
                  <option>Community Outreach</option>
                  <option>Event Volunteering</option>
                  <option>Field Work</option>
                  <option>Mentorship</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Why do you want to volunteer with us? *</label>
                <textarea
                  rows="4"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;