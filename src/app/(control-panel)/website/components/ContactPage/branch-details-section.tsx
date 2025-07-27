import React from "react";
import { motion } from "framer-motion";

const BranchDetailsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-800 p-6 rounded-lg border-2 border-teal-500">
            <h2 className="text-2xl font-bold text-teal-500 text-center mb-6">
              Choose Your Country and Get Your Branch Details
            </h2>
            <input
              type="text"
              className="w-full p-2 mb-6 bg-gray-700 text-white border-none rounded"
              value="Guatemala (Guatemala)"
              readOnly
            />
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-semibold text-teal-400 mb-2">Floworg USA</h3>
              <p className="text-gray-300"><span className="text-teal-400">Phones:</span> +1 123 456 7890</p>
              <p className="text-gray-300"><span className="text-teal-400">WhatsApp:</span> +1 987 654 3210</p>
              <p className="text-gray-300"><span className="text-teal-400">Branch Email:</span> USA@Floworg.AI</p>
              <p className="text-gray-300"><span className="text-teal-400">Languages:</span> English, Spanish (Español)</p>
              <p className="text-gray-300"><span className="text-teal-400">Branch Location:</span> Delaware, USA</p>
              <p className="text-gray-300"><span className="text-teal-400">Working Days:</span> Monday to Friday</p>
              <p className="text-gray-300"><span className="text-teal-400">Branch Hours (UTC):</span> 14:00 - 23:00</p>
              <p className="text-gray-300"><span className="text-teal-400">Local Hours:</span> 08:00 - 17:00</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BranchDetailsSection;