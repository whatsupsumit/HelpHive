import { useState } from 'react';
import HelpRequestForm from './HelpRequestForm';

const Help = () => {
  const [isHelpFormOpen, setIsHelpFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsHelpFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsHelpFormOpen(false);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text mb-6">
            Ask for Help
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Connect with your community for assistance. Whether it's a small favor or urgent help, your neighbors are here to support you.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 mb-8 border border-blue-200/50">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Help with Something?</h2>
              <p className="text-gray-600 mb-6">
                Create a help request and let your community know how they can assist you. From everyday tasks to emergency situations, we're here to help.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button 
                onClick={handleOpenForm}
                className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              >
                Create Help Request
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Help Categories */}
          {[
            {
              icon: "🚚",
              title: "Moving & Transportation",
              description: "Help with moving, rides, or transportation needs",
              examples: ["Moving furniture", "Airport rides", "Car trouble"]
            },
            {
              icon: "🛠️",
              title: "Home & Repairs",
              description: "Assistance with home projects and repairs",
              examples: ["Fixing things", "Yard work", "Home improvement"]
            },
            {
              icon: "🛒",
              title: "Shopping & Errands",
              description: "Help with shopping and running errands",
              examples: ["Grocery shopping", "Picking up items", "Deliveries"]
            },
            {
              icon: "👶",
              title: "Childcare & Pets",
              description: "Assistance with children and pet care",
              examples: ["Babysitting", "Pet walking", "School pickup"]
            },
            {
              icon: "🏥",
              title: "Health & Emergency",
              description: "Support during health issues or emergencies",
              examples: ["Medical appointments", "Emergency assistance", "Recovery help"]
            },
            {
              icon: "💼",
              title: "Professional & Skills",
              description: "Help with work, technology, or learning",
              examples: ["Tech support", "Resume help", "Tutoring"]
            }
          ].map((category, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-blue-200/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{category.description}</p>
              <div className="space-y-1">
                {category.examples.map((example, idx) => (
                  <span key={idx} className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8 border border-yellow-200/50">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">🤝 How to Get Help</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">📝</div>
                <h4 className="font-semibold text-gray-800 mb-2">1. Create Request</h4>
                <p className="text-sm text-gray-600">Describe what help you need and when</p>
              </div>
              <div>
                <div className="text-3xl mb-2">👥</div>
                <h4 className="font-semibold text-gray-800 mb-2">2. Community Sees</h4>
                <p className="text-sm text-gray-600">Your neighbors and community members view your request</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-semibold text-gray-800 mb-2">3. Get Responses</h4>
                <p className="text-sm text-gray-600">People reach out to offer their assistance</p>
              </div>
              <div>
                <div className="text-3xl mb-2">✅</div>
                <h4 className="font-semibold text-gray-800 mb-2">4. Connect & Help</h4>
                <p className="text-sm text-gray-600">Coordinate details and receive the help you need</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Request Form Modal */}
      <HelpRequestForm 
        isOpen={isHelpFormOpen} 
        onClose={handleCloseForm}
      />
    </div>
  );
};

export default Help;
