import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import image2 from "./2.png"; // Updated import path for image2
import image5 from "./5.jpg"

export default function ProjectChemFlow() {
  return (
    <div className="min-h-screen bg-portfolio-background">
      <Navbar />

      <div className="px-6 lg:px-44 py-12 lg:py-16">
        {/* Project Title */}
        <h1 className="text-3xl lg:text-4xl font-poppins font-semibold text-portfolio-primary text-center tracking-wide mb-12">
          ChemFlow – AI-Driven Drug Discovery Platform
        </h1>

        {/* Project Image */}
        <div className="flex justify-center mb-16">
          <img
            src={image2}
            alt="ChemFlow Platform"
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
                <span className="font-semibold text-portfolio-dark">
                  Objective:
                </span>{" "}
                Build a modern platform for drug discovery using AI, knowledge
                graphs, and predictive modeling.
              </p>
              <p>
                <span className="font-semibold text-portfolio-dark">
                  Outcome:
                </span>{" "}
                A seamless, research-friendly interface that integrates molecule
                editing, drug-target prediction, and interactive visualization
              </p>
            </div>
          </section>

          {/* Problem Statement */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Problem Statement
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-2">
              <p>
                • Drug discovery is expensive (~$2.6B per drug) and slow (10–15
                years).
              </p>
              <p>• 90% of clinical trials fail.</p>
              <p>• Data remains siloed across systems.</p>
              <p>
                • Complexity in biological systems makes interpretation harder.
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
                • Designing around complex scientific data (e.g., SMILES,
                UniProt) for a non-linear workflow.
              </p>
              <p>
                • Visualizing massive, interrelated biological data (genes,
                proteins, drugs).
              </p>
              <p>
                • Maintaining usability while incorporating cutting-edge AI
                tools.
              </p>
              <p>
                • Representing multi-level outputs like predictive scores,
                docking results, and molecule properties.
              </p>
            </div>
          </section>

          {/* Solution */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Solution
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-2">
              <p>
                • Built intuitive dashboards for accessing predictive tools and
                user history.
              </p>
              <p>
                • Created search interfaces powered by large language models
                (LLMs) and knowledge graphs.
              </p>
              <p>
                • Integrated molecular viewers and editors with real-time
                structure visualization.
              </p>
              <p>
                • Designed detail-rich pages for drugs and proteins, backed by
                intelligent, scrollable data tables.
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
                • Studied user flow in scientific software like PubChem,
                UniProt, and Mcule.
              </p>
              <p>
                • Consulted with chemists and bioinformaticians to map how they
                interpret drug-protein interactions.
              </p>
              <p>
                • Benchmarked tools like molecular editors, visualizers, and
                predictive ADMET tools.
              </p>
              <p>
                • Mapped AI query types to UI functions for better user
                understanding.
              </p>
            </div>
          </section>

          {/* Design Approach */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Design Approach
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-4">
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Consistency:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Built a clean, modular UI system for repeatable patterns.
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Data Clarity:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Used cards, tables, and viewers to present complex information
                  clearly.
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Scalability:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Designed components to handle expanding predictive and
                  modeling tools.
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Accessibility:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Ensured UI worked for both experts and early-stage
                  researchers.
                </span>
              </div>
            </div>
          </section>

          {/* Additional Project Image */}
          <div className="flex justify-center my-12">
            <img
              src={image5}
              alt="ChemFlow Dashboard Detail"
              className="w-full max-w-4xl h-auto rounded border-2 border-portfolio-primary"
            />
          </div>

          {/* Core Features */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Core Features
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-4">
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Drug & Protein Pages
                </span>
              </div>
              <div className="ml-4 space-y-1">
                <p>• Detailed molecular & biological properties</p>
                <p>• Embedded molecule viewer</p>
                <p>
                  • Scrollable associations with diseases, proteins, and drugs
                </p>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Predictive Tools
                </span>
              </div>
              <div className="ml-4 space-y-1">
                <p>• Drug repurposing (based on targets/diseases)</p>
                <p>• Novel drug prediction & pairwise interaction scoring</p>
                <p>• Confidence scores & docking energy results</p>
                <p>• ADMET prediction for safety analysis</p>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Molecule Editing
                </span>
              </div>
              <div className="ml-4">
                <p>• Intuitive molecule editor with save/access support</p>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Docking Simulation
                </span>
              </div>
              <div className="ml-4 space-y-1">
                <p>• Adjustable parameters (exhaustiveness, CPU)</p>
                <p>• Interactive results for molecule-target interactions</p>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Investigation History
                </span>
              </div>
              <div className="ml-4">
                <p>• Organized logs of user experiments and chat queries</p>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  LLM-Powered Chat
                </span>
              </div>
              <div className="ml-4">
                <p>
                  • NLP-driven scientific assistant for queries and predictions
                </p>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Profile Settings
                </span>
              </div>
              <div className="ml-4">
                <p>
                  • Custom parameters for prediction, docking, and
                  personalization
                </p>
              </div>
            </div>
          </section>

          {/* Planned Features */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Planned Feature
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-2">
              <p>• Alphaphold-based protein docking</p>
              <p>• Generative diffusion models for novel molecules</p>
              <p>• Mutant protein behavior prediction</p>
            </div>
          </section>

          {/* My Design Process */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              My Design Process
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-2">
              <p>• Requirement breakdown with product and AI teams</p>
              <p>
                • Wireframing for dashboard, drug/protein pages, and editor
                interfaces
              </p>
              <p>
                • High-fidelity UI design using component-based Figma workflow
              </p>
              <p>• Iterative testing with AI and research teams for clarity</p>
              <p>
                • Final handoff with developer annotations and specifications
              </p>
            </div>
          </section>

          {/* Collaboration */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Collaboration
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-2">
              <p>
                • Worked directly with AI researchers and ML engineers to
                understand algorithms and constraints
              </p>
              <p>
                • Coordinated with backend teams to design API-integrated
                layouts
              </p>
              <p>
                • Participated in feedback loops with domain experts (bio,
                pharma, and chemistry)
              </p>
              <p>
                • Regular sync-ups with frontend developers for smooth handover
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
                • Translating dense scientific concepts into simple visual
                formats
              </p>
              <p>
                • Working closely with AI engineers to bridge functionality with
                usability
              </p>
              <p>
                • Designing for LLM-integrated systems with custom predictive
                logic
              </p>
              <p>
                • Creating flexible systems that adapt to both structured
                queries and visual workflows
              </p>
              <p>
                • Enhanced my skills in data-driven UI/UX, scientific tool
                design, and cross-functional team collaboration
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12">
            <Link
              to="/project/banavo"
              className="text-lg lg:text-xl font-poppins text-portfolio-dark hover:text-portfolio-primary transition-colors tracking-wide"
            >
              ← Banavo.ai
            </Link>
            <Link
              to="/project/chemflow-landing"
              className="text-lg lg:text-xl font-poppins text-portfolio-dark hover:text-portfolio-primary transition-colors tracking-wide"
            >
              ChemFlow 2 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
