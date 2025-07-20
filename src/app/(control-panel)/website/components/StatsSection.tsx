import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const stats = [
    { value: '9K+', label: 'Integrations' },
    { value: '16+', label: 'Communication\nChannels' },
    { value: '800+', label: 'Enterprise Clients' },
    { value: '50M+', label: 'Messages Per\nMonth' },
    { value: '2K+', label: 'Active Chats' },
  ];

  // Trigger once when section comes into view
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="bg-[#29303d] text-white py-16 flex gap-6 justify-center items-center"
    >
      <div className="text-center">
        <h2 className="text-2xl font-semibold flex flex-col">
          Floworg 360's <br className="sm:hidden" />
        </h2>
        <div className="border-t-2 border-[#1ad7ad] w-full mx-auto my-1"></div>
        <h2 className="text-2xl font-semibold flex flex-col">
          Story in Numbers!<br className="sm:hidden" />
        </h2>
      </div>
      <div className="flex justify-center flex-wrap gap-10 px-4">
        {stats.map((stat, index) => {
          const numericPart = parseFloat(stat.value.replace(/[^\d.]/g, ''));
          const suffix = stat.value.match(/[^\d.]+$/)?.[0] || '';

          return (
            <div key={index} className="text-center">
              <div className="border-t-2 border-[#1ad7ad] w-10 mx-auto mb-2"></div>
              <h3 className="text-2xl font-bold">
                {inView ? (
                  <CountUp
                    end={numericPart}
                    duration={3}
                    separator=","
                    suffix={suffix}
                  />
                ) : (
                  '0' + suffix
                )}
              </h3>
              <p className="text-sm whitespace-pre-line">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;
