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
          fontFamily: "Arial, sans-serif",
          color: "#1a1a1a",
          fontSize: "10.5pt",
          lineHeight: "1.45",
        }}
      >
        {/* Header */}
        <header className="mb-4 border-b-2 border-gray-800 pb-3 text-center">
          <h1 className="text-3xl font-bold tracking-tight" style={{ fontFamily: "Arial, sans-serif" }}>
            DIVY PAREKH
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            <a href="mailto:divy.parekh0106@gmail.com" className="text-blue-700 underline print:text-gray-700">
              divy.parekh0106@gmail.com
            </a>
            {" | "}
            Vadodara, Gujarat, India
            {" | "}
            <a href="https://linkedin.com/in/Divy-Parekh" className="text-blue-700 underline print:text-gray-700">
              linkedin.com/in/Divy-Parekh
            </a>
            {" | "}
            <a href="https://github.com/Divy-Parekh" className="text-blue-700 underline print:text-gray-700">
              github.com/Divy-Parekh
            </a>
          </p>
        </header>

        {/* Summary */}
        <section className="mb-4">
          <p className="text-gray-700">
            Results-driven Software Developer with hands-on experience building full-stack applications,
            cloud-integrated solutions, and AI-powered platforms. Proficient in the MERN stack, AWS, and
            modern frontend frameworks. Passionate about delivering scalable, user-centric software that
            solves real-world problems.
          </p>
        </section>

        {/* Education */}
        <section className="mb-4">
          <SectionTitle>Education</SectionTitle>
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold">ITM SLS Baroda University</h3>
            <span className="text-xs text-gray-500">Expected 2026</span>
          </div>
          <p className="text-sm text-gray-600">Bachelor of Technology — Computer Science</p>
        </section>

        {/* Skills */}
        <section className="mb-4">
          <SectionTitle>Skills</SectionTitle>
          <div className="space-y-0.5 text-gray-700">
            <p><span className="font-bold">Frontend:</span> React, TypeScript, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+)</p>
            <p><span className="font-bold">Backend:</span> Node.js, Express.js, Python, REST APIs, GraphQL</p>
            <p><span className="font-bold">Databases:</span> MongoDB, PostgreSQL</p>
            <p><span className="font-bold">Cloud & DevOps:</span> AWS, Docker, Git, CI/CD Pipelines</p>
            <p><span className="font-bold">Tools:</span> VS Code, Figma, Postman, GitHub</p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-4">
          <SectionTitle>Experience</SectionTitle>

          <div className="mb-3">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold">Software Developer,{" "}
                <span className="font-normal">Newmeric Tech LLC · Remote — Vadodara, India</span>
              </h3>
              <span className="text-xs text-gray-500 whitespace-nowrap">Dec 2025 — Present</span>
            </div>
            <ul className="list-disc ml-5 mt-1 space-y-0.5 text-gray-700">
              <li>Building full-stack applications with cloud integration leveraging AWS services for scalable, production-grade solutions.</li>
              <li>Architecting and implementing end-to-end features using modern JavaScript/TypeScript stacks with emphasis on performance and reliability.</li>
              <li>Collaborating with cross-functional teams to design cloud-native architectures and deploy CI/CD pipelines.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold">Software Development Intern,{" "}
                <span className="font-normal">VRDH Tech · Remote — West Virginia, USA</span>
              </h3>
              <span className="text-xs text-gray-500 whitespace-nowrap">Mar 2025 — Nov 2025</span>
            </div>
            <ul className="list-disc ml-5 mt-1 space-y-0.5 text-gray-700">
              <li>Developed full-stack web applications for multiple organisations using the MERN stack.</li>
              <li>Integrated AI-powered features into client projects, enhancing automation and user experience.</li>
              <li>Delivered responsive, accessible front-end interfaces with React, improving page load speeds.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-4">
          <SectionTitle>Projects</SectionTitle>

          <div className="mb-2">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold">
                CaffeeOS — Café Point of Sale System{" "}
                <a href="https://github.com/Divy-Parekh/CaffeeOS" className="text-xs text-blue-700 underline print:text-gray-600 font-normal">↗</a>
              </h3>
              <span className="text-xs text-gray-500">React, Node.js, MongoDB</span>
            </div>
            <ul className="list-disc ml-5 mt-0.5 space-y-0.5 text-gray-700">
              <li>Built a complete POS system featuring menu management, real-time order tracking, and streamlined checkout workflows.</li>
            </ul>
          </div>

          <div className="mb-2">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold">
                GearGuard — Resource Management System{" "}
                <a href="https://github.com/Divy-Parekh/GearGuard" className="text-xs text-blue-700 underline print:text-gray-600 font-normal">↗</a>
              </h3>
              <span className="text-xs text-gray-500">MERN Stack</span>
            </div>
            <ul className="list-disc ml-5 mt-0.5 space-y-0.5 text-gray-700">
              <li>Developed a resource management platform for tracking equipment and assets with real-time analytics dashboards.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold">
                Resume Intelligence Platform{" "}
                <a href="https://github.com/Divy-Parekh/rip1" className="text-xs text-blue-700 underline print:text-gray-600 font-normal">↗</a>
              </h3>
              <span className="text-xs text-gray-500">React, TypeScript, NLP</span>
            </div>
            <ul className="list-disc ml-5 mt-0.5 space-y-0.5 text-gray-700">
              <li>Created an AI-powered resume analysis platform that parses, scores, and delivers actionable feedback on resumes.</li>
            </ul>
          </div>
        </section>

        {/* Hackathon Achievements */}
        <section>
          <SectionTitle>Hackathon Achievements</SectionTitle>
          <ul className="list-disc ml-5 space-y-0.5 text-gray-700">
            <li><span className="font-bold">Winner</span> — Cryptors Illuminati 2025</li>
            <li><span className="font-bold">Winners</span> — HackITM 2025 (RIP AI)</li>
            <li><span className="font-bold">Runners Up</span> — Hackathon Illuminati 2025</li>
            <li><span className="font-bold">Runners Up</span> — Code Clash Illuminati 2025</li>
            <li><span className="font-bold">Runners Up</span> — Hackathon Illuminati 2023</li>
            <li><span className="font-bold">Participant</span> — Smart India Hackathon 2023, 2024 & 2026</li>
          </ul>
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

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-base font-bold border-b border-gray-300 pb-1 mb-2 text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
    {children}
  </h2>
);

export default Resume;
