import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import img from "./Group 3442.png"
import aboutimg from "./Frame 3578.jpg"
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.jpg"; 

export default function Index() {
  return (
    <div className="min-h-screen bg-portfolio-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="px-6 lg:px-24 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-14">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div>
              <p className="text-xl lg:text-2xl font-poppins font-semibold text-black tracking-wide mb-2">
                Hi I am
              </p>
              <p className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-primary tracking-wide">
                Summaiya Fatima
              </p>
            </div>

            <div className="space-y-2">
              <h1 className="text-6xl lg:text-8xl font-poppins font-bold text-portfolio-dark leading-tight tracking-wider">
                UI & UX
              </h1>
              <h1 className="text-6xl lg:text-8xl font-poppins font-bold text-portfolio-dark leading-tight tracking-wider text-right">
                Designer
              </h1>
            </div>

            <p className="text-lg lg:text-xl font-poppins text-black tracking-wide max-w-xl text-justify">
              Designing intuitive and impactful user experiences with a focus on
              simplicity and function
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0"  >
            <img
              src={img}
              alt="Summaiya Fatima"
              className="w-80 lg:w-96 h-80 lg:h-96 object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="px-6 lg:px-24 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-15">
          {/* Left Image */}
          <div className="flex-shrink-0">
            <img
              src={aboutimg}
              alt="About Summaiya"
              className="w-80 lg:w-96 h-80 lg:h-96 object-cover rounded-lg border border-black"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 text-center lg:text-left space-y-5">
            <h2 className="text-4xl lg:text-6xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              About Me
            </h2>
            <p className="text-lg lg:text-xl font-poppins text-portfolio-gray leading-normal tracking-wide">
              Hi, I'm Summaiya Fatima — a UX/UI Designer with a background in
              Computer Science and a deep interest in creating intuitive,
              user-centered digital experiences. With a strong eye for detail
              and a love for clean design, I enjoy transforming complex ideas
              into simple, meaningful interfaces. My approach combines
              creativity with structured thinking, allowing me to design
              solutions that are not only visually appealing but also functional
              and accessible. I'm always eager to learn, explore new design
              trends, and craft experiences that truly make an impact.
            </p>
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section id="work" className="px-6 lg:px-44 py-16 lg:py-20">
        <div className="space-y-16 lg:space-y-32">
          {/* Section Title */}
          <h2 className="text-4xl lg:text-6xl font-poppins font-semibold text-portfolio-dark text-center tracking-wide">
            My Work
          </h2>

          {/* Project 1 - Banavo.ai */}
          <div className="space-y-8 lg:space-y-10">
            <div className="flex justify-center">
              <img
                src={image1}
                alt="Banavo.ai Marketing Assist"
                className="w-full max-w-4xl h-auto rounded border-2 border-portfolio-primary"
              />
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-primary tracking-wide">
                Banavo.ai-Marketing Assist
              </h3>
              <p className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide">
                An AI-powered marketing assistant designed to help mid-cap
                e-commerce teams optimize strategy, track performance, and drive
                smarter campaigns with data-driven insights — all in one
                intuitive dashboard.
              </p>
              <Link
                to="/project/banavo"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-portfolio-primary rounded-xl text-lg lg:text-xl font-poppins text-portfolio-dark hover:bg-portfolio-primary hover:text-white transition-colors tracking-wide"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Project 2 - ChemFlow Platform */}
          <div className="space-y-8 lg:space-y-10">
            <div className="flex justify-center">
              <img
                src={image2}
                alt="ChemFlow Platform"
                className="w-full max-w-4xl h-auto rounded border-2 border-portfolio-primary"
              />
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-primary tracking-wide">
                ChemFlow – AI-Driven Drug Discovery Platform
              </h3>
              <p className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide">
                ChemFlow is an AI-powered, knowledge-based drug discovery
                platform that aims to reduce the cost, time, and failure rate in
                pharmaceutical research. Through intuitive design, advanced
                predictive tools, and seamless data visualization, I helped
                build a user-centric experience that empowers scientists to make
                breakthrough discoveries faster.
              </p>
              <Link
                to="/project/chemflow"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-portfolio-primary rounded-xl text-lg lg:text-xl font-poppins text-portfolio-dark hover:bg-portfolio-primary hover:text-white transition-colors tracking-wide"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Project 3 - ChemFlow Landing */}
          <div className="space-y-8 lg:space-y-10">
            <div className="flex justify-center">
              <img
                src={image3}
                alt="ChemFlow Landing Page"
                className="w-full max-w-4xl h-auto rounded border-2 border-portfolio-primary"
              />
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-primary tracking-wide">
                ChemFlow – AI-Driven Drug Discovery Platform(Landing Page)
              </h3>
              <p className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide">
                ChemFlow is an AI-powered drug discovery platform designed to
                revolutionize how researchers explore, predict, and optimize
                drug candidates. Built for biotech professionals and scientists,
                it offers intelligent tools from molecule editing to predictive
                modeling — all in one intuitive interface.
              </p>
              <Link
                to="/project/chemflow-landing"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-portfolio-primary rounded-xl text-lg lg:text-xl font-poppins text-portfolio-dark hover:bg-portfolio-primary hover:text-white transition-colors tracking-wide"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     <section id="contact" className="px-6 lg:px-44 py-16 lg:py-20">
  <div className="flex justify-center">
    <div className="bg-portfolio-primary rounded-3xl p-8 lg:p-12 max-w-4xl w-full">
      <div className="text-center space-y-8">
        <h2 className="text-4xl lg:text-6xl font-poppins font-semibold text-white tracking-wide">
          Get In Touch
        </h2>
        <p className="text-base lg:text-lg font-poppins text-portfolio-light leading-relaxed max-w-2xl mx-auto">
          I'm very approachable and would love to speak to you. Feel free
          to call, send me an email. Follow me in social media or simply
          complete the enquiry form.
        </p>

        {/* Contact Info */}
    <div className="space-y-5">
  <div className="flex flex-col items-start space-y-5">
    {/* Email */}
    <div className="flex items-center gap-4  ml-10">
      <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
        <svg className="w-5 h-4 fill-white" viewBox="0 0 20 16">
          <path
            d="M16.0322 3.87148e-07C16.4707 -1.18844e-05 16.849 0.000133219 17.1621 0.0214848C17.4919 0.0439888 17.8225 0.093512 18.1484 0.228516C18.8832 0.532989 19.467 1.11679 19.7715 1.85156C19.9065 2.17749 19.956 2.50806 19.9785 2.83789C19.9999 3.15104 20 3.52935 20 3.96777V12.0322C20 12.4707 19.9999 12.849 19.9785 13.1621C19.956 13.4919 19.9065 13.8225 19.7715 14.1484C19.467 14.8832 18.8832 15.467 18.1484 15.7715C17.8225 15.9065 17.4919 15.956 17.1621 15.9785C16.849 15.9999 16.4707 16 16.0322 16H3.96777C3.52935 16 3.15104 15.9999 2.83789 15.9785C2.50806 15.956 2.17749 15.9065 1.85156 15.7715C1.11679 15.467 0.532989 14.8832 0.228516 14.1484C0.093512 13.8225 0.0439888 13.4919 0.0214848 13.1621C0.000133155 12.849 -1.18845e-05 12.4707 3.87144e-07 12.0322V3.96777C-1.18844e-05 3.52935 0.000133068 3.15104 0.0214848 2.83789C0.0439888 2.50806 0.093512 2.17749 0.228516 1.85156C0.532989 1.11679 1.11679 0.532989 1.85156 0.228516C2.17749 0.093512 2.50806 0.0439888 2.83789 0.0214848C3.15104 0.000133064 3.52935 -1.18844e-05 3.96777 3.87148e-07H16.0322ZM17.6826 2.27832C17.3418 1.88881 16.7657 1.82699 16.3525 2.12012L16.2715 2.18359L10.6592 7.0957C10.2823 7.42526 9.71874 7.42513 9.3418 7.0957L3.72852 2.18359L3.64844 2.12012C3.23524 1.82677 2.65828 1.88873 2.31738 2.27832C1.977 2.66796 1.99234 3.24777 2.33789 3.61816L2.41211 3.68945L8.02441 8.60059C9.15535 9.58994 10.8446 9.58983 11.9756 8.60059L17.5889 3.68945C18.0044 3.32587 18.046 2.69396 17.6826 2.27832Z"
          />
        </svg>
      </div>
      <div className="text-left">
        <p className="text-xl lg:text-2xl font-poppins font-semibold text-white tracking-wide">
          Email
        </p>
        <p className="text-sm lg:text-base font-poppins text-portfolio-light tracking-wide">
          summaiyafatima854@gmail.com
        </p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-4  ml-10">
      <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.55.57 1 1 0 011 1v3.61a1 1 0 01-.91 1A17.92 17.92 0 013 5.91 1 1 0 014 5h3.61a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.21 1.11l-2.2 2.2z" />
        </svg>
      </div>
      <div className="text-left">
        <p className="text-xl lg:text-2xl font-poppins font-semibold text-white tracking-wide">
          Phone
        </p>
        <p className="text-sm lg:text-base font-poppins text-portfolio-light tracking-wide">
          9880473852
        </p>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-portfolio-primary py-6">
        <div className="px-6 lg:px-24 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="font-poppins text-white text-lg lg:text-xl tracking-wide text-center lg:text-left">
            © 2023 Summaiya All Rights Reserved, Inc.
          </p>

          <div className="flex items-center gap-8">
            {/* Instagram */}
         

            {/* Email */}
            <div className="w-15 h-15 bg-portfolio-primary bg-opacity-70 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white">
              <svg className="w-5 h-4 fill-white" viewBox="0 0 20 16">
                <path
                  d="M16.0322 3.87148e-07C16.4707 -1.18844e-05 16.849 0.000133219 17.1621 0.0214848C17.4919 0.0439888 17.8225 0.093512 18.1484 0.228516C18.8832 0.532989 19.467 1.11679 19.7715 1.85156C19.9065 2.17749 19.956 2.50806 19.9785 2.83789C19.9999 3.15104 20 3.52935 20 3.96777V12.0322C20 12.4707 19.9999 12.849 19.9785 13.1621C19.956 13.4919 19.9065 13.8225 19.7715 14.1484C19.467 14.8832 18.8832 15.467 18.1484 15.7715C17.8225 15.9065 17.4919 15.956 17.1621 15.9785C16.849 15.9999 16.4707 16 16.0322 16H3.96777C3.52935 16 3.15104 15.9999 2.83789 15.9785C2.50806 15.956 2.17749 15.9065 1.85156 15.7715C1.11679 15.467 0.532989 14.8832 0.228516 14.1484C0.093512 13.8225 0.0439888 13.4919 0.0214848 13.1621C0.000133155 12.849 -1.18845e-05 12.4707 3.87144e-07 12.0322V3.96777C-1.18844e-05 3.52935 0.000133068 3.15104 0.0214848 2.83789C0.0439888 2.50806 0.093512 2.17749 0.228516 1.85156C0.532989 1.11679 1.11679 0.532989 1.85156 0.228516C2.17749 0.093512 2.50806 0.0439888 2.83789 0.0214848C3.15104 0.000133064 3.52935 -1.18844e-05 3.96777 3.87148e-07H16.0322ZM17.6826 2.27832C17.3418 1.88881 16.7657 1.82699 16.3525 2.12012L16.2715 2.18359L10.6592 7.0957C10.2823 7.42526 9.71874 7.42513 9.3418 7.0957L3.72852 2.18359L3.64844 2.12012C3.23524 1.82677 2.65828 1.88873 2.31738 2.27832C1.977 2.66796 1.99234 3.24777 2.33789 3.61816L2.41211 3.68945L8.02441 8.60059C9.15535 9.58994 10.8446 9.58983 11.9756 8.60059L17.5889 3.68945C18.0044 3.32587 18.046 2.69396 17.6826 2.27832Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
