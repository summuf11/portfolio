import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import image3 from "./3.jpg"
import image6 from "./6.jpg"; // Updated import path for image6

export default function ProjectChemFlowLanding() {
  return (
    <div className="min-h-screen bg-portfolio-background">
      <Navbar />

      <div className="px-6 lg:px-44 py-12 lg:py-16">
        {/* Project Title */}
        <h1 className="text-3xl lg:text-4xl font-poppins font-semibold text-portfolio-primary text-center tracking-wide mb-12">
          ChemFlow – AI-Driven Drug Discovery Platform (Landing Page)
        </h1>

        {/* Project Image */}
        <div className="flex justify-center mb-16">
          <img
            src={image3}
            alt="ChemFlow Landing Page"
            className="w-full max-w-4xl h-auto rounded border-2 border-portfolio-primary"
          />
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Project Overview */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Project Overview
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-2">
              <p>
                ChemFlow is a web-based AI platform to assist scientists in drug
                discovery through deep learning tools and advanced data
                modeling.
              </p>
              <p>
                It integrates LLMs and molecular docking to simplify and
                accelerate the discovery process.
              </p>
              <p>
                Designed for researchers, biotech professionals, and pharma
                experts aiming to predict and optimize drug-protein
                interactions.
              </p>
            </div>
          </section>

          {/* Problem Statement */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Problem Statement
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-2">
              <p>• Drug discovery is complex, expensive, and time-consuming.</p>
              <p>
                • Researchers lack a unified tool that integrates predictive
                modeling, molecule editing, and intuitive exploration.
              </p>
              <p>
                • There's a knowledge barrier in understanding complex outputs
                from traditional tools.
              </p>
            </div>
          </section>

          {/* Key Challenges */}
          <section className="space-y-8">
            <h2 className="text-xl lg:text-2xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Key Challenges
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-2">
              <p>
                • Designing a highly technical interface that remains intuitive
                and accessible to non-developers.
              </p>
              <p>
                • Ensuring the platform supports complex operations like docking
                and predictions in a user-friendly way.
              </p>
              <p>
                • Visualizing molecular structures and interactions effectively.
              </p>
              <p>• Balancing scientific accuracy with design simplicity.</p>
            </div>
          </section>

          {/* Solution */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Solution
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-2">
              <p>
                • Developed a multi-functional interface combining drug/protein
                detail exploration, molecule editing, prediction, and AI chat
                assistance.
              </p>
              <p>
                • Integrated LLM-based insights to help researchers interact
                with complex biological data in simple language.
              </p>
              <p>
                • Created a guided flow from search to prediction to action,
                enhancing usability and discoverability.
              </p>
            </div>
          </section>

          {/* Research */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Research
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-2">
              <p>
                • Studied existing drug discovery tools like AlphaFold, PyMOL,
                and DeepChem to understand gaps in usability.
              </p>
              <p>
                • Conducted competitor analysis on AI-assisted drug platforms
                and scientific databases.
              </p>
              <p>
                • Interviewed professionals in biotech and pharma for insights
                into daily research workflows.
              </p>
              <p>
                • Mapped out the cognitive load of scientific processes to
                simplify interaction flows.
              </p>
            </div>
          </section>

          {/* Design Approach */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Design Approach
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-2">
              <p>
                • Followed a user-centric design model focused on clarity,
                interaction simplicity, and scientific reliability.
              </p>
              <p>
                • Created low- to high-fidelity wireframes, tested via internal
                peer feedback and iterations.
              </p>
              <p>
                • Adopted a clean, clinical UI style using soft neutrals and
                accent colors to highlight molecular interactions.
              </p>
              <p>
                • Prioritized responsiveness and accessibility for cross-device
                compatibility.
              </p>
            </div>
          </section>

          {/* Additional Project Image */}
          <div className="flex justify-center my-12">
            <img
              src={image6}
              alt="ChemFlow Landing Detail"
              className="w-full max-w-4xl h-auto rounded border-2 border-portfolio-primary"
            />
          </div>

          {/* Key Features */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Key Features
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-4">
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Drug & Protein Detail Pages
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  – Explore structures, sequences, and functions.
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Predicting Drugs
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  – AI-assisted predictions for drug candidates based on input
                  molecules or diseases.
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Molecule Editing
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  – Intuitive molecule builder with 2D/3D views.
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Docking Engine
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  – Run docking simulations and view binding scores.
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Investigation History
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  – Track previous research actions and queries.
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  AI-Powered Chat
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  – Interact with an LLM-based assistant to gain insight,
                  explain results, or suggest next steps.
                </span>
              </div>
            </div>
          </section>

          {/* My Design Process */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              My Design Process
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-4">
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Requirement Gathering
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  – Understood business goals and scientific processes.
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  User Research
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  – Interviewed and studied the behavior of end-users.
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Wireframing
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  – Created low-fidelity sketches of landing page and dashboard.
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Prototyping
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  – Developed high-fidelity prototypes using Figma.
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  User Testing
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  – Conducted feedback sessions for iterative improvements.
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Final Implementation Handoff
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  – Provided UI documentation and design tokens.
                </span>
              </div>
            </div>
          </section>

          {/* Collaboration */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Collaboration
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-2">
              <p>Worked closely with:</p>
              <p>• Product Managers for platform vision</p>
              <p>• AI Researchers for predictive and docking workflows</p>
              <p>• Developers for feasibility checks and handoff</p>
              <p>
                • Maintained continuous design-dev sync via Figma and Notion
              </p>
            </div>
          </section>

          {/* What I Learned */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              What I Learned
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-2">
              <p>
                • Gained deep understanding of biotech workflows and AI's role
                in drug discovery.
              </p>
              <p>
                • Learned to translate complex scientific processes into simple,
                intuitive UX flows.
              </p>
              <p>
                • Improved my collaborative design communication with scientists
                and engineers.
              </p>
              <p>
                • Developed skills in creating dashboards with advanced data
                visualizations.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12">
            <Link
              to="/project/chemflow"
              className="text-lg lg:text-xl font-poppins text-portfolio-dark hover:text-portfolio-primary transition-colors tracking-wide"
            >
              ← ChemFlow
            </Link>
            <Link
              to="/"
              className="text-lg lg:text-xl font-poppins text-portfolio-dark hover:text-portfolio-primary transition-colors tracking-wide"
            >
           
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
