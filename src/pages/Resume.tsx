import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    document.title = "Divy Parekh — Resume";
  }, []);

  const handleDownload = () => {
    const printWindow = window.open("/resume", "_blank");
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-4 print:py-0 print:bg-white">
      <div className="mb-3 print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-gray-800 text-white px-6 py-2 rounded text-sm hover:bg-gray-700 transition-colors"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Download PDF
        </button>
      </div>
      <div
        className="bg-white shadow-lg print:shadow-none"
        style={{
          width: "210mm",
          height: "297mm",
          padding: "10mm 14mm",
          fontFamily: "Arial, sans-serif",
          color: "#1a1a1a",
          fontSize: "9.5pt",
          lineHeight: "1.35",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <header className="mb-2 border-b-2 border-gray-800 pb-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight" style={{ fontFamily: "Arial, sans-serif" }}>
            DIVY PAREKH
          </h1>
          <p className="text-xs text-gray-600 mt-0.5">
            <a href="mailto:divy.parekh0106@gmail.com" className="text-blue-700 underline print:text-gray-700">
              divy.parekh0106@gmail.com
            </a>
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
        <section className="mb-2">
          <p className="text-gray-700">
            Results-driven Software Developer with hands-on experience building full-stack applications,
            cloud-integrated solutions, and AI-powered platforms. Proficient in the MERN stack, AWS, and
            modern frontend frameworks. Passionate about delivering scalable, user-centric software that
            solves real-world problems.
          </p>
        </section>

        {/* Education */}
        <section className="mb-2">
          <SectionTitle>Education</SectionTitle>
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold">ITM SLS Baroda University <span className="font-normal text-gray-600">— CGPA: 9.62</span></h3>
            <span className="text-xs text-gray-500">Expected 2026</span>
          </div>
          <p className="text-xs text-gray-600">Bachelor of Technology — Computer Science</p>
        </section>

        {/* Skills */}
        <section className="mb-2">
          <SectionTitle>Skills</SectionTitle>
          <div className="text-gray-700" style={{ lineHeight: "1.3" }}>
            <p><span className="font-bold">Frontend:</span> React, TypeScript, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+)</p>
            <p><span className="font-bold">Backend:</span> Node.js, Express.js, Python, REST APIs, GraphQL</p>
            <p><span className="font-bold">Databases:</span> MongoDB, PostgreSQL</p>
            <p><span className="font-bold">Cloud & DevOps:</span> AWS, Docker, Git, CI/CD Pipelines</p>
            <p><span className="font-bold">Tools:</span> VS Code, Figma, Postman, GitHub</p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-2">
          <SectionTitle>Experience</SectionTitle>

          <div className="mb-1.5">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold">Software Developer,{" "}
                <span className="font-normal">Newmeric Tech LLC · Remote</span>
              </h3>
              <span className="text-xs text-gray-500 whitespace-nowrap">Dec 2025 — Present</span>
            </div>
            <ul className="list-disc ml-4 mt-0.5 text-gray-700" style={{ lineHeight: "1.3" }}>
              <li>Building full-stack applications with cloud integration leveraging AWS services for scalable, production-grade solutions.</li>
              <li>Architecting end-to-end features using modern JavaScript/TypeScript stacks with emphasis on performance and reliability.</li>
              <li>Designing cloud-native architectures and deploying CI/CD pipelines for automated testing and delivery.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold">Software Development Intern,{" "}
                <span className="font-normal">VRDH Tech · Remote — West Virginia, USA</span>
              </h3>
              <span className="text-xs text-gray-500 whitespace-nowrap">Mar 2025 — Nov 2025</span>
            </div>
            <ul className="list-disc ml-4 mt-0.5 text-gray-700" style={{ lineHeight: "1.3" }}>
              <li>Developed full-stack web applications for multiple organisations using the MERN stack, serving 500+ daily users.</li>
              <li>Integrated AI-powered features into client projects, enhancing automation and reducing manual workflows by 40%.</li>
              <li>Delivered responsive, accessible front-end interfaces with React, improving page load speeds by 30%.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-2">
          <SectionTitle>Projects</SectionTitle>

          <div className="mb-1">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold">
                CaffeeOS — Café Point of Sale System{" "}
                <span className="font-normal text-gray-400">|</span>{" "}
                <a href="https://github.com/Divy-Parekh/CaffeeOS" className="text-xs text-blue-700 underline print:text-gray-600 font-normal">GitHub</a>
              </h3>
              <span className="text-xs text-gray-500">React, Node.js, MongoDB</span>
            </div>
            <ul className="list-disc ml-4 mt-0.5 text-gray-700" style={{ lineHeight: "1.3" }}>
              <li>Built a complete POS system with menu management, real-time order tracking, and streamlined checkout workflows.</li>
              <li>Implemented role-based access control for staff and admin users with secure JWT authentication.</li>
              <li>Designed a responsive dashboard displaying daily sales analytics, popular items, and revenue trends.</li>
            </ul>
          </div>

          <div className="mb-1">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold">
                GearGuard — Resource Management System{" "}
                <span className="font-normal text-gray-400">|</span>{" "}
                <a href="https://github.com/Divy-Parekh/GearGuard" className="text-xs text-blue-700 underline print:text-gray-600 font-normal">GitHub</a>
              </h3>
              <span className="text-xs text-gray-500">MERN Stack</span>
            </div>
            <ul className="list-disc ml-4 mt-0.5 text-gray-700" style={{ lineHeight: "1.3" }}>
              <li>Developed a resource management platform for tracking equipment and assets with real-time analytics dashboards.</li>
              <li>Built RESTful APIs with Express.js handling CRUD operations for inventory, users, and audit logs.</li>
              <li>Integrated MongoDB aggregation pipelines for generating utilization reports and maintenance schedules.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold">
                Resume Intelligence Platform{" "}
                <span className="font-normal text-gray-400">|</span>{" "}
                <a href="https://github.com/Divy-Parekh/rip1" className="text-xs text-blue-700 underline print:text-gray-600 font-normal">GitHub</a>
              </h3>
              <span className="text-xs text-gray-500">React, TypeScript, NLP</span>
            </div>
            <ul className="list-disc ml-4 mt-0.5 text-gray-700" style={{ lineHeight: "1.3" }}>
              <li>Created an AI-powered resume analysis platform that parses, scores, and delivers actionable feedback.</li>
              <li>Implemented NLP-based keyword extraction and skill matching against job descriptions with 85%+ accuracy.</li>
              <li>Built an intuitive drag-and-drop interface for resume uploads with real-time parsing and scoring results.</li>
            </ul>
          </div>
        </section>

        {/* Hackathon Achievements */}
        <section>
          <SectionTitle>Hackathon Achievements</SectionTitle>
          <ul className="list-disc ml-4 text-gray-700" style={{ lineHeight: "1.3" }}>
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
  <h2 className="text-sm font-bold border-b border-gray-300 pb-0.5 mb-1 text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
    {children}
  </h2>
);

export default Resume;
