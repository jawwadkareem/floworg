// "use client";

// import type React from "react";
// import { useState, useMemo } from "react";
// import { motion } from "framer-motion";
// import { Search, Filter } from "lucide-react";

// export interface Integration {
//   id: string;
//   name: string;
//   description: string;
//   icon: string;
//   color?: string;
//   category: string;
//   enabled?: boolean;
// }

// export interface SolutionsSectionProps {
//   title?: string;
//   subtitle?: string;
//   integrations: Integration[];
//   onIntegrationToggle?: (integrationId: string, enabled: boolean) => void;
//   onExploreClick?: () => void;
//   ctaButtonText?: string;
//   showSearch?: boolean;
//   showCategoryFilter?: boolean;
//   enabledByDefault?: string[];
//   className?: string;
// }

// const SolutionsSection: React.FC<SolutionsSectionProps> = ({
//   title = "Solutions",
//   subtitle,
//   integrations,
//   onIntegrationToggle,
//   onExploreClick,
//   ctaButtonText = "Explore All Use Cases For Your Business",
//   showSearch = true,
//   showCategoryFilter = true,
//   enabledByDefault = [],
//   className = "",
// }) => {
//   // Initialize enabled integrations state
//   const [enabledIntegrations, setEnabledIntegrations] = useState<Set<string>>(
//     new Set(enabledByDefault)
//   );

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState<string>("all");

//   // Get unique categories
//   const categories = useMemo(() => {
//     const cats = Array.from(
//       new Set(integrations.map((integration) => integration.category))
//     );
//     return ["all", ...cats];
//   }, [integrations]);

//   // Filter integrations based on search and category
//   const filteredIntegrations = useMemo(() => {
//     return integrations.filter((integration) => {
//       const matchesSearch =
//         integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         integration.description
//           .toLowerCase()
//           .includes(searchTerm.toLowerCase());
//       const matchesCategory =
//         selectedCategory === "all" || integration.category === selectedCategory;
//       return matchesSearch && matchesCategory;
//     });
//   }, [integrations, searchTerm, selectedCategory]);

//   const handleToggle = (integrationId: string) => {
//     const newEnabledState = !enabledIntegrations.has(integrationId);
//     const newEnabledIntegrations = new Set(enabledIntegrations);

//     if (newEnabledState) {
//       newEnabledIntegrations.add(integrationId);
//     } else {
//       newEnabledIntegrations.delete(integrationId);
//     }

//     setEnabledIntegrations(newEnabledIntegrations);
//     onIntegrationToggle?.(integrationId, newEnabledState);
//   };

//   const handleExploreClick = () => {
//     const enabledList = Array.from(enabledIntegrations);
//     console.log("Enabled integrations:", enabledList);
//     onExploreClick?.();
//   };

