import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Entry {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent: boolean;
  points: string[];
}

const jobs: Entry[] = [
  {
    id: 'precisio',
    company: 'Precisio Technologies Pvt Ltd',
    role: 'MERN Stack Developer',
    period: 'Aug 2024 – Present',
    isCurrent: true,
    points: [
      'Developing responsive web application interfaces using React.js, with reusable components and responsive layouts. Onsite in Mumbai.',
      'Designing and integrating REST APIs using Node.js and Express.js for application workflows and data management.',
      'Working with MongoDB and PostgreSQL to design and manage application data and database operations.',
      'Integrating frontend components with backend APIs, including API responses, validation, and error states.',
    ],
  },
  {
    id: 'ninety',
    company: '90 Degree North',
    role: 'MERN Stack Developer',
    period: 'Oct 2023 – Jul 2024',
    isCurrent: false,
    points: [
      'Developed responsive UI components using React.js and JavaScript. Remote, based in Thane.',
      'Built REST APIs using Node.js and Express.js for application workflows.',
      'Managed SQL and MongoDB databases, including CRUD operations and API integration.',
    ],
  },
];

const education: Entry[] = [
  {
    id: 'mca',
    company: 'Amity University (Online)',
    role: 'Master of Computer Applications',
    period: 'Jun 2025 – Present',
    isCurrent: true,
    points: [
      'Pursuing a Master of Computer Applications through Amity University’s online program, based in Noida.',
      'Studying computer applications alongside full-time MERN development work.',
    ],
  },
  {
    id: 'ba',
    company: 'University of Mumbai',
    role: 'Bachelor of Arts',
    period: '2020 – 2023',
    isCurrent: false,
    points: [
      'Completed a Bachelor of Arts (B.A.) from the University of Mumbai.',
      'Studied in Mumbai from 2020 to 2023.',
    ],
  },
  {
    id: 'itvedant',
    company: 'IT Vedant',
    role: 'Full Stack Web Development',
    period: '2022 – 2023',
    isCurrent: false,
    points: [
      'Completed a Full Stack Web Development course at IT Vedant in Mumbai.',
      'Training covered full-stack web development from 2022 to 2023.',
    ],
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const EntrySection: React.FC<{
  id: string;
  title: string;
  entries: Entry[];
  defaultId: string;
}> = ({ id, title, entries, defaultId }) => {
  const [activeTab, setActiveTab] = useState(defaultId);
  const activeEntry = entries.find((entry) => entry.id === activeTab) ?? entries[0];

  const renderContent = (entry: Entry) => (
    <motion.div
      key={entry.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-4 sm:space-y-6"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug break-words">{entry.role}</h3>
      <p className="font-mono text-moonstone text-sm">{entry.period}</p>
      <ul className="space-y-3 sm:space-y-4">
        {entry.points.map((point, i) => (
          <li key={i} className="flex items-start gap-3 sm:gap-4 text-white text-base sm:text-lg leading-relaxed">
            <span className="text-moonstone mt-1.5 flex-shrink-0">•</span>
            <span className="break-words">{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section id={id} className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="mb-10 sm:mb-12 lg:mb-20 border-b border-white/10 pb-4"
      >
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase">{title}</h2>
      </motion.div>

      <div className="lg:hidden flex flex-col gap-4">
        {entries.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: index * 0.15 }}
          >
            <div className="rounded-2xl border border-white/10 bg-moonstone-dim backdrop-blur-sm p-4 transition-all duration-300 hover:border-moonstone/30 hover:-translate-y-0.5">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-base font-bold text-white leading-snug break-words min-w-0">
                  {entry.company}
                </span>
                <span className="text-[11px] font-normal text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1 whitespace-nowrap flex-shrink-0 mt-0.5">
                  {entry.period}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <p className="text-[13px] font-semibold text-moonstone tracking-[0.04em]">
                  {entry.role}
                </p>
                {entry.isCurrent && (
                  <span className="hidden md:inline-flex items-center text-[10px] font-semibold tracking-[0.04em] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 whitespace-nowrap flex-shrink-0">
                    Current
                  </span>
                )}
              </div>

              <div className="h-px bg-white/10 mb-3" />

              <ul className="flex flex-col gap-2">
                {entry.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-white leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-moonstone flex-shrink-0 mt-[6px]" />
                    <span className="break-words">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="hidden lg:flex lg:gap-12 xl:gap-24">
        <div className="flex flex-col w-1/3 gap-3">
          {entries.map((entry) => (
            <button
              key={entry.id}
              onClick={() => setActiveTab(entry.id)}
              className={`btn-shine text-left px-6 py-4 rounded-xl border transition-all duration-300 truncate ${activeTab === entry.id
                ? 'bg-moonstone text-zinc-950 font-bold border-moonstone'
                : 'bg-transparent border-moonstone-border/20 text-white hover:bg-white'
                }`}
              title={entry.company}
            >
              {entry.company}
            </button>
          ))}
        </div>

        <div className="w-2/3 min-h-[300px]">
          <AnimatePresence mode="wait">
            {renderContent(activeEntry)}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Experience: React.FC = () => {
  return (
    <>
      <EntrySection
        id="journey"
        title="Professional Experience"
        entries={jobs}
        defaultId="precisio"
      />
      <EntrySection
        id="education"
        title="Education"
        entries={education}
        defaultId="mca"
      />
    </>
  );
};

export default Experience;
