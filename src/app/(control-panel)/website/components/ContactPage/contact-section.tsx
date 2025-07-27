import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Users } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 w-full">
      <div className="px-4 text-center max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 mb-12"
        >
          Floworg – Contact Us
        </motion.h2>
      </div>

      {/* Full-width contact info section */}
      <div className="bg-gray-900 py-8 px-4 w-full flex flex-wrap justify-center gap-6">
        {[
          {
            icon: <FaWhatsapp className="w-6 h-6 text-gray-400" />,
            label: "Whatsapp",
            value: "+18643582909",
          },
          {
            icon: <Mail className="w-6 h-6 text-gray-400" />,
            label: "Email",
            value: "Support@Floworg.AI",
          },
          {
            icon: <Phone className="w-6 h-6 text-gray-400" />,
            label: "Global Call Center",
            value: "+1 864-385-2909",
          },
          {
            icon: <Users className="w-6 h-6 text-gray-400" />,
            label: "Main Office",
            value:
              "Suite 23799, 1111B South Governors Avenue Dover, Kent County, DE 19904 USA",
          },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg p-6 text-center flex-1 min-w-[250px] max-w-sm"
          >
            <div className="bg-white p-3 rounded-full inline-block mb-2">
              {item.icon}
            </div>
            <p className="text-sm text-gray-400">{item.label}</p>
            <p className="text-teal-400 font-medium break-words">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