//   const handleCategoryChange = (category: string) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <section className={`py-16 bg-gray-50 ${className}`}>
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           {subtitle && (
//             <span className="text-[#1ad7ad] font-semibold text-sm uppercase tracking-wide mb-2 block">
//               {subtitle}
//             </span>
//           )}
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
//             {title}
//           </h2>
//           <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//             Connect with your favorite tools and platforms to streamline your
//             workflow and boost productivity.
//           </p>
//         </motion.div>

//         {/* Search and Filter Controls */}
//         {(showSearch || showCategoryFilter) && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center"
//           >
//             {/* Search */}
//             {showSearch && (
//               <div className="relative flex-1 max-w-md">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                 <input
//                   type="text"
//                   placeholder="Search integrations..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ad7ad] focus:border-transparent"
//                 />
//               </div>
//             )}

//             {/* Category Filter */}
//             {showCategoryFilter && (
//               <div className="flex items-center gap-2">
//                 <Filter className="text-gray-400 w-4 h-4" />
//                 <select
//                   value={selectedCategory}
//                   onChange={(e) => handleCategoryChange(e.target.value)}
//                   className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ad7ad] focus:border-transparent"
//                 >
//                   {categories.map((category) => (
//                     <option key={category} value={category}>
//                       {category === "all"
//                         ? "All Categories"
//                         : category.charAt(0).toUpperCase() + category.slice(1)}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             {/* Enabled Counter */}
//             <div className="text-sm text-gray-600">
//               {enabledIntegrations.size} of {integrations.length} enabled
//             </div>
//           </motion.div>
//         )}

//         {/* Integrations Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
//           {filteredIntegrations.map((integration, index) => (
//             <motion.div
//               key={integration.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.02 }}
//               viewport={{ once: true }}
//               className={`bg-white rounded-lg p-4 shadow-sm border transition-all duration-300 ${
//                 enabledIntegrations.has(integration.id)
//                   ? "border-[#1ad7ad] shadow-md bg-teal-50"
//                   : "border-gray-200 hover:shadow-md hover:border-gray-300"
//               }`}
//               // onClick={() => handleToggle(integration.id)}
//             >
//               <div className="flex items-start justify-between mb-3">
//                 <div className="flex items-center gap-3 flex-1">
//                   <div
//                     className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${
//                       enabledIntegrations.has(integration.id)
//                         ? "bg-teal-100"
//                         : ""
//                     }`}
//                   >
//                     {integration.icon}
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <h3
//                       className={`font-semibold text-sm leading-tight truncate ${
//                         enabledIntegrations.has(integration.id)
//                           ? "text-[#1ad7ad]"
//                           : "text-gray-800"
//                       }`}
//                     >
//                       {integration.name}
//                     </h3>
//                     <span className="text-xs text-gray-500 capitalize">
//                       {integration.category}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex-shrink-0 ml-2">
//                   <label className="relative inline-flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       className="sr-only peer"
//                       checked={enabledIntegrations.has(integration.id)}
//                       onChange={() => handleToggle(integration.id)}
//                     />
//                     <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1ad7ad]"></div>
//                   </label>
//                 </div>
//               </div>
//               <p
//                 className={`text-xs leading-relaxed line-clamp-3 ${
//                   enabledIntegrations.has(integration.id)
//                     ? "text-teal-700"
//                     : "text-gray-600"
//                 }`}
//               >
//                 {integration.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* No Results Message */}
//         {filteredIntegrations.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-12"
//           >
//             <p className="text-gray-500 text-lg">
//               No integrations found matching your criteria.
//             </p>
//             <button
//               onClick={() => {
//                 setSearchTerm("");
//                 setSelectedCategory("all");
//               }}
//               className="mt-4 text-[#1ad7ad] hover:text-[#1ad7ad] font-medium"
//             >
//               Clear filters
//             </button>
//           </motion.div>
//         )}

//         {/* Call to Action Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <button
//             onClick={handleExploreClick}
//             className="bg-[#1ad7ad] hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//           >
//             {ctaButtonText}
//           </button>
//           {enabledIntegrations.size > 0 && (
//             <p className="mt-3 text-sm text-gray-600">
//               Continue with {enabledIntegrations.size} selected integration
//               {enabledIntegrations.size !== 1 ? "s" : ""}
//             </p>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default SolutionsSection;

"use client";

import type React from "react";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";

export interface Integration {
  id: string;
  name: string;
  description: string;
  icon: string;
  color?: string;
  category: string;
  enabled?: boolean;
}

export interface SolutionsSectionProps {
  title?: string;
  subtitle?: string;
  integrations: Integration[];
  onIntegrationToggle?: (integrationId: string, enabled: boolean) => void;
  onExploreClick?: () => void;
  ctaButtonText?: string;
  showSearch?: boolean;
  showCategoryFilter?: boolean;
  enabledByDefault?: string[];
  className?: string;
}

const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  title = "Solutions",
  subtitle,
  integrations,
  onIntegrationToggle,
  onExploreClick,
  ctaButtonText = "Explore All Use Cases For Your Business",
  showSearch = true,
  showCategoryFilter = true,
  enabledByDefault = [],
  className = "",
}) => {
  // Initialize enabled integrations state
  const [enabledIntegrations, setEnabledIntegrations] = useState<Set<string>>(
    new Set(enabledByDefault)
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(
      new Set(integrations.map((integration) => integration.category))
    );
    return ["all", ...cats];
  }, [integrations]);

  // Filter integrations based on search and category
  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const matchesSearch =
        integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        integration.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || integration.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [integrations, searchTerm, selectedCategory]);

  const handleToggle = (integrationId: string) => {
    const newEnabledState = !enabledIntegrations.has(integrationId);
    const newEnabledIntegrations = new Set(enabledIntegrations);

    if (newEnabledState) {
      newEnabledIntegrations.add(integrationId);
    } else {
      newEnabledIntegrations.delete(integrationId);
    }

    setEnabledIntegrations(newEnabledIntegrations);
    onIntegrationToggle?.(integrationId, newEnabledState);
  };

  const handleExploreClick = () => {
    const enabledList = Array.from(enabledIntegrations);
    console.log("Enabled integrations:", enabledList);
    onExploreClick?.();
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {subtitle && (
            <span className="text-[#1ad7ad] font-semibold text-sm uppercase tracking-wide mb-2 block">
              {subtitle}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Connect with your favorite tools and platforms to streamline your
            workflow and boost productivity.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        {(showSearch || showCategoryFilter) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center"
          >
            {/* Search */}
            {showSearch && (
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ad7ad] focus:border-transparent"
                />
              </div>
            )}

            {/* Category Filter */}
            {showCategoryFilter && (
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-4 h-4" />
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ad7ad] focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all"
                        ? "All Categories"
                        : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Enabled Counter */}
            <div className="text-sm text-gray-600">
              {enabledIntegrations.size} of {integrations.length} enabled
            </div>
          </motion.div>
        )}

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {filteredIntegrations.map((integration, index) => (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              viewport={{ once: true }}
              className={`bg-white rounded-lg p-4 shadow-sm border transition-all duration-300 ${
                enabledIntegrations.has(integration.id)
                  ? "border-[#1ad7ad] shadow-md"
                  : "border-gray-200 hover:shadow-md hover:border-gray-300"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${
                      enabledIntegrations.has(integration.id)
                        ? "bg-teal-100"
                        : "bg-gray-100"
                    }`}
                  >
                    {integration.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm leading-tight truncate text-gray-800">
                      {integration.name}
                    </h3>
                    <span className="text-xs text-gray-500 capitalize">
                      {integration.category}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-2">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={enabledIntegrations.has(integration.id)}
                      onChange={() => handleToggle(integration.id)}
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1ad7ad]"></div>
                  </label>
                </div>
              </div>
              <p className="text-xs leading-relaxed line-clamp-3 text-gray-600">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredIntegrations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              No integrations found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="mt-4 text-[#1ad7ad] hover:text-[#1ad7ad] font-medium"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={handleExploreClick}
            className="bg-[#1ad7ad] hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {ctaButtonText}
          </button>
          {enabledIntegrations.size > 0 && (
            <p className="mt-3 text-sm text-gray-600">
              Continue with {enabledIntegrations.size} selected integration
              {enabledIntegrations.size !== 1 ? "s" : ""}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;