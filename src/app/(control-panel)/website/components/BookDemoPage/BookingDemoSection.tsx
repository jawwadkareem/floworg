import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BookingDemoSection: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(24);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('June, 2025');
  const [currentStep, setCurrentStep] = useState(1);

  // Time slots organized exactly as shown in images
  const eveningSlots = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM',
    '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
    '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM',
    '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM'
  ];

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Book a Live Demo with the Experts at Floworg
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Book your appointment in a few simple steps. Choose a service, pick your date and time, and fill in your details. See you soon!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Service Selection Steps */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Step 1 - Business Demo */}
              <div 
                className={`bg-white rounded-lg p-4 border-l-4 shadow-sm cursor-pointer transition-all ${
                  currentStep === 1 ? 'border-teal-500' : 'border-gray-300'
                }`}
                onClick={() => handleStepClick(1)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    currentStep >= 1 ? 'bg-teal-500' : 'bg-gray-300'
                  }`}></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Demo</h3>
                    <p className="text-sm text-gray-600">30 mins</p>
                  </div>
                </div>
              </div>

              {/* Step 2 - Call a Time */}
              <div 
                className={`bg-white rounded-lg p-4 border-l-4 shadow-sm cursor-pointer transition-all ${
                  currentStep === 2 ? 'border-teal-500' : 'border-gray-300'
                }`}
                onClick={() => handleStepClick(2)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    currentStep >= 2 ? 'bg-teal-500' : 'bg-gray-300'
                  }`}></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Call a Time</h3>
                  </div>
                </div>
              </div>

              {/* Step 3 - Your Info */}
              <div 
                className={`bg-white rounded-lg p-4 border-l-4 shadow-sm cursor-pointer transition-all ${
                  currentStep === 3 ? 'border-teal-500' : 'border-gray-300'
                }`}
                onClick={() => handleStepClick(3)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    currentStep >= 3 ? 'bg-teal-500' : 'bg-gray-300'
                  }`}></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Your Info</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Calendar and Time Selection */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg w-full"
            >
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">New response will be booked</h3>
                </div>
                <div className="flex items-center gap-4">
                  <select 
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option>June, 2025</option>
                    <option>July, 2025</option>
                    <option>August, 2025</option>
                  </select>
                  <span className="text-sm text-gray-600">Asia/Jerusalem - GMT+03:00</span>
                </div>
              </div>

              {/* Calendar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="flex gap-2">
                    {[22, 23, 24, 25, 26, 27, 28].map((date) => (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                          selectedDate === date
                            ? 'bg-teal-500 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex justify-center gap-8 text-sm text-gray-600 mb-4">
                  <span>Start Time</span>
                  <span>End Time</span>
                </div>
              </div>

              {/* Time Slots Section */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Evening</h4>
                  <div className="grid grid-cols-5 gap-2">
                    {eveningSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`px-3 py-2 text-sm rounded border transition-all duration-200 ${
                          selectedTime === time
                            ? 'bg-teal-500 text-white border-teal-500 shadow-md'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-teal-300 hover:bg-teal-50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* High Demand Message */}
                <div className="text-center py-4">
                  <p className="text-sm text-gray-600">
                    No apologies for limited availability due to high demand for live demos
                  </p>
                </div>

                {/* Book Button */}
                <div className="text-center">
                  <button 
                    className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      selectedTime 
                        ? 'bg-teal-500 hover:bg-teal-600 text-white shadow-lg hover:shadow-xl' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!selectedTime}
                    onClick={() => {
                      if (selectedTime) {
                        alert(`Appointment booked for ${selectedMonth} ${selectedDate} at ${selectedTime}`);
                      }
                    }}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingDemoSection;
