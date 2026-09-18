import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          EXPERIENCE
        </h2>

        <div className="w-24 h-1 bg-purple-500 mx-auto mt-2"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My professional experience and technical journey
        </p>
      </div>

      {/* Experience Card */}
      <div className="max-w-4xl mx-auto py-10">
        <div
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8
          rounded-2xl border border-white
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
          hover:shadow-[0_0_25px_2px_rgba(130,69,236,0.45)]
          transition-all duration-300"
        >
          {/* Header */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">
              Software Engineer Intern – DevOps
            </h3>

            <h4 className="text-xl font-semibold text-purple-400 mt-2">
              Intellect Design Arena Ltd.
            </h4>

            <p className="text-gray-400 text-sm mt-1">
              Chennai, Tamil Nadu, India
            </p>

            <p className="text-gray-500 text-sm mt-2">
              Jan 2026 – Jul 2026
            </p>
          </div>

          {/* Responsibilities */}
          <ul className="mt-8 space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <li className="flex gap-3">
              <span className="text-purple-400 text-lg">▹</span>
              <span>
                Deployed application, database, and Liquibase components
                across DIT/SIT environments for a banking client on
                OpenShift (Kubernetes).
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-purple-400 text-lg">▹</span>
              <span>
                Enhanced Helm Charts with multi-ingress configuration for
                environment-specific routing.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-purple-400 text-lg">▹</span>
              <span>
                Developed and maintained 100+ Jenkins jobs for automated
                DIT → SIT code promotion, branch onboarding, deployment
                automation, and Git-based release workflows.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-purple-400 text-lg">▹</span>
              <span>
                Provisioned AWS EC2 instances and managed Liquibase schema
                migrations and rollback validation across 6+ schemas.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-purple-400 text-lg">▹</span>
              <span>
                Debugged application and deployment issues across
                microservices, performed root-cause analysis, and
                implemented fixes to reduce recurring failures.
              </span>
            </li>
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              "Linux",
              "Jenkins",
              "CI/CD",
              "Docker",
              "Kubernetes",
              "OpenShift",
              "Helm",
              "AWS",
              "Kafka",
              "Liquibase",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm rounded-3xl
                bg-transparent border-2 border-gray-700
                text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;