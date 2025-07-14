import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '9K+', label: 'Integrations' },
    { value: '16+', label: 'Communication\nChannels' },
    { value: '800+', label: 'Enterprise Clients' },
    { value: '50M+', label: 'Messages Per\nMonth' },
    { value: '2K+', label: 'Active Chats' },
  ];

  return (
    <div className="bg-[#212A38] text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold">
          Floworg 360's <br className="sm:hidden" />
          <span className="text-teal-400">Story in Numbers!</span>
        </h2>
      </div>
      <div className="flex justify-center flex-wrap gap-10 px-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="border-t-2 border-teal-400 w-10 mx-auto mb-2"></div>
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-sm whitespace-pre-line">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
