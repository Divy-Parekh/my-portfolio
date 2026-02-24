import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    document.title = "Divy Parekh — Resume";
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-8 print:py-0 print:bg-white">
      <div
        className="bg-white shadow-lg print:shadow-none"
        style={{
          width: "210mm",
          minHeight: "297mm",
          padding: "16mm 18mm",
          fontFamily: "'Inter', sans-serif",
          color: "#1a1a1a",
          fontSize: "10.5pt",
          lineHeight: "1.45",
        }}
      >
        {/* Header */}
        <header className="mb-5 border-b-2 border-gray-800 pb-3">
          <h1
            className="text-3xl font-bold tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            DIVY PAREKH
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Software Developer &nbsp;|&nbsp; Vadodara, Gujarat, India &nbsp;|&nbsp;{" "}
            <a href="mailto:divy.parekh0106@gmail.com" className="text-blue-700 underline print:text-gray-700">
              divy.parekh0106@gmail.com
            </a>{" "}
            &nbsp;|&nbsp;{" "}
            <a
              href="https://linkedin.com/in/Divy-Parekh"
              className="text-blue-700 underline print:text-gray-700"
            >
              linkedin.com/in/Divy-Parekh
            </a>{" "}
            &nbsp;|&nbsp;{" "}
            <a
              href="https://github.com/Divy-Parekh"
              className="text-blue-700 underline print:text-gray-700"
            >
              github.com/Divy-Parekh
            </a>
          </p>
        </header>

        {/* Summary */}
        <section className="mb-5">
          <h2
            className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Professional Summary
          </h2>
          <p className="text-gray-700">
            Results-driven Software Developer with hands-on experience building full-stack applications,
            cloud-integrated solutions, and AI-powered platforms. Proficient in the MERN stack, AWS, and
            modern frontend frameworks. Passionate about delivering scalable, user-centric software that
            solves real-world problems.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-5">
          <h2
            className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Professional Experience
          </h2>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold text-base">Software Developer</h3>
              <span className="text-xs text-gray-500 whitespace-nowrap">Dec 2025 — Present</span>
            </div>
            <p className="text-sm text-gray-600 italic">Newmeric Tech LLC · Full-time · Remote — Vadodara, India</p>
            <ul className="list-disc ml-5 mt-1.5 space-y-1 text-gray-700">
              <li>Building full-stack applications with cloud integration leveraging AWS services for scalable, production-grade solutions.</li>
              <li>Architecting and implementing end-to-end features using modern JavaScript/TypeScript stacks with emphasis on performance and reliability.</li>
              <li>Collaborating with cross-functional teams to design cloud-native architectures and deploy CI/CD pipelines.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold text-base">Software Development Intern</h3>
              <span className="text-xs text-gray-500 whitespace-nowrap">Mar 2025 — Nov 2025</span>
            </div>
            <p className="text-sm text-gray-600 italic">VRDH Tech · Internship · Remote — West Virginia, USA</p>
            <ul className="list-disc ml-5 mt-1.5 space-y-1 text-gray-700">
              <li>Developed full-stack web applications for multiple organisations using the MERN stack (MongoDB, Express.js, React, Node.js).</li>
              <li>Integrated AI-powered features into client projects, enhancing automation and user experience across platforms.</li>
              <li>Delivered responsive, accessible front-end interfaces with React, improving page load speeds and user engagement.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-5">
          <h2
            className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Projects
          </h2>

          <div className="mb-3">
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold">
                CaffeeOS — Café Point of Sale System
              </h3>
              <a
                href="https://github.com/Divy-Parekh/CaffeeOS"
                className="text-xs text-blue-700 underline print:text-gray-600"
              >
                GitHub
              </a>
            </div>
            <p className="text-gray-700 mt-0.5">
              Built a complete POS system for coffee shops featuring menu management, real-time order tracking,
              and streamlined checkout workflows. Implemented with React, Node.js, and a full-stack architecture.
            </p>
          </div>

          <div className="mb-3">
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold">
                GearGuard — Resource Management System
              </h3>
              <a
                href="https://github.com/Divy-Parekh/GearGuard"
                className="text-xs text-blue-700 underline print:text-gray-600"
              >
                GitHub
              </a>
            </div>
            <p className="text-gray-700 mt-0.5">
              Developed a resource management platform for tracking equipment, inventory, and assets across teams
              with real-time analytics dashboards and reporting capabilities using the MERN stack.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold">
                Resume Intelligence Platform
              </h3>
              <a
                href="https://github.com/Divy-Parekh/rip1"
                className="text-xs text-blue-700 underline print:text-gray-600"
              >
                GitHub
              </a>
            </div>
            <p className="text-gray-700 mt-0.5">
              Created an AI-powered resume analysis platform that intelligently parses, scores, and delivers
              actionable feedback on resumes, leveraging NLP and React/TypeScript for an intuitive user experience.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-5">
          <h2
            className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Education
          </h2>
          <div className="flex justify-between items-baseline">
            <h3 className="font-semibold">Bachelor of Technology — Computer Science</h3>
            <span className="text-xs text-gray-500">Expected 2026</span>
          </div>
          <p className="text-sm text-gray-600">ITM SLS Baroda University, Vadodara</p>
        </section>

        {/* Skills */}
        <section>
          <h2
            className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Technical Skills
          </h2>
          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-gray-700">
            <span className="font-semibold">Frontend:</span>
            <span>React, TypeScript, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+)</span>
            <span className="font-semibold">Backend:</span>
            <span>Node.js, Express.js, Python, REST APIs, GraphQL</span>
            <span className="font-semibold">Databases:</span>
            <span>MongoDB, PostgreSQL</span>
            <span className="font-semibold">Cloud & DevOps:</span>
            <span>AWS, Docker, Git, CI/CD Pipelines</span>
            <span className="font-semibold">Tools:</span>
            <span>VS Code, Figma, Postman, GitHub</span>
          </div>
        </section>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
