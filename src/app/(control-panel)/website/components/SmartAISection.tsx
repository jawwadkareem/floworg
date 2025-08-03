

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Video } from 'lucide-react';

// const SmartAISection: React.FC = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="flex flex-col lg:flex-row justify-between items-start mb-12"
//         >
//           <div className="flex-1 mb-8 lg:mb-0">
//             {/* Features Tag */}
//             <div className="inline-block bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
//               Features
//             </div>

//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
//               Excellent Response with{" "}
//               <span className="text-teal-500">Smart AI</span>
//             </h2>

//             <p className="text-gray-600 max-w-lg text-base leading-relaxed">
//               Refine chatbot intelligence through continuous learning and customization options
//             </p>
//           </div>

//           {/* Explore Features Button */}
//           <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mt-8 lg:mt-16">
//             Explore Features
//           </button>
//         </motion.div>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Multi-Language Support */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//             whileHover={{ y: -5 }}
//             className="h-full"
//           >
//             <div className="bg-white rounded-2xl border border-teal-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
//               <div className="p-6">
//                 {/* Chat Interface Mockup */}
//                 <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200 relative">
//                   {/* AI Icon */}
//                   <div className="absolute top-3 right-3 bg-teal-600 rounded px-2 py-1 flex items-center justify-center">
//                     <span className="text-white text-xs font-semibold">AI</span>
//                   </div>

//                   <p className="text-gray-800 text-sm font-medium mb-2">
//                     Estimado equipo:
//                   </p>
//                   <p className="text-gray-600 text-xs leading-relaxed mb-3">
//                     No puedo iniciar sesión en mi panel de control para consultar el estado de mi pedido. ¿Podrían
//                     informarme cuál es el problema?
//                   </p>
//                   <p className="text-gray-400 text-xs mb-2">
//                     Gracias Por mensaje
//                   </p>
//                   <div className="text-right">
//                     <span className="text-gray-400 text-xs">13:45</span>
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-semibold text-teal-600 mb-3">
//                   Multi-Language Support
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   Connect with global users with auto-translates messages, ensuring smooth conversations in multiple
//                   languages.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* AI Training Center */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             whileHover={{ y: -5 }}
//             className="h-full"
//           >
//             <div className="bg-white rounded-2xl border border-teal-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
//               <div className="p-6">
//                 {/* Training Interface Mockup */}
//                 <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
//                   <h4 className="text-gray-800 text-base font-semibold mb-3">
//                     AI Training Center
//                   </h4>
//                   <div className="space-y-2">
//                     <div className="flex justify-between items-center py-2 border-b border-gray-200">
//                       <span className="text-gray-800 text-sm">AI Knowledgebase Data</span>
//                     </div>
//                     <div className="flex justify-between items-center py-2 border-b border-gray-200">
//                       <span className="text-gray-600 text-sm">Website resources</span>
//                     </div>
//                     <div className="flex justify-between items-center py-2">
//                       <span className="text-gray-600 text-sm">File resources</span>
//                     </div>
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-semibold text-teal-600 mb-3">
//                   AI Training Center
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   Continuously improve your chatbot's intelligence, dedicated space to train responses for better
//                   interactions.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Personal Customer Insights */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             whileHover={{ y: -5 }}
//             className="h-full"
//           >
//             <div className="bg-white rounded-2xl border border-teal-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
//               <div className="p-6">
//                 {/* Customer Insights Mockup */}
//                 <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
//                   {/* User Profile */}
//                   <div className="flex items-center mb-3">
//                     <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center mr-3">
//                       <span className="text-purple-600 font-semibold text-sm">LA</span>
//                     </div>
//                     <div>
//                       <p className="text-gray-800 font-semibold text-sm">Lucy Andriana</p>
//                     </div>
//                   </div>

//                   <p className="text-gray-800 text-sm font-medium mb-2">Chat Activity</p>
//                   <div className="bg-gray-200 rounded p-3">
//                     <p className="text-gray-600 text-xs">
//                       Recent interactions and engagement metrics
//                     </p>
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-semibold text-teal-600 mb-3">
//                   Personal Customer Insights
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   Gain valuable insights with AI that learns customer preferences, providing engaging support
//                   experience every time.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SmartAISection;


import React from 'react';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';

const SmartAISection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start mb-12"
        >
          <div className="flex-1 mb-8 lg:mb-0">
            {/* Features Tag */}
            <div className="inline-block bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              Features
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Excellent Response with{" "}
              <span className="text-teal-500">Smart AI</span>
            </h2>

            <p className="text-gray-600 max-w-lg text-base leading-relaxed">
              Refine chatbot intelligence through continuous learning and customization options
            </p>
          </div>

          {/* Explore Features Button */}
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mt-8 lg:mt-16">
            Explore Features
          </button>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Multi-Language Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <div className="bg-white rounded-2xl border border-teal-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="p-6 flex flex-col flex-1">
                {/* Chat Interface Mockup */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200 relative min-h-[140px] flex flex-col justify-between">
                  {/* AI Icon */}
                  <div className="absolute top-3 right-3 bg-teal-600 rounded px-2 py-1 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">AI</span>
                  </div>

                  <div>
                    <p className="text-gray-800 text-sm font-medium mb-2">
                      Estimado equipo:
                    </p>
                    <p className="text-gray-600 text-xs leading-relaxed mb-3">
                      No puedo iniciar sesión en mi panel de control para consultar el estado de mi pedido. ¿Podrían
                      informarme cuál es el problema?
                    </p>
                    <p className="text-gray-400 text-xs mb-2">
                      Gracias Por mensaje
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 text-xs">13:45</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-teal-600 mb-3">
                    Multi-Language Support
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Connect with global users with auto-translates messages, ensuring smooth conversations in multiple
                    languages.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Training Center */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <div className="bg-white rounded-2xl border border-teal-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="p-6 flex flex-col flex-1">
                {/* Training Interface Mockup */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200 relative min-h-[140px] flex flex-col justify-between">
                  {/* AI Icon */}
                  <div className="absolute top-3 right-3 bg-teal-600 rounded px-2 py-1 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">AI</span>
                  </div>

                  <div>
                    <p className="text-gray-800 text-sm font-medium mb-2">
                      Training Data Sources
                    </p>
                    <p className="text-gray-600 text-xs leading-relaxed mb-3">
                      Configure AI Knowledgebase, website resources, and file resources to enhance chatbot responses.
                    </p>
                    <p className="text-gray-400 text-xs mb-2">
                      Improve response accuracy
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 text-xs">Updated: 14:20</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-teal-600 mb-3">
                    AI Training Center
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Continuously improve your chatbot's intelligence, dedicated space to train responses for better
                    interactions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Personal Customer Insights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <div className="bg-white rounded-2xl border border-teal-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="p-6 flex flex-col flex-1">
                {/* Customer Insights Mockup */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200 relative min-h-[140px] flex flex-col justify-between">
                  {/* AI Icon */}
                  <div className="absolute top-3 right-3 bg-teal-600 rounded px-2 py-1 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">AI</span>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center mr-3">
                        <span className="text-purple-600 font-semibold text-sm">LA</span>
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold text-sm">Lucy Andriana</p>
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm font-medium mb-2">Chat Activity</p>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Recent interactions and engagement metrics
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 text-xs">13:45</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-teal-600 mb-3">
                    Personal Customer Insights
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Gain valuable insights with AI that learns customer preferences, providing engaging support
                    experience every time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmartAISection;