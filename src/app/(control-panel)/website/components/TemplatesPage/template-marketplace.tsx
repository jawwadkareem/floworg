import React, { useState } from "react";
import { Button } from "@mui/material";
import { Badge } from "@mui/material";

interface Template {
  id: number;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
  featured?: boolean;
}

const templates: Template[] = [
  {
    id: 1,
    title: "SHOPIFY FOOTWEAR STORE",
    description: "Ecommerce chatbot for a Footwear store",
    price: "Free",
    category: "Ecommerce",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    title: "BABY CLOTHING STORE",
    description: "Baby Clothing Store with Configuration",
    price: "$49",
    category: "Ecommerce",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    title: "HEALTH & BEAUTY SHOP CHATBOT",
    description: "Health & Beauty shop chatbot",
    price: "$59",
    category: "Health",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=200&fit=crop"
  },
  {
    id: 4,
    title: "SHOPIFY CHATBOT AUTOMATION",
    description: "Shopify Chatbot Automation",
    price: "Free",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop"
  },
  {
    id: 5,
    title: "DYNAMIC QUIZ CHATBOT",
    description: "Dynamic quiz chatbot",
    price: "$49",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=200&fit=crop"
  },
  {
    id: 6,
    title: "CHATBOT FOR YOUTUBE CHANNELS",
    description: "Chatbot for Youtube Channels",
    price: "$49",
    category: "Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=200&fit=crop"
  },
  {
    id: 7,
    title: "HOTEL BOOKING CHATBOT TEMPLATE",
    description: "Hotel Booking Chatbot Template",
    price: "$59",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&h=200&fit=crop"
  },
  {
    id: 8,
    title: "CHATBOT FOR REAL ESTATE COMPANIES",
    description: "Chatbot for Real Estate Companies",
    price: "$49",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop"
  },
  {
    id: 9,
    title: "SPA & FITNESS CLUB BOT TEMPLATE",
    description: "Spa & Fitness Club Bot Template",
    price: "$59",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
  }
];

const categories = [
  "All",
  "Gym",
  "Real Estate",
  "Medical",
  "Lawyer",
  "Course",
  "Games",
  "Bot",
  "Musicians",
  "Dating",
  "Landing",
  "Hotel",
  "Quote",
  "Nightlife",
  "Webshop",
  "Development",
  "Utilities",
  "Communication & Software",
  "Shopify",
  "Retail",
  "Product",
  "Marketing",
  "Management",
  "Crypto",
  "Lead Generation",
  "Health",
  "Productivity",
  "Fashion",
  "Fitness",
  "DigitalFlow AI",
  "Customer Support",
  "Banking & Financing",
  "Auto",
  "Art",
  "Agency",
  "Education",
  "Finance",
  "Car Dealer",
  "Event",
  "Healthcare",
  "Discount and Promotions",
  "Vacation",
  "Mortgage",
  "Restaurant",
  "Real Estate"
];

const priceRanges = [
  "Free Templates",
  "Paid Templates",
  "$20 - $39",
  "$39+"
];

const TemplateMarketplace: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");

  // Filter templates based on category and price
  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    const matchesPrice =
      selectedPrice === "All" ||
      (selectedPrice === "Free Templates" && template.price === "Free") ||
      (selectedPrice === "Paid Templates" && template.price !== "Free") ||
      (selectedPrice === "$20 - $39" && parseInt(template.price.replace("$", "")) >= 20 && parseInt(template.price.replace("$", "")) <= 39) ||
      (selectedPrice === "$39+" && parseInt(template.price.replace("$", "")) >= 39);
    return matchesCategory && matchesPrice;
  });

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-blue-900 mb-4">
            Get started easily with templates
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the template and install the template in all the 15+ channels we support. You
            can easily customize for your own needs! Join our referral program to earn the points to
            redeem premium templates!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="space-y-6">
              {/* Pricing Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Pricing</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="pricing"
                        value={range}
                        checked={selectedPrice === range}
                        onChange={(e) => setSelectedPrice(e.target.value)}
                        className="text-teal-500"
                      />
                      <span className="text-sm text-gray-600">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
                <div className="space-y-1 max-h-96 overflow-y-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-2 py-1 rounded text-sm transition-colors ${
                        selectedCategory === category
                          ? "bg-teal-500 text-white"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Template Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <div
                  key={template.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-2">
                      <span className="text-xs text-gray-500">
                        {template.category} chatbot for a {template.category.toLowerCase()} store
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm text-gray-900 mb-2">
                      {template.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3">
                      {template.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-gray-900">
                        {template.price}
                      </span>
                      <Button
                        variant="contained"
                        size="small"
                        className="text-xs bg-teal-500 hover:bg-teal-600"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
              <Button
                variant="outlined"
                className="px-8 text-teal-500 border-teal-500 hover:bg-teal-50"
              >
                Load More ...
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateMarketplace;
