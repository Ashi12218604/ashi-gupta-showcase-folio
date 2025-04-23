// Test commit to trigger Vercel deployment
'use client';

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Hero = () => {
  const paragraphs = [
    "I am a data scientist and developer specializing in data analysis, visualization, and machine learning with strong programming skills in Python, Java, and SQL.",
    "My expertise includes building interactive dashboards, implementing machine learning algorithms, and developing user-friendly applications that deliver significant business value through improved efficiency and data-driven decision-making.",
    "I am passionate about finding innovative solutions to complex problems and have a proven track record of reducing costs, improving efficiency, and enhancing user experiences through data analysis and application development."
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-gradient-to-br from-[#f3f4f6] via-[#e5e7eb] to-[#fff] dark:from-[#1f1f1f] dark:via-[#2a2a2a] dark:to-[#1f1f1f] overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="bg.avif"
          alt="Decorative background"
          className="object-cover w-full h-full opacity-10"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Text Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Ashi Gupta
            </motion.h1>

            <p className="text-xl md:text-2xl font-medium mb-4 text-gray-800 dark:text-gray-300">
              Computer Science & ML Engineer
            </p>

            <motion.div
              className="text-gray-700 dark:text-gray-400 mb-8 text-lg space-y-4"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {paragraphs.map((text, i) => (
                <motion.p key={i} variants={paragraphVariants} transition={{ duration: 0.4 }}>
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <Link to="contact" smooth={true} duration={500}>
                <Button className="bg-primary hover:bg-primary/90 text-white shadow-md transition-transform hover:scale-105">
                  Contact Me
                </Button>
              </Link>

              <Button variant="outline" asChild className="hover:bg-muted transition">
                <a
                  href="/lovable-uploads/8791379845_ashi_.pdf"
                  download="8791379845_ashi.pdf"
                  className="flex items-center gap-2"
                >
                  Download CV <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-purple-400 shadow-xl hover:shadow-purple-300 transition-shadow duration-300">
              <img
                src="profile1.jpg"
                alt="Ashi Gupta"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
