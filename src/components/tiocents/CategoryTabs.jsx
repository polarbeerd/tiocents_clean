"use client";

export default function CategoryTabs({ categories, activeTab, setActiveTab }) {
  return (
    <div className="w-full overflow-x-auto sm:overflow-visible mt-4 mb-4 px-4 scrollbar-hide">
      <div className="flex gap-3 whitespace-nowrap w-max mx-auto">
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
    </div>
  );
}
