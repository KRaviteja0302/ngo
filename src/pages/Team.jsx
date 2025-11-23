import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Founder & Executive Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    bio: 'With over 15 years of experience in non-profit leadership, Sarah founded our organization with a vision to create sustainable change in communities worldwide.',
    social: {
      linkedin: '#',
      twitter: '#',
      facebook: '#'
    }
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    bio: 'Michael oversees our day-to-day operations, ensuring our programs run smoothly and effectively across all regions.',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 3,
    name: 'Aisha Mohammed',
    role: 'Program Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    bio: 'Aisha leads our program development and implementation, bringing innovative solutions to complex social challenges.',
    social: {
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Head of Fundraising',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    bio: 'David spearheads our fundraising initiatives, building relationships with donors and partners to support our mission.',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 5,
    name: 'Elena Rodriguez',
    role: 'Community Engagement Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    bio: 'Elena works directly with communities to understand their needs and ensure our programs are making a real impact.',
    social: {
      linkedin: '#',
      facebook: '#'
    }
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Volunteer Coordinator',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    bio: 'James manages our growing network of volunteers, matching their skills with opportunities to make the greatest impact.',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  }
];

const advisors = [
  {
    id: 1,
    name: 'Dr. Priya Patel',
    title: 'Public Health Expert',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'Robert Taylor',
    title: 'Education Specialist',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    name: 'Maria Garcia',
    title: 'International Development',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  }
];

export default function Team() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Passionate individuals working together to create lasting change in communities around the world.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated leaders bring diverse expertise and a shared commitment to our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm leading-relaxed">{member.bio}</p>
                      <div className="flex space-x-3 mt-4">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="text-white hover:text-yellow-400 transition-colors">
                            <FaLinkedin size={20} />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} className="text-white hover:text-yellow-400 transition-colors">
                            <FaTwitter size={20} />
                          </a>
                        )}
                        {member.social.facebook && (
                          <a href={member.social.facebook} className="text-white hover:text-yellow-400 transition-colors">
                            <FaFacebook size={20} />
                          </a>
                        )}
                        {member.social.instagram && (
                          <a href={member.social.instagram} className="text-white hover:text-yellow-400 transition-colors">
                            <FaInstagram size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-yellow-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advisory Board</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Industry experts who guide our strategic direction and program development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advisors.map((advisor) => (
              <div key={advisor.id} className="text-center">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{advisor.name}</h3>
                <p className="text-gray-600">{advisor.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 shadow-inner">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for passionate individuals to join our mission. Check out our current opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#open-positions" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300"
              >
                View Open Positions
              </a>
              <a 
                href="#volunteer" 
                className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-full transition-colors duration-300"
              >
                Volunteer With Us
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">
            Whether you're looking to volunteer, partner with us, or support our work, we'd love to hear from you.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300"
          >
            Get In Touch
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}