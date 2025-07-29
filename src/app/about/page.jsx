import { Youtube, Instagram, Linkedin, Github, Mail } from "lucide-react";
import CollapsibleCategory from "@/components/CollapsibleCategory";
import RainbowText from "@/components/RainbowText";
import Twemoji from "@/components/Twemoji";

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
          href="https://www.youtube.com/@tiodeniz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Youtube size={28} />
        </a>
        <a
          href="https://www.instagram.com/tiodeniz/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition-colors"
        >
          <Instagram size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/dmisirli/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://github.com/polarbeerd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Github size={28} />
        </a>
        <a
          href="mailto:mail@denizmisirli.com"
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
      <CollapsibleCategory title="🗣️ Languages">
        <ul className="text-gray-300 text-lg space-y-2 text-center">
          <li>
            <Twemoji>🇹🇷</Twemoji> Turkish – Native
          </li>

          <li>
            <Twemoji>🇬🇧</Twemoji> English – IELTS 8.0
          </li>
          <li>
            <Twemoji>🇪🇸</Twemoji> Spanish – B2 (probably)
          </li>

          <li>
            <Twemoji>🇩🇪</Twemoji> German – A2 (probably)
          </li>
          <li>
            <Twemoji>☕</Twemoji> Coffee – C2 (precisely)
          </li>
        </ul>
      </CollapsibleCategory>

      <CollapsibleCategory title="✨ Interests">
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
      </CollapsibleCategory>
      {/* Languages + Interests
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Languages</h2>
          <ul className="text-gray-300 text-lg space-y-2 text-center">
            <li>Turkish – Native</li>
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
      </div> */}

      {/* Collapsible Sections */}
      <CollapsibleCategory title="🎓 Education Years">
        <CollapsibleCategory
          title="Sabanci University - BSc Electronics - Istanbul / 2020 grad"
          variant="white"
          size="sub"
        >
          <p>
            Well, currently I'm not working an engineer, but I do have a degree.
            But let’s be real — having a degree is like having a spine these
            days: expected.
          </p>
          <p>
            So apart from theories, maths, circuits, natural sciences the real
            gain in universty was:
          </p>
          <p className="text-white font-semibold text-xl">
            *** learning how to learn, explore outer interests, and go abroad
            ***
          </p>
          <p>and also:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Critical thinking and problem-solving skills</li>
            <li>Hands-on experience with electronics and programming</li>
            <li>Collaboration and teamwork in diverse groups</li>
          </ul>
          <p>just kidding 😄</p>
        </CollapsibleCategory>

        <CollapsibleCategory
          title="Universidad Rey Juan Carlos - Business & Economics - Erasmus in Madrid / 2019"
          variant="white"
          size="sub"
        >
          <p>
            Oooff, where do I start. Damn. But right from the start, if you're
            gonna assume that it was partying, nonstop fun, drugs... you're{" "}
            <span className="font-bold text-3xl">WRONG</span>{" "}
            <span className="text-[7px]">just a bit.</span>
          </p>
          <p>But it's more than that, so much more. </p>
          <p>
            It's about finding yourself, getting to know yourself from scratch.
            Basically a rebirth. Going to a country that you don't even know how
            to count from 1 to 10 in their language, with a pocket money on your
            side, without having any place arranged to stay, without knowing any
            single person, after you were right in the center of your safezone
            in your home country. About surviving thyself and growing among the
            adventure. Learning how to live, discovering your REAL self,
            learning a new language, travelling all around and being an{" "}
            <RainbowText text="international" /> person.
          </p>
          <p>
            Changing to cheaper hostels daily with a 20kg baggage behind me
            while attending university and finding local gyms that accept daily
            trials to find a flat which you're assigned half of the half of a
            shell, with just enough space to fit your canned beans while getting
            fucking cold for days after coming from university in a freezing
            day, waiting 10 minutes desperately in the shower naked for a drop
            of a warm water but not getting it, before sneaking out in the
            morning back to hostels out of furiosity just to make sure finding a
            place where you feel actually good.. (turned out to be a 7 person
            shared flat (turned out to be the best choice with the amazing
            people I connected with))
          </p>
          <p>
            That you've just read was just the first week. I'm letting you
            imagine the rest.
          </p>
        </CollapsibleCategory>
        <CollapsibleCategory
          title="Antalya Adem Tolunay Anatolian High School / 2014 grad"
          variant="white"
          size="sub"
        >
          <p>
            Only if you're an Antalya Gourmet, you'll know the prestige and
            quality of this high school.{" "}
          </p>
          <p>
            So yeah, basically, you only have to know that it was one of the top
            3 high schools in Antalya.
          </p>
        </CollapsibleCategory>
      </CollapsibleCategory>

      <CollapsibleCategory title="💼 Job Experiences">
        <CollapsibleCategory
          title="Talya Bilisim - Jr. Software Developer / Product Manager Assistant / Antalya / 2023 / 9mo"
          variant="white"
          size="sub"
        >
          <p>
            Learned software development, basically helped me to build this site
            and other side projects.
          </p>
          <p>
            Been in product team, proposed ideas and implemented Jira from
            scratch for bug tracking, issue tracking and agile project
            management.
          </p>
        </CollapsibleCategory>
        <CollapsibleCategory
          title="Hype - Jr. Web Analyst / Istanbul / 2022 / 5mo"
          variant="white"
          size="sub"
        >
          <p>
            Learned about web analytics, CEO and it's tools such as Google Tag
            Manager, Google Analytics.
          </p>
        </CollapsibleCategory>
        <CollapsibleCategory
          title="Product Manager / Customer Care Intern at Wacom - Dusseldorf / 2018 / 3mo"
          variant="white"
          size="sub"
        >
          <p>
            The beginning of my abroad journey.. Where I had the experience of
            working in a multicultural environment and adapting to new
            challenges and had hands on experience in the tech industry and
            product lifecycle.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Worked in Product Managem ent & Customer Care</li>
            <li>Balanced gym, nutrition, and solo life abroad</li>
            <li>Saved up and built vision for future travels</li>
          </ul>
        </CollapsibleCategory>
        <CollapsibleCategory
          title="Vestel - Video Group Intern / Manisa / 2017 / 1mo"
          variant="white"
          size="sub"
        >
          <p>
            Biggest factory in Turkey. Been to briefings of the components and
            products, learned about the production lines and processes.
          </p>
        </CollapsibleCategory>
        <CollapsibleCategory
          title="Iskenderun Iron & Steel Works - Electronic Automation Intern / Hatay / 2016 / 1mo"
          variant="white"
          size="sub"
        >
          <p>
            Blue collar experience all day in the field surrounded by metal
            dust. Controlled and tracking health of the machines.
          </p>
        </CollapsibleCategory>
      </CollapsibleCategory>

      <CollapsibleCategory title="📜 Certificates & Programs">
        <ul className="list-disc list-inside ml-4">
          <li>GYOP Erasmus + International Short Film Festival / 3mo 🎬</li>
          <li>McKinsey Forward Program / 6mo 🧑‍💼</li>
          <li>Garanti BBVA Technology - Security Academy 101 / 1mo 🔐</li>
          <li>Schiller Kaffeerösterei Barista / 2mo ☕</li>
        </ul>
      </CollapsibleCategory>
    </div>
  );
}
