"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface ProjectCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  brand?: string;
  link?: string;
}

export interface IndustryCategory {
  id: string;
  name: string;
  label: string;
}

export interface IndustryProjectsSectionProps {
  title?: string;
  categories?: IndustryCategory[];
  projects?: ProjectCard[];
  onReadMore?: (projectId: string) => void;
  onCategoryChange?: (categoryId: string) => void;
  className?: string;
}

const IndustryProjectsSection: React.FC<IndustryProjectsSectionProps> = ({
  title = "Explore by Industry",
  categories = [
    { id: "all", name: "ALL INDUSTRIES", label: "All Industries" },
    { id: "automotive", name: "AUTOMOTIVE", label: "Automotive" },
    { id: "ecommerce", name: "E-COMMERCE", label: "E-Commerce" },
    { id: "education", name: "EDUCATION", label: "Education" },
    {
      id: "entertainment",
      name: "ENTERTAINMENT & MEDIA",
      label: "Entertainment & Media",
    },
    { id: "finance", name: "FINANCE", label: "Finance" },
    { id: "food", name: "FOOD & BEVERAGE", label: "Food & Beverage" },
    {
      id: "government",
      name: "GOVERNMENT & PUBLIC SERVICES",
      label: "Government & Public Services",
    },
    { id: "healthcare", name: "HEALTHCARE", label: "Healthcare" },
    { id: "hospitality", name: "HOSPITALITY", label: "Hospitality" },
    { id: "hr", name: "HR & RECRUITMENT", label: "HR & Recruitment" },
    { id: "legal", name: "LEGAL SERVICES", label: "Legal Services" },
    {
      id: "logistics",
      name: "LOGISTICS & TRANSPORTATION",
      label: "Logistics & Transportation",
    },
    { id: "manufacturing", name: "MANUFACTURING", label: "Manufacturing" },
    {
      id: "nonprofit",
      name: "NON-PROFIT ORGANIZATIONS",
      label: "Non-Profit Organizations",
    },
    { id: "realestate", name: "REAL ESTATE", label: "Real Estate" },
    { id: "retail", name: "RETAIL", label: "Retail" },
    { id: "technology", name: "TECHNOLOGY & SAAS", label: "Technology & SaaS" },
    { id: "travel", name: "TRAVEL & TOURISM", label: "Travel & Tourism" },
  ],
  projects = [
    {
      id: "education-1",
      title: "Project Education",
      description:
        "Comprehensive educational platform with interactive learning modules and student management system.",
      image: "/placeholder.svg?height=200&width=300",
      category: "education",
      brand: "EduTech",
    },
    {
      id: "ecommerce-1",
      title: "Project E-Commerce",
      description:
        "Modern e-commerce solution with advanced inventory management and customer analytics.",
      image: "/placeholder.svg?height=200&width=300",
      category: "ecommerce",
      brand: "ShopFlow",
    },
    {
      id: "automotive-1",
      title: "Project Automotive",
      description:
        "Automotive management system with service scheduling and parts inventory tracking.",
      image: "/placeholder.svg?height=200&width=300",
      category: "automotive",
      brand: "AutoPro",
    },
    {
      id: "healthcare-1",
      title: "Healthcare Management",
      description:
        "Patient management system with appointment scheduling and medical records integration.",
      image: "/placeholder.svg?height=200&width=300",
      category: "healthcare",
      brand: "MedFlow",
    },
    {
      id: "finance-1",
      title: "Financial Dashboard",
      description:
        "Comprehensive financial analytics platform with real-time reporting and forecasting.",
      image: "/placeholder.svg?height=200&width=300",
      category: "finance",
      brand: "FinTech",
    },
    {
      id: "retail-1",
      title: "Retail Analytics",
      description:
        "Advanced retail analytics platform with sales tracking and customer behavior insights.",
      image: "/placeholder.svg?height=200&width=300",
      category: "retail",
      brand: "RetailPro",
    },
  ],
  onReadMore,
  onCategoryChange,
  className = "",
}) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  const handleReadMore = (projectId: string) => {
    // Navigate to project detail page
    // router.push(`/projects/${projectId}`);
    onReadMore?.(projectId);
  };

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {title}
          </h2>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-teal-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => handleReadMore(project.id)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                {project.brand && (
                  <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    {project.brand}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReadMore(project.id);
                  }}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              No projects found for this industry.
            </p>
            <button
              onClick={() => handleCategoryChange("all")}
              className="mt-4 text-teal-500 hover:text-teal-600 font-medium"
            >
              View all projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default IndustryProjectsSection;
