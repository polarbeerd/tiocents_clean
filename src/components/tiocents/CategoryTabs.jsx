"use client";

export default function CategoryTabs({ categories, activeTab, setActiveTab }) {
  return (
    <div className="flex gap-3 overflow-x-auto sm:overflow-x-visible whitespace-nowrap mb-8 scrollbar-hide px-2 sm:px-0">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveTab(category)}
          className={`px-4 py-2 rounded-full border text-sm flex-shrink-0 transition-colors duration-75 ${
            activeTab === category
              ? "bg-white text-black border-white"
              : "bg-[#1C1C1F] text-gray-300 border-gray-700 hover:bg-[#27272a]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
