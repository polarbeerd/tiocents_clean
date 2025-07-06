import { Youtube, Instagram, Linkedin, Github, Mail } from "lucide-react";
import CollapsibleCategory from "@/components/CollapsibleCategory";

export default function AboutMe() {
  return (
    <div className="max-w-3xl mx-auto px-4 pb-24 mt-4">
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-4">
          Who Am I?
        </h1>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-10">
        <a
          href="https://www.youtube.com/@yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Youtube size={28} />
        </a>
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition-colors"
        >
          <Instagram size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Github size={28} />
        </a>
        <a
          href="mailto:yourmail@example.com"
          className="text-gray-400 hover:text-green-400 transition-colors"
        >
          <Mail size={28} />
        </a>
      </div>

      {/* Status & Location */}
      <div className="text-center mb-14">
        <p className="text-lg text-gray-300">
          Current Status:{" "}
          <span className="text-purple-500 font-semibold animate-pulse">
            THY Cadet Candidate 🛫
          </span>
        </p>
        <p className="text-lg text-gray-300">
          Current Location:{" "}
          <span className="text-purple-500 font-semibold animate-pulse">
            Antalya, Turkey 📍
          </span>
        </p>
      </div>

      {/* Languages + Interests */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Languages</h2>
          <ul className="text-gray-300 text-lg space-y-2 text-center">
            <li>🇹🇷 Turkish – Native</li>
            <li>🇬🇧 English – IELTS 8.0</li>
            <li>🇪🇸 Spanish – B2 (probably 😅)</li>
            <li>🇩🇪 German – A2 (probably 😅)</li>
            <li>☕️ Coffee – C2 (precisely 😅)</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Interests</h2>
          <ul className="text-gray-300 text-lg space-y-2 text-center">
            <li>
              🎸 Guitar and many sports (currently addicted to tennis — 1v1?)
            </li>
            <li>
              📉 Macroeconomy & investing (yes I’m a crypto guy, yes I wanna
              retire early)
            </li>
            <li>✈️ Who doesn't love exploring new places?</li>
            <li>
              🧠 Exploring niche ideas, weird facts, and better ways of living
            </li>
          </ul>
        </div>
      </div>

      {/* Collapsible Sections */}
      <CollapsibleCategory title="🎓 Education Years">
        <p className="font-bold text-white">
          Sabancı University – BSc Electronics
        </p>
        <p>
          Well, currently I'm not an engineer, but I do have a degree. But let’s
          be real — having a degree is like having a spine these days: expected.
        </p>
        <p>So apart from theories and circuits, the real gain was:</p>
        <p className="text-white font-semibold text-xl">
          *** learning how to learn, explore interests, and go abroad ***
        </p>
        <p>and also:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Critical thinking and problem-solving skills</li>
          <li>Hands-on experience with electronics and programming</li>
          <li>Collaboration and teamwork in diverse groups</li>
        </ul>
        <p>just kidding 😄</p>
      </CollapsibleCategory>

      <CollapsibleCategory title="💼 Job Experiences">
        <div>
          <p className="font-bold text-white">Wacom Europe GmbH – Düsseldorf</p>
          <ul className="list-disc list-inside ml-4">
            <li>Worked in Product Management & Customer Care</li>
            <li>Balanced gym, nutrition, and solo life abroad</li>
            <li>Saved up and built vision for future travels</li>
          </ul>
        </div>
        <hr className="my-2 border-gray-600" />
        <div>
          <p className="font-bold text-white">
            Erasmus in Madrid – The Rebirth
          </p>
          <p>
            Oooff, where do I start. If you're thinking partying, nonstop fun...
            well, you're not wrong 😅
          </p>
          <p>
            But it was also a complete reset: new language, no home, no
            contacts, 20kg luggage. Hostel hopping, freezing showers, finding
            local gyms, and slowly growing into myself again.
          </p>
          <p>
            Ended up in a 7-person shared flat. Turned out — best decision ever.
            It was growth, discomfort, beauty, and a lot of dancing 🇪🇸
          </p>
        </div>
      </CollapsibleCategory>

      <CollapsibleCategory title="📜 Certificates & Programs">
        <ul className="list-disc list-inside ml-4">
          <li>IELTS 8.0 – English Proficiency</li>
          <li>P90X & Gymnastics Program Completion 💪</li>
          <li>Dance Dojo Salsa Intermediate 💃</li>
        </ul>
      </CollapsibleCategory>
    </div>
  );
}
