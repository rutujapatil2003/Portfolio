import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    },
  };

  const techStack = [
    { category: 'Languages & Frameworks', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js'] },
    { category: 'Backend & DB', items: ['MongoDB', 'PostgreSQL', 'SQL', 'REST APIs', 'JWT'] },
    { category: 'Tools & Integrations', items: ['Git', 'GitHub', 'Postman', 'Puppeteer', 'Razorpay'] },
    { category: 'AI Tools', items: ['Cursor AI', 'Antigravity', 'Claude AI'] },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0">
      {/* Section Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="mb-10 sm:mb-12 lg:mb-20 border-b border-white/10 pb-4"
      >
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase">ABOUT ME</h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="w-full space-y-5 sm:space-y-6 lg:space-y-8 min-w-0 mb-12 sm:mb-16 lg:mb-24"
      >
        <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed break-words">
          I'm <span className="text-moonstone font-semibold">Rutuja Patil</span>, a MERN Stack Developer based in Mumbai with 3+ years of experience building scalable web applications.
          I work with React.js, Node.js, Express.js, MongoDB, and PostgreSQL.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed break-words">
          I am pursuing a Master of Computer Applications at <span className="text-moonstone font-semibold">Amity University (Online)</span>, and I completed my Bachelor of Arts from the <span className="text-moonstone font-semibold">University of Mumbai</span>. I also completed a Full Stack Web Development course at <span className="text-moonstone font-semibold">IT Vedant</span>.
        </p>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/90 break-words">
          I build REST APIs, manage databases, and handle authentication, role-based access control, and third-party integrations. I develop end-to-end application features and connect frontend and backend systems.
        </p>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="glass-card p-6 sm:p-8 lg:p-10 xl:p-16 rounded-2xl sm:rounded-[2rem] min-w-0"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 lg:mb-12 text-white">How I build things</h3>
        <div className="flex flex-col gap-6 sm:gap-8">
          {techStack.map((stack) => (
            <div key={stack.category} className="flex flex-col md:flex-row md:items-start gap-3 sm:gap-4 min-w-0">
              <h4 className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-[#aaa] md:w-56 shrink-0 pt-0 md:pt-2 break-words">{stack.category}</h4>
              <div className="flex flex-wrap gap-3">
                {stack.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{
                      scale: 1.05,
                      zIndex: 20,
                      borderColor: "rgba(224, 231, 255, 0.4)",
                      boxShadow: "0 0 8px rgba(224, 231, 255, 0.15)"
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                    className="px-4 py-2 rounded-lg bg-moonstone-dim border border-moonstone-border/10 text-moonstone text-sm font-medium cursor-default relative transition-colors duration-300"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
