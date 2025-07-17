import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ProjectSummarySection: React.FC = () => {
  return (
    <section className="py-0 bg-white">
      {/* Teal Header */}
      <div className="bg-gradient-to-r from-teal-600 to-green-500 py-8">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CheckCircle className="w-12 h-12 text-white mx-auto mb-4" />
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-bold mb-2">
              <span className="text-teal-500">Project</span>{' '}
              <span className="text-gray-900">Summary</span>
            </h1>

            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                I will organize the workflow of this website into a comprehensive and working plan and then you will give you a complete account of the 
                system and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, 
                dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter 
                consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because 
                occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious 
                physical exercise.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him 
                some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
              </p>
            </div>

            {/* Image Section */}
            <div className="relative mb-8">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Project collaboration"
                  className="w-full h-80 object-cover"
                />
                
                {/* Purple overlay text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-purple-600 bg-opacity-90 px-8 py-4 rounded-lg">
                    <h2 className="text-white text-2xl font-bold">
                      Images/ Videos
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Get a Personalized Offer
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSummarySection;