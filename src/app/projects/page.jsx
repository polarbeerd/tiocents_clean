export default function ProjectsPage() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Side Projects</h1>
      <ul className="list-disc pl-6 text-gray-400 space-y-2">
        <li>
          <span className="font-semibold text-white">Project 1:</span> DIY cold
          drip tower with a simple twist that eliminates the loss off
          hydrostatic pressure due to height loss over time.
        </li>
        <li>
          <span className="font-semibold text-white">Project 2:</span> Quiz
          night / trivia point tracker app for easier management.
        </li>

        {/* Add more projects as you like */}
      </ul>
    </div>
  );
}
