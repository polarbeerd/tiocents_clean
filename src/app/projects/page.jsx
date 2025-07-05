export default function ProjectsPage() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Side Projects</h1>
      <ul className="list-disc pl-6 text-gray-400 space-y-2">
        <li>
          <span className="font-semibold text-white">Project 1:</span> A cool
          tool for tracking Bitcoin price trends.
        </li>
        <li>
          <span className="font-semibold text-white">Project 2:</span> An art
          generator using AI and React.
        </li>
        {/* Add more projects as you like */}
      </ul>
    </div>
  );
}
