// src/pages/Donate.jsx
import { FaDonate, FaCreditCard, FaPaypal, FaBitcoin } from 'react-icons/fa';

const Donate = () => {
  const donationAmounts = [500, 1000, 2000, 5000];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-white bg-opacity-20 p-3 rounded-full mb-4">
            <FaDonate className="text-3xl" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Make a Donation</h1>
          <p className="text-xl">Your contribution can change lives</p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Select Donation Amount</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    className="border-2 border-purple-200 hover:border-purple-500 rounded-lg p-4 text-center transition-colors"
                  >
                    <span className="text-2xl font-bold">₹{amount.toLocaleString()}</span>
                    <p className="text-sm text-gray-500">One-time</p>
                  </button>
                ))}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                  <input
                    type="number"
                    placeholder="Custom Amount"
                    className="w-full text-center text-xl font-bold focus:outline-none"
                  />
                  <p className="text-sm text-gray-500">Enter amount</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 border rounded-lg">
                  <input
                    type="radio"
                    id="credit-card"
                    name="payment"
                    defaultChecked
                    className="h-5 w-5 text-purple-600"
                  />
                  <label htmlFor="credit-card" className="ml-3 flex items-center">
                    <FaCreditCard className="text-2xl mr-2" />
                    Credit/Debit Card
                  </label>
                </div>
                
                <div className="flex items-center p-4 border rounded-lg">
                  <input
                    type="radio"
                    id="paypal"
                    name="payment"
                    className="h-5 w-5 text-purple-600"
                  />
                  <label htmlFor="paypal" className="ml-3 flex items-center">
                    <FaPaypal className="text-2xl mr-2 text-blue-600" />
                    PayPal
                  </label>
                </div>
                
                <div className="flex items-center p-4 border rounded-lg">
                  <input
                    type="radio"
                    id="crypto"
                    name="payment"
                    className="h-5 w-5 text-purple-600"
                  />
                  <label htmlFor="crypto" className="ml-3 flex items-center">
                    <FaBitcoin className="text-2xl mr-2 text-orange-500" />
                    Cryptocurrency
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600" />
                    <span className="ml-2">Make this a monthly recurring donation</span>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium text-lg transition-colors"
                >
                  Donate Now
                </button>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  Your donation is secure and tax-deductible. Thank you for your generosity!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">5,000+</div>
              <p>Lives Impacted</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <p>Communities Served</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <p>Transparent Spending</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;