
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const TestimonialsSection: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const testimonials = [
//     {
//       name: "Hanna Donin",
//       role: "Creative Expert",
//       avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80",
//       quote:
//         "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.",
//     },
//     {
//       name: "John Smith",
//       role: "Marketing Director",
//       avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80",
//       quote:
//         "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.",
//     },
//     {
//       name: 'Sarah Johnson',
//       role: 'CEO, TechStart Inc.',
//       avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
//       rating: 5,
//       content: 'Flowerq transformed our business operations completely. The automation workflows saved us countless hours and improved our efficiency by 250%. Highly recommended!',
//     }
//   ];

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
//   };

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
//           {/* Left Side - Header and Navigation */}
//           <div>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <span className="text-[#1ad7ad] text-sm font-semibold tracking-wider uppercase mb-4 block">
//                 TESTIMONIAL
//               </span>

//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
//                 <span className="text-[#1ad7ad]">What</span>{" "}
//                 <span className="text-gray-800">
//                   Our
//                   <br />
//                   Customer Says
//                 </span>
//               </h2>

//               <p className="text-gray-600 leading-relaxed text-base mb-8 max-w-md">
//                 It is a long established fact content of a page when looking at its layout.
//               </p>

//               {/* Navigation Arrows */}
//               <div className="flex gap-4">
//                 <button
//                   onClick={handlePrevious}
//                   className="w-12 h-12 border-2 border-gray-300 rounded-full text-gray-600 hover:border-[#1ad7ad] hover:text-[#1ad7ad] hover:bg-purple-50 transition-all duration-300 flex items-center justify-center"
//                 >
//                   <ChevronLeft className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={handleNext}
//                   className="w-12 h-12 border-2 border-gray-300 rounded-full text-gray-600 hover:border-[#1ad7ad] hover:text-[#1ad7ad] hover:bg-purple-50 transition-all duration-300 flex items-center justify-center"
//                 >
//                   <ChevronRight className="w-5 h-5" />
//                 </button>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side - Testimonials */}
//           <div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {testimonials
//                 .slice(currentIndex, currentIndex + 2)
//                 .map((testimonial, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.2 }}
//                     className="h-full"
//                   >
//                     <div className="bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 relative">
//                       <p className="text-gray-400 italic leading-relaxed mb-8 text-sm">
//                         "{testimonial.quote || testimonial.content}"
//                       </p>
//                       <div className="flex items-center gap-3">
//                         <img
//                           src={testimonial.avatar}
//                           alt={testimonial.name}
//                           className="w-15 h-15 rounded-full border-3 border-gray-100"
//                         />
//                         <div className="flex-1">
//                           <h4 className="font-semibold text-gray-800 text-lg mb-1">
//                             {testimonial.name}
//                           </h4>
//                           <p className="text-gray-400 text-sm">{testimonial.role}</p>
//                         </div>
//                         <div className="w-10 h-10 bg-[#1ad7ad] rounded-full flex items-center justify-center flex-shrink-0">
//                           <span className="text-white text-xl font-semibold">"</span>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}


//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Hanna Donin",
      role: "Creative Expert",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80",
      quote: "Flowerq's tools streamlined our creative process, saving time and boosting output by 200%. Highly recommended!",
    },
    {
      name: "John Smith",
      role: "Marketing Director",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80",
      quote: "Flowerq's platform enhanced our campaigns, cutting costs and improving results by 250%. Truly exceptional!",
    },
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80',
      quote: "Flowerq transformed our operations with automation, saving hours and boosting efficiency by 250%. Amazing!",
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {/* Left Side - Header and Navigation */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-[#1ad7ad] text-sm font-semibold tracking-wider uppercase mb-4 block">
                TESTIMONIAL
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="text-[#1ad7ad]">What</span>{" "}
                <span className="text-gray-800">
                  Our
                  <br />
                  Customer Says
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed text-base mb-8 max-w-md">
                It is a long established fact content of a page when looking at its layout.
              </p>

              {/* Navigation Arrows */}
              <div className="flex gap-4">
                <button
                  onClick={handlePrevious}
                  className="w-12 h-12 border-2 border-gray-300 rounded-full text-gray-600 hover:border-[#1ad7ad] hover:text-[#1ad7ad] hover:bg-purple-50 transition-all duration-300 flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 border-2 border-gray-300 rounded-full text-gray-600 hover:border-[#1ad7ad] hover:text-[#1ad7ad] hover:bg-purple-50 transition-all duration-300 flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Testimonials */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {testimonials
                .slice(currentIndex, currentIndex + 2)
                .map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="h-full"
                  >
                    <div className="flex flex-col items-center h-full bg-gray-100 rounded-2xl p-6 shadow-lg">
                      {/* Speech Bubble */}
                      <div className="relative bg-white rounded-2xl p-6 shadow-lg mb-6 max-w-xs">
                        <p className="text-gray-500 italic leading-relaxed text-sm text-center">
                          "{testimonial.quote}"
                        </p>
                        {/* Speech bubble tail */}
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                          <div className="w-6 h-6 bg-white rotate-45 shadow-lg"></div>
                        </div>
                      </div>
                      
                      {/* Author info */}
                      <div className="flex flex-col items-center text-center">
                        <div className="relative mb-4">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover shadow-lg"
                          />
                          {/* Smaller quote icon overlay */}
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-lg font-bold">"</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;