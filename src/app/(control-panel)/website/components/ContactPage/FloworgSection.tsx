import React from "react";
import { motion } from "framer-motion";

const FloworgSection: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 mb-8 lg:mb-0 w-full lg:w-1/2"
        >
          <motion.img
            src="https://media.istockphoto.com/id/1435220822/photo/african-american-software-developer.jpg?s=612x612&w=0&k=20&c=JESGRQ2xqRH9ZcJzvZBHZIZKVY8MDejBSOfxeM-i5e4="
            alt="AI Technology Professional"
            className="w-full h-48 object-cover rounded-lg col-span-1 row-span-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="https://media.istockphoto.com/id/1406674466/photo/big-data-connection-technology-concept.jpg?s=612x612&w=0&k=20&c=OPoKST8TVjklrGs89VnPDduGvp9zwiMXnavSruKMLyI="
            alt="Hands with floating app icons"
            className="w-full h-48 object-cover rounded-lg col-span-1 row-span-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="https://media.istockphoto.com/id/1431862546/photo/technology-network-background-concept.jpg?s=612x612&w=0&k=20&c=4ZlkcEjTY8q7OAkoCTugwK7gTMV0dSeX6Gn-mRpXjJY="
            alt="Digital network visualization"
            className="w-full h-48 object-cover rounded-lg col-span-1 row-span-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=612x612&w=0&k=20&c=2GLUy6eqCSr0NFRO8CHm8_PUMy9Qc8ryqcsRoe0DEYM="
            alt="Digital interface interaction"
            className="w-full h-48 object-cover rounded-lg col-span-1 row-span-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-16"
        >
          <h2 className="text-5xl font-bold text-foreground mb-4 tracking-tight">Floworg</h2>
          <p className="text-muted-foreground mb-8 text-lg">Automate Your Success</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-400 hover:bg-teal-500 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-200 shadow-lg"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FloworgSection;