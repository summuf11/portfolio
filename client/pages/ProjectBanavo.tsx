import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import image1 from "./1.png"; // Updated import path for image1
import image4 from "./4.jpg"; // Updated import path for image4
export default function ProjectBanavo() {
  return (
    <div className="min-h-screen bg-portfolio-background">
      <Navbar />

      <div className="px-6 lg:px-44 py-12 lg:py-16">
        {/* Project Title */}
        <h1 className="text-3xl lg:text-4xl font-poppins font-semibold text-portfolio-primary text-center tracking-wide mb-12">
          Banavo.ai-Marketing Assist
        </h1>

        {/* Project Image */}
        <div className="flex justify-center mb-16">
          <img
            src={image1}
            alt="Banavo.ai Marketing Assist"
            className="w-full max-w-4xl h-auto rounded border-2 border-portfolio-primary"
          />
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Project Overview */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Project Overview
            </h2>
            <p className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal">
              Marketing Assist is a smart, all-in-one AI platform designed for
              mid-cap e-commerce marketing teams. It brings together customer
              segmentation, real-time campaign tracking, and AI-driven
              recommendations to help marketing teams make fast, confident
              decisions. The platform enables teams to generate campaigns,
              analyze performance, and identify trends with minimal manual
              effort.
            </p>
          </section>

          {/* Problem Statement */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Problem Statement
            </h2>
            <p className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal">
              Marketing teams often struggle with scattered data, slow
              decision-making, and unclear customer insights. They need a
              unified platform that not only shows performance metrics but also
              helps them act on those insights in real-time, especially in
              competitive e-commerce environments.
            </p>
          </section>

          {/* Key Challenges */}
          <section className="space-y-8">
            <h2 className="text-xl lg:text-2xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Key Challenges
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-2">
              <p>
                • Designing a clean dashboard to display complex data (RFM, AOV,
                CAC, ROAS) in a user-friendly format
              </p>
              <p>
                • Visualizing microsegment performance and anomaly detection
                clearly
              </p>
              <p>
                • Allowing marketers to interact via prompt-based queries
                naturally
              </p>
              <p>
                • Aligning design with AI-powered, backend-driven functionality
              </p>
              <p>
                • Ensuring the layout is responsive and scalable for future
                features
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
                I designed a modular, intuitive dashboard that balances data
                complexity with clarity. It allows marketing teams to:
              </p>
              <p>
                • Monitor sales, marketing, and customer metrics in real-time
              </p>
              <p>• Interact through conversational queries</p>
              <p>• Generate campaign ideas using AI prompts</p>
              <p>• Track campaign impact with predictive insights</p>
            </div>
          </section>

          {/* Research */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              Research
            </h2>
            <div className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide leading-normal space-y-2">
              <p>
                • Studied tools like Google Analytics, Northbeam, and Meta Ads
                Manager
              </p>
              <p>• Analyzed user pain points in managing multiple tools</p>
              <p>
                • Understood key user flows through internal docs and
                stakeholder interviews
              </p>
              <p>
                • Mapped the entire journey from insight to action to
                performance tracking
              </p>
              <p>
                • Benchmarked designs against other AI and analytics tools for
                UI simplicity
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
                  Used a clean, structured layout for complex metrics
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Modularity:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Designed reusable card-based components for metrics, graphs,
                  and segments
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Clarity:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Prioritized visual hierarchy with typography, whitespace, and
                  color-coded insights
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Interactivity:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Designed hover details, collapsible sections, and prompt input
                  fields
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Scalability:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Built layouts that can expand with future features like print
                  tracking, SKU-level insights, and deeper campaign drill-downs
                </span>
              </div>
            </div>
          </section>

          {/* Additional Project Image */}
          <div className="flex justify-center my-12">
            <img
              src={image4}
              alt="Banavo.ai Dashboard Detail"
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
                  RFM Analysis:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  To segment high/low-value customers
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Micro segmentation:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Based on LTV, churn risk, frequency, AOV, dissatisfaction,
                  etc.
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Anomaly Detection:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Highlight unexpected shifts in performance
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Prompt-Based Interaction:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Ask "How's my repeat customer revenue this week?" and get
                  graphs instantly
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Campaign Generator:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  AI-powered campaigns across Meta, Google, TikTok, Amazon
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Performance Tracker:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Live ROAS, AOV, SKU-wise analysis, churn rate, and engagement
                  metrics
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Print Campaign Tracking:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Unique URLs, promo codes, and QR-based campaign attribution
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
                  Understanding the product flow:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  From log-in → data integration → insights → actions → campaign
                  → results
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Wireframing:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Created low-fidelity layouts to organize dense data without
                  overwhelming users
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  UI Design:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Crafted clean visual styles for marketing data — icons,
                  graphs, KPIs
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Micro-interaction Design:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Hover cards, graph filters, prompt suggestions
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Prototype Testing:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Reviewed with team for feedback on flow clarity and content
                  density
                </span>
              </div>
              <div>
                <span className="font-semibold text-portfolio-dark">
                  Refinements:
                </span>
                <span className="text-portfolio-gray">
                  {" "}
                  Adjusted spacing, data labels, and modularity for better
                  responsiveness
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
              <p>
                • Worked closely with product managers to understand user needs
                and marketing strategy
              </p>
              <p>
                • Coordinated with the backend/data teams to align UI with
                available datasets and analytics APIs
              </p>
              <p>
                • Participated in sprint reviews and design feedback sessions
              </p>
              <p>
                • Delivered Figma prototypes that were handed off to developers
                with detailed design specs
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
                • Designing for AI-driven platforms requires anticipating how
                users will interpret and act on data
              </p>
              <p>
                • Clean UI is not enough — thoughtful{" "}
                <span className="font-semibold text-portfolio-dark">
                  data hierarchy
                </span>{" "}
                and{" "}
                <span className="font-semibold text-portfolio-dark">
                  user flow clarity
                </span>{" "}
                are critical
              </p>
              <p>
                • Prompt-based interactions need natural thinking patterns (not
                technical terms)
              </p>
              <p>
                • Importance of{" "}
                <span className="font-semibold text-portfolio-dark">
                  collaboration with data and marketing teams
                </span>{" "}
                to ground designs in reality
              </p>
              <p>
                • Realized the value of{" "}
                <span className="font-semibold text-portfolio-dark">
                  modular, scalable components
                </span>{" "}
                for large dashboards with multiple user types
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12">
            <Link
              to="/"
              className="text-lg lg:text-xl font-poppins text-portfolio-dark hover:text-portfolio-primary transition-colors tracking-wide"
            >
            
            </Link>
            <Link
              to="/project/chemflow"
              className="text-lg lg:text-xl font-poppins text-portfolio-dark hover:text-portfolio-primary transition-colors tracking-wide"
            >
              ChemFlow →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
