"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export interface LeadsFormData {
  fullName: string;
  company: string;
  mobile: string;
  email: string;
}

export interface LeadsFormProps {
  onSubmit?: (data: LeadsFormData) => void;
  className?: string;
}

const LeadsForm: React.FC<LeadsFormProps> = ({ onSubmit, className = "" }) => {
  const [formData, setFormData] = useState<LeadsFormData>({
    fullName: "",
    company: "",
    mobile: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${className}`}
    >
      {/* Left Side - Business Info */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="mb-6">
          <span className="text-purple-500 font-semibold text-sm">
            ⭐ Unlock AI for Smarter Businesses
          </span>
          <h3 className="text-3xl font-bold mb-4">
            Transform Your <br />
            <span className="text-purple-500">Business with AI</span>
          </h3>
          <p className="text-gray-600 mb-6">
            Experience the power of AI-driven strategies that transform your
            workflow, automate repetitive tasks, and boost productivity.
          </p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl">⭐</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold">4.5/5</span>
                <div className="flex text-yellow-400">★★★★★</div>
              </div>
              <p className="text-sm text-gray-600">25K Customer Trust Us</p>
            </div>
          </div>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Request Demo
          </button>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="space-y-6">
        <div className="text-center mb-8">
          <span className="text-teal-500 font-semibold text-sm uppercase tracking-wide">
            Get Started
          </span>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Leads <span className="text-teal-500">Forum</span>
          </h3>
          <p className="text-gray-600 text-lg">
            Fill out the form below and let's discuss how we can help transform
            your business.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            required
          />
                <PhoneInput
        international
        defaultCountry="PK"
        value={formData.mobile}
        onChange={(value) =>
          setFormData((prev) => ({ ...prev, mobile: value || "" }))
        }
        className="react-phone-input w-full"
        required
      />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            required
          />
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default LeadsForm;
